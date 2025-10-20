import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

const DATA_FILE = path.join(process.cwd(), "data", "codes.json");
const ADMIN_SECRET = process.env.ADMIN_SECRET || "";
const TTL_MIN = Number(process.env.CODE_TTL_MINUTES || 120);

async function readStore(){
  try { return JSON.parse(await fs.readFile(DATA_FILE,"utf8")); }
  catch { return []; }
}
async function writeStore(a:any[]){ await fs.mkdir(path.dirname(DATA_FILE),{recursive:true}); await fs.writeFile(DATA_FILE, JSON.stringify(a,null,2),"utf8"); }

export async function POST(req: NextRequest){
  const sec = req.headers.get("x-admin-secret") || "";
  if (sec !== ADMIN_SECRET) return NextResponse.json({error:"Unauthorized"}, {status:401});
  const { email, role="Funds Disbursement Officer", sendEmail=true } = await req.json();
  if(!email) return NextResponse.json({error:"Missing email"},{status:400});

  const code = crypto.randomInt(100000,999999).toString();
  const hash = await bcrypt.hash(code, 10);
  const item = { id: crypto.randomUUID(), email, role, hash, createdAt: Date.now(), expiresAt: Date.now()+TTL_MIN*60*1000, used:false };

  const store = await readStore(); store.push(item); await writeStore(store);

  if (sendEmail && process.env.SMTP_HOST){
    const tx = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT||587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await tx.sendMail({
      from: process.env.EMAIL_FROM || "support@bsonsinc.com",
      to: email,
      subject: "Bsons Inc — Team access code",
      text: `Your access code: ${code}\nRole: ${role}\nExpires in ${TTL_MIN} minutes.`,
      html: `<p>Your access code: <b>${code}</b></p><p>Role: ${role}</p><p>Expires in ${TTL_MIN} minutes.</p>`
    });
  }

  return NextResponse.json({ ok:true, message:"Code created (emailed if SMTP configured)" });
}

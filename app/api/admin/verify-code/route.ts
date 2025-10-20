import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const DATA_FILE = path.join(process.cwd(), "data", "codes.json");
async function readStore(){ try { return JSON.parse(await fs.readFile(DATA_FILE,"utf8")); } catch { return []; } }
async function writeStore(a:any[]){ await fs.mkdir(path.dirname(DATA_FILE),{recursive:true}); await fs.writeFile(DATA_FILE, JSON.stringify(a,null,2),"utf8"); }

export async function POST(req: NextRequest){
  const { email, code, role } = await req.json();
  if(!email || !code) return NextResponse.json({error:"Missing fields"}, {status:400});
  const store = await readStore();
  const idx = store.findIndex((r:any)=> r.email===email && !r.used && r.expiresAt > Date.now());
  if (idx===-1) return NextResponse.json({error:"Invalid or expired code"}, {status:401});
  const row = store[idx];
  const ok = await bcrypt.compare(code, row.hash);
  if (!ok) return NextResponse.json({error:"Invalid code"}, {status:401});
  store[idx].used = true; store[idx].usedAt = Date.now(); await writeStore(store);
  const sessionToken = crypto.randomUUID();
  return NextResponse.json({ ok:true, sessionToken, role: row.role });
}

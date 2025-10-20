import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
const FILE = path.join(process.cwd(), "data", "tasks.json");
export async function GET(){
  const raw = await fs.readFile(FILE, "utf8").catch(()=> "[]");
  return NextResponse.json(JSON.parse(raw));
}

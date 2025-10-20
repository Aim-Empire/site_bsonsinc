"use client";
import { useState } from "react";

export default function Codes(){
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Funds Disbursement Officer");
  const [secret, setSecret] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [msg, setMsg] = useState("");

  async function createCode(e:any){
    e.preventDefault();
    setMsg("Creating...");
    const res = await fetch("/api/admin/create-code", {
      method: "POST",
      headers: { "content-type":"application/json", "x-admin-secret": secret },
      body: JSON.stringify({ email, role, sendEmail })
    });
    const json = await res.json();
    setMsg(res.ok ? "✅ Code created (emailed if SMTP set)" : `❌ ${json.error||"Failed"}`);
  }

  return (
    <main className="min-h-screen container-default py-10">
      <h1 className="font-display text-3xl text-brand-navy">Create Team Access Code</h1>
      <form onSubmit={createCode} className="mt-6 max-w-xl space-y-4">
        <input className="w-full rounded-xl border px-4 py-3" placeholder="team.member@bsonsinc.com" value={email} onChange={e=>setEmail(e.target.value)} required />
        <select className="w-full rounded-xl border px-4 py-3" value={role} onChange={e=>setRole(e.target.value)}>
          <option>Funds Disbursement Officer</option>
          <option>Operations</option>
          <option>Community Support</option>
        </select>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={sendEmail} onChange={e=>setSendEmail(e.target.checked)} /> Email code to user</label>
        <input className="w-full rounded-xl border px-4 py-3" type="password" placeholder="ADMIN_SECRET" value={secret} onChange={e=>setSecret(e.target.value)} required />
        <button className="btn w-full">Generate Code</button>
        {msg && <p className="text-sm mt-2">{msg}</p>}
      </form>
    </main>
  );
}

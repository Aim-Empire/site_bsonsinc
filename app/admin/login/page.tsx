"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login(){
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Funds Disbursement Officer");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: any){
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin/verify-code", {
      method: "POST",
      headers: { "content-type":"application/json" },
      body: JSON.stringify({ email, role, code })
    });
    const json = await res.json();
    setLoading(false);
    if(!res.ok){ alert(json.error||"Login failed"); return; }
    localStorage.setItem("adminToken", json.sessionToken);
    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminRole", json.role || role);
    window.location.href = "/admin/dashboard";
  }

  return (
    <main className="min-h-screen container-default py-10">
      <h1 className="font-display text-4xl text-brand-navy">Team Admin Login</h1>
      <form onSubmit={onSubmit} className="mt-6 max-w-xl space-y-4">
        <input className="w-full rounded-xl border px-4 py-3" placeholder="you@bsonsinc.com" value={email} onChange={e=>setEmail(e.target.value)} required />
        <select className="w-full rounded-xl border px-4 py-3" value={role} onChange={e=>setRole(e.target.value)}>
          <option>Funds Disbursement Officer</option>
          <option>Operations</option>
          <option>Community Support</option>
        </select>
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Access code" value={code} onChange={e=>setCode(e.target.value)} required />
        <button className="btn w-full">{loading?"Checking...":"Enter Dashboard"}</button>
        <Link href="/" className="btn-outline w-full text-center">← Back home</Link>
      </form>
    </main>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Login(){
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("FDO");
  const [roles, setRoles] = useState<{code:string;name:string}[]>([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("/roles.json").then(r=>r.json()).then(d => setRoles(d.roles || [])).catch(()=>{});
  }, []);

  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault();
    const expected = process.env.NEXT_PUBLIC_TEAM_CODE || "BSONS2025";
    if (code.trim() !== expected) {
      alert("Invalid access code.");
      return;
    }
    localStorage.setItem("bsons_admin", JSON.stringify({ email, role, ts: Date.now() }));
    window.location.href = "/admin";
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="container-default py-10">
        <h1 className="font-display text-3xl text-brand-navy">Team Admin Login</h1>
        <form className="mt-6 grid gap-4 max-w-md" onSubmit={handleLogin}>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Email</span>
            <input value={email} onChange={e=>setEmail(e.target.value)} required className="border rounded-xl px-3 py-2" placeholder="you@bsonsinc.com" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Role</span>
            <select value={role} onChange={e=>setRole(e.target.value)} className="border rounded-xl px-3 py-2">
              {(roles.length?roles:[{code:"FDO",name:"Funds Disbursement Officer"}]).map(r=>(
                <option key={r.code} value={r.code}>{r.name}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-neutral-700">Access Code</span>
            <input value={code} onChange={e=>setCode(e.target.value)} required className="border rounded-xl px-3 py-2" placeholder="Team code" />
          </label>
          <button className="btn" type="submit">Enter Dashboard</button>
          <Link className="btn-outline" href="/">← Back home</Link>
        </form>
      </section>
    </main>
  );
}

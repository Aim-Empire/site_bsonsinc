"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Task = {
  id: string; title: string; program: string;
  requirements?: string[]; pay?: number; units?: string;
  status?: "available"|"hold"|"done";
  when?: string;
};

export default function Admin(){
  const [session, setSession] = useState<{email:string;role:string}|null>(null);
  const [data, setData] = useState<{tasks:Task[];completed:Task[];currency:string;updated:string}|null>(null);
  const [tab, setTab] = useState<"available"|"completed"|"profile">("available");

  useEffect(() => {
    const raw = localStorage.getItem("bsons_admin");
    if (!raw) { window.location.href = "/admin/login"; return; }
    try {
      const s = JSON.parse(raw);
      setSession({ email: s.email, role: s.role });
    } catch { window.location.href = "/admin/login"; }
  }, []);

  useEffect(() => {
    fetch("/tasks.json").then(r=>r.json()).then(setData).catch(()=>{});
  }, []);

  if (!session) return null;

  return (
    <main className="min-h-screen bg-white">
      <section className="container-default py-6">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-3xl text-brand-navy">Team Dashboard</h1>
          <div className="text-sm text-neutral-600">
            {session.email} · {session.role}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex gap-2">
          {["available","completed","profile"].map((t)=>(
            <button key={t} onClick={()=>setTab(t as any)}
              className={`px-3 py-2 rounded-xl text-sm border ${tab===t?"bg-[var(--brand-cream)] border-brand-navy/30":"bg-white border-neutral-200"}`}>
              {t[0].toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">
          {tab==="available" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {(data?.tasks||[]).map((t)=>(
                <div key={t.id} className="card">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-brand-navy">{t.title}</h3>
                    <span className="text-sm">{data?.currency||"USD"} {t.pay} <span className="text-neutral-500">/{t.units}</span></span>
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">Program: {t.program}</div>
                  {t.requirements?.length ? (
                    <ul className="mt-2 list-disc ml-5 text-sm text-neutral-700">
                      {t.requirements.map((r,i)=><li key={i}>{r}</li>)}
                    </ul>
                  ):null}
                  <div className="mt-3">
                    <span className="inline-flex text-xs rounded-full px-2 py-1 bg-green-50 text-green-700 border border-green-200">Available</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab==="completed" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {(data?.completed||[]).map((t)=>(
                <div key={t.id} className="card">
                  <h3 className="font-semibold text-brand-navy">{t.title}</h3>
                  <div className="text-sm text-neutral-600 mt-1">Program: {t.program}</div>
                  <div className="text-sm text-neutral-600 mt-1">When: {t.when}</div>
                  <div className="text-sm text-neutral-600 mt-1">Pay: {(data?.currency||"USD")} {t.pay} {t.units?`/ ${t.units}`:""}</div>
                </div>
              ))}
            </div>
          )}

          {tab==="profile" && (
            <div className="card max-w-xl">
              <h3 className="font-semibold text-brand-navy">Profile</h3>
              <div className="mt-2 text-sm text-neutral-700">
                <div>Email: {session.email}</div>
                <div>Role: {session.role}</div>
              </div>
              <div className="mt-4 flex gap-3">
                <a className="btn-outline" href="mailto:support@bsonsinc.com?subject=Update Bank Details">Update Bank Details</a>
                <button className="btn" onClick={()=>{ localStorage.removeItem("bsons_admin"); window.location.href="/admin/login"; }}>Log out</button>
              </div>
              <p className="mt-3 text-xs text-neutral-600 italic">This portal is read-only. Payouts are handled by Finance; withdrawals are not enabled here.</p>
            </div>
          )}
        </div>

        <div className="mt-10 text-sm text-neutral-500">
          Data last updated: {data?.updated || "—"} · Edit tasks via <code>public/tasks.json</code> in GitHub or Termux and redeploy.
        </div>

        <div className="mt-6">
          <Link className="btn-outline" href="/">← Back to site</Link>
        </div>
      </section>
    </main>
  );
}

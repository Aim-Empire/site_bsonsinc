"use client";
import { useEffect, useState } from "react";

type Task = { id:string; title:string; requirements:string; pay:number; currency:string; status:"available"|"done" };

export default function Dashboard(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const email = typeof window !== "undefined" ? localStorage.getItem("adminEmail")||"" : "";
  const role  = typeof window !== "undefined" ? localStorage.getItem("adminRole")||"" : "";
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken")||"" : "";

  useEffect(()=>{
    if(!token){ window.location.href="/admin/login"; return; }
    fetch("/api/admin/tasks").then(r=>r.json()).then(setTasks);
  },[token]);

  const available = tasks.filter(t=>t.status==="available");
  const done = tasks.filter(t=>t.status==="done");
  const totalEarned = done.reduce((s,t)=> s + t.pay, 0);

  return (
    <main className="min-h-screen container-default py-10">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile */}
        <section className="card">
          <h2 className="font-display text-xl text-brand-navy">Profile</h2>
          <p className="text-sm mt-2"><b>Email:</b> {email||"—"}</p>
          <p className="text-sm"><b>Role:</b> {role||"—"}</p>
          <p className="text-sm"><b>Bank Details:</b> on file (view-only)</p>
          <div className="mt-4 flex gap-2">
            <a className="btn-outline" href="/admin/login" onClick={()=>localStorage.clear()}>Log out</a>
          </div>
        </section>

        {/* Available Tasks */}
        <section className="card lg:col-span-2">
          <h2 className="font-display text-xl text-brand-navy">Available Tasks</h2>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            {available.map(t=>(
              <div key={t.id} className="rounded-2xl border p-4 bg-white/70">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-neutral-700 mt-1">{t.requirements}</p>
                <p className="text-sm mt-2"><b>Pay:</b> {t.currency} {t.pay}</p>
                <button className="btn-outline mt-2" disabled>Claim (admin assigns)</button>
              </div>
            ))}
            {available.length===0 && <p className="text-sm">No tasks right now.</p>}
          </div>
        </section>

        {/* Completed */}
        <section className="card lg:col-span-3">
          <h2 className="font-display text-xl text-brand-navy">Completed</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left"><th className="py-2">Task</th><th>Pay</th><th>Status</th></tr></thead>
              <tbody>
                {done.map(t=>(
                  <tr key={t.id} className="border-t">
                    <td className="py-2">{t.title}</td>
                    <td>{t.currency} {t.pay}</td>
                    <td>Done</td>
                  </tr>
                ))}
                {done.length===0 && <tr><td className="py-2" colSpan={3}>No completed tasks yet.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-sm"><b>Total Accumulated:</b> USD {totalEarned}</div>
        </section>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Situation Room</h1>
      <p className="mb-8 text-slate-400">Active incidents and critical escalations (Board Paper MVP)</p>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6"><div className="text-2xl font-bold">5</div><div className="text-sm text-slate-400">Active Incidents</div></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6"><div className="text-2xl font-bold">4</div><div className="text-sm text-slate-400">Critical Escalations</div></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6"><div className="text-2xl font-bold">10</div><div className="text-sm text-slate-400">Regulatory Exposure</div></div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6"><div className="text-2xl font-bold">5</div><div className="text-sm text-slate-400">Board Notifications</div></div>
      </div>
    </div>
  );
}

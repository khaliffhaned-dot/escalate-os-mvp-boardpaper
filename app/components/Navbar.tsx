import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">
          ESCALATE <span className="text-orange-500">OS</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <Link href="#pillars" className="hover:text-white">Features</Link>
          <Link href="#regulatory" className="hover:text-white">Regulatory</Link>
          <Link href="#board" className="hover:text-white">Board Intelligence</Link>
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">Sign In</Link>
          <Link href="/dashboard" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

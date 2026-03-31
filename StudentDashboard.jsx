import React from "react";
import {
  Rocket,
  Flame,
  Wallet,
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  Settings,
  MessageCircle,
  Lock,
  Sparkles,
  ChevronRight,
  Send,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="w-full min-h-screen bg-[#050b18] text-white flex overflow-hidden relative">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[520px] h-[520px] bg-cyan-400/20 blur-[170px] top-[-120px] left-[60px]" />
        <div className="absolute w-[440px] h-[440px] bg-blue-500/20 blur-[160px] top-[10px] right-[110px]" />
        <div className="absolute w-[560px] h-[560px] bg-purple-500/20 blur-[190px] bottom-[-220px] right-[40px]" />
        <div className="absolute w-[320px] h-[320px] bg-cyan-300/10 blur-[140px] bottom-[10px] left-[10px]" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-[220px] m-8 rounded-[24px] border border-white/15 bg-white/8 backdrop-blur-xl px-4 py-5 shadow-[0_0_45px_rgba(100,200,255,0.08)]">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.35)]">
            <Sparkles size={18} />
          </div>
          <div>
            <h1 className="text-[15px] font-semibold leading-none">EduVerse</h1>
            <p className="text-[11px] text-white/60 mt-1">Student</p>
          </div>
        </div>

        <nav className="space-y-2 text-[13px]">
          <SidebarItem icon={<LayoutDashboard size={16} />} title="Dashboard" />
          <SidebarItem
            icon={<Sparkles size={16} />}
            title="My Learning Path"
            active
          />
          <SidebarItem icon={<BookOpen size={16} />} title="My Courses" />
          <SidebarItem icon={<FileText size={16} />} title="Assignments & Labs" />
          <SidebarItem icon={<Wallet size={16} />} title="Wallet & Credentials" />
          <SidebarItem icon={<MessageCircle size={16} />} title="AI Mentor" />
          <SidebarItem icon={<Users size={16} />} title="Community" />
          <SidebarItem icon={<Settings size={16} />} title="Profile & Settings" />
        </nav>
      </aside>

      {/* Main */}
      <main className="relative z-10 flex-1 pt-10 pr-10 pb-10">
        <h2 className="text-[20px] font-semibold mb-6 tracking-[0.2px]">
          Student Dashboard
        </h2>

        {/* Main two-column layout */}
        <div className="grid grid-cols-[1.45fr_0.78fr] gap-5 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Next Mission */}
            <div className="rounded-[24px] p-[1px] bg-gradient-to-r from-cyan-400/80 via-cyan-300/40 to-purple-500/70 shadow-[0_0_45px_rgba(34,211,238,0.32)]">
              <div className="rounded-[24px] bg-[linear-gradient(90deg,rgba(17,39,57,0.88),rgba(43,22,66,0.85))] backdrop-blur-xl px-5 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-200/50 to-blue-500/30 border border-white/15 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.22)]">
                    <Rocket size={22} className="text-white" />
                  </div>

                  <div>
                    <p className="text-[12px] text-white/65">Next Mission</p>
                    <h3 className="text-[19px] font-semibold mt-1">
                      React Hooks: UseEffect
                    </h3>
                  </div>
                </div>

                <button className="mt-5 w-full h-11 rounded-xl border border-cyan-300/70 text-cyan-200 bg-cyan-400/10 shadow-[inset_0_0_18px_rgba(34,211,238,0.18),0_0_20px_rgba(34,211,238,0.12)] text-[13px] font-medium">
                  Start Mission
                </button>
              </div>
            </div>

            {/* Learning Path - now just below Next Mission */}
            <div className="relative min-h-[430px] rounded-[24px] border border-white/12 bg-white/6 backdrop-blur-xl p-5 shadow-[0_0_35px_rgba(99,102,241,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_28%)]" />

              <div className="relative flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold">My Learning Path</h3>
                <span className="text-[11px] text-white/45">Progress Map</span>
              </div>

              <div className="relative flex justify-center items-center rounded-[20px] border border-white/6 bg-black/10 py-4">
                <svg width="650" height="300" viewBox="0 0 650 300" className="max-w-full">
                  <defs>
                    <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.5" result="blur3" />
                      <feMerge>
                        <feMergeNode in="blur3" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <line x1="70" y1="150" x2="145" y2="105" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="145" y1="105" x2="220" y2="65" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="145" y1="105" x2="190" y2="150" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="220" y1="65" x2="290" y2="120" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="190" y1="150" x2="290" y2="120" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="220" y1="65" x2="350" y2="120" stroke="#FFD84D" strokeWidth="1.8" opacity="0.75" filter="url(#lineGlow)" />
                  <line x1="290" y1="120" x2="350" y2="150" stroke="#FFD84D" strokeWidth="2.2" filter="url(#lineGlow)" />

                  <line x1="145" y1="105" x2="145" y2="175" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="70" y1="150" x2="145" y2="175" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="145" y1="175" x2="220" y2="220" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="190" y1="150" x2="220" y2="220" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="220" y1="220" x2="290" y2="120" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="290" y1="120" x2="350" y2="95" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="290" y1="120" x2="350" y2="150" stroke="#22D3EE" strokeWidth="1.8" opacity="0.5" filter="url(#lineGlow)" />
                  <line x1="350" y1="95" x2="350" y2="150" stroke="#22D3EE" strokeWidth="2.2" filter="url(#lineGlow)" />
                  <line x1="220" y1="220" x2="350" y2="95" stroke="#22D3EE" strokeWidth="1.8" opacity="0.55" filter="url(#lineGlow)" />

                  <line x1="350" y1="95" x2="430" y2="95" stroke="#81879A" strokeWidth="1.8" opacity="0.8" />
                  <line x1="350" y1="95" x2="430" y2="55" stroke="#81879A" strokeWidth="1.8" opacity="0.65" />
                  <line x1="350" y1="95" x2="430" y2="150" stroke="#81879A" strokeWidth="1.8" opacity="0.65" />
                  <line x1="350" y1="150" x2="430" y2="150" stroke="#81879A" strokeWidth="1.8" opacity="0.6" />
                  <line x1="350" y1="150" x2="430" y2="205" stroke="#81879A" strokeWidth="1.8" opacity="0.65" />

                  <GlowNode x="70" y="150" color="#FFD84D" glow="url(#goldGlow)" />
                  <GlowNode x="145" y="105" color="#FFD84D" glow="url(#goldGlow)" />
                  <GlowNode x="220" y="65" color="#FFD84D" glow="url(#goldGlow)" />
                  <GlowNode x="190" y="150" color="#FFD84D" glow="url(#goldGlow)" />
                  <GlowNode x="350" y="150" color="#FFD84D" glow="url(#goldGlow)" />

                  <GlowNode x="145" y="175" color="#22D3EE" glow="url(#cyanGlow)" />
                  <GlowNode x="220" y="220" color="#22D3EE" glow="url(#cyanGlow)" />
                  <GlowNode x="290" y="120" color="#22D3EE" glow="url(#cyanGlow)" />
                  <GlowNode x="350" y="95" color="#22D3EE" glow="url(#cyanGlow)" />

                  <LockedNode x="430" y="55" />
                  <LockedNode x="430" y="95" />
                  <LockedNode x="430" y="150" />
                  <LockedNode x="430" y="205" />
                </svg>
              </div>

              <div className="relative mt-4 flex items-center justify-center gap-6 text-[11px] text-white/65">
                <LegendDot
                  color="bg-yellow-300 shadow-[0_0_10px_rgba(253,224,71,0.8)]"
                  label="Mastered"
                />
                <LegendDot
                  color="bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  label="Active"
                />
                <LegendDot color="bg-white/25" label="Locked" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            <TopCard
              icon={<Flame size={18} className="text-orange-300" />}
              title="Daily Streak"
              value="12 Days"
              glow="shadow-[0_0_25px_rgba(251,146,60,0.12)]"
            />

            <TopCard
              icon={<Wallet size={18} className="text-purple-300" />}
              title="Wallet Snapshot"
              value="3 SBTs • 150 XP"
              glow="shadow-[0_0_25px_rgba(168,85,247,0.13)]"
            />

            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/70 to-fuchsia-400/70 shadow-[0_0_28px_rgba(168,85,247,0.22)]">
              <div className="rounded-2xl h-[46px] bg-[linear-gradient(90deg,rgba(67,36,108,0.88),rgba(46,20,80,0.92))] px-4 flex items-center justify-between text-[12px] text-white/85">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-purple-200" />
                  <span>My Daily Elow</span>
                </div>
                <ChevronRight size={14} className="text-white/70" />
              </div>
            </div>

            <div className="relative min-h-[430px] rounded-[24px] border border-white/12 bg-white/6 backdrop-blur-xl p-4 flex flex-col shadow-[0_0_35px_rgba(99,102,241,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.07),transparent_25%),radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.14),transparent_20%),radial-gradient(circle_at_70%_65%,rgba(236,72,153,0.14),transparent_18%)]" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-white/70 rotate-180" />
                  <h3 className="text-[15px] font-medium">AI Mentor</h3>
                </div>
                <div className="text-white/55 text-sm">•••</div>
              </div>

              <div className="relative mt-5 flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] bg-white/8 border border-white/10 text-white/60">
                  History
                </span>
              </div>

              <div className="relative mt-6 flex-1 flex flex-col">
                <div className="w-[175px] rounded-2xl bg-white/10 border border-white/10 px-3 py-3 text-[12px] leading-[18px] text-white/85 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                  Hey Alex, ready to crush the next concept?
                </div>

                <div className="mt-auto rounded-2xl border border-white/10 bg-white/8 h-12 flex items-center px-3">
                  <span className="text-white/35 text-[13px] flex-1">
                    Ask your mentor...
                  </span>
                  <Send size={15} className="text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, title, active = false }) {
  return (
    <div
      className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
        active
          ? "bg-white/10 border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.03),0_0_20px_rgba(34,211,238,0.10)] text-white"
          : "text-white/75 hover:bg-white/6"
      }`}
    >
      {active && (
        <div className="w-[3px] h-6 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      )}
      <span className={`${active ? "" : "ml-[7px]"}`}>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

function TopCard({ icon, title, value, glow }) {
  return (
    <div
      className={`rounded-[22px] border border-white/12 bg-white/6 backdrop-blur-xl px-5 py-4 ${glow}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-[12px] text-white/65">{title}</p>
          <h3 className="text-[15px] font-semibold mt-1">{value}</h3>
        </div>
      </div>
    </div>
  );
}

function GlowNode({ x, y, color, glow }) {
  return (
    <g>
      <circle cx={x} cy={y} r="20" fill={color} opacity="0.12" filter={glow} />
      <circle cx={x} cy={y} r="13" fill={color} opacity="0.25" filter={glow} />
      <circle cx={x} cy={y} r="9" fill={color} filter={glow} />
    </g>
  );
}

function LockedNode({ x, y }) {
  return (
    <g>
      <circle cx={x} cy={y} r="11" fill="#64697A" opacity="0.65" />
      <circle cx={x} cy={y} r="16" fill="rgba(255,255,255,0.03)" />
      <foreignObject x={x - 8} y={y - 8} width="16" height="16">
        <div className="w-4 h-4 flex items-center justify-center">
          <Lock size={11} className="text-white/75" />
        </div>
      </foreignObject>
    </g>
  );
}

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Beaker, Dna, Activity, FileText, Settings, Users, BrainCircuit } from 'lucide-react';
import { cn } from '../ui/GlassCard';

export const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/workspace' },
    { icon: Beaker, label: 'Catalyst Discovery', path: '/workspace/discovery' },
    { icon: Dna, label: 'Synthetic Biology', path: '/workspace/synbio' },
    { icon: Activity, label: 'Simulations', path: '/workspace/simulations' },
    { icon: BrainCircuit, label: 'Learning Loop', path: '/workspace/learning' },
    { icon: FileText, label: 'Experiments', path: '/workspace/experiments' },
    { icon: Users, label: 'Collaboration', path: '/workspace/collaboration' },
    { icon: Settings, label: 'Settings', path: '/workspace/settings' },
  ];

  return (
    <div className="w-64 h-screen border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl flex flex-col fixed left-0 top-0 z-40">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-sky-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            <Beaker className="w-5 h-5 text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400 glow-text">
            Catalytix
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 custom-scrollbar">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
          Research OS
        </div>
        
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/workspace'}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
              isActive 
                ? "bg-sky-500/10 text-sky-400 glow-border" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            )}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-sky-500 rounded-r-full shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                )}
                <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-sky-400" : "text-slate-500 group-hover:text-slate-300")} />
                <span className="font-medium text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-xs font-bold text-slate-900">
            DR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-200">Dr. Alan</span>
            <span className="text-xs text-emerald-400">Online • Workspace Alpha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

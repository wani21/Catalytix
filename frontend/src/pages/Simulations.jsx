import { Activity, Play, Terminal } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { ProgressMeter } from '../components/ui/ProgressMeter';

export const Simulations = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Simulation Engine</h1>
        <p className="text-slate-400">Run quantum chemistry and molecular dynamics simulations.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-200">Active Node Queue</h3>
            <span className="px-2 py-1 text-xs rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">3 Running</span>
          </div>
          
          <div className="space-y-4">
            {[
              { id: "SIM-992", name: "Thermal Stress Test (MX-12)", progress: 78, time: "2h 15m remaining" },
              { id: "SIM-993", name: "Binding Energy Calc (C-09)", progress: 45, time: "4h 30m remaining" },
              { id: "SIM-994", name: "Pathway Optimization", progress: 12, time: "12h 00m remaining" }
            ].map((sim, i) => (
              <div key={i} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-200">{sim.id}</span>
                  <span className="text-xs text-slate-400">{sim.time}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">{sim.name}</p>
                <ProgressMeter value={sim.progress} showValue={true} />
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="bg-slate-950/80 font-mono flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-800 pb-2">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">Compute Cluster Output</span>
          </div>
          <div className="flex-1 space-y-2 text-xs text-emerald-500/70 overflow-y-auto">
            <p>[INFO] Initializing quantum solver...</p>
            <p>[INFO] Allocating 256 TFLOPS compute nodes.</p>
            <p>[WARN] Convergence taking longer than expected for step 452.</p>
            <p>[INFO] Step 453 completed. ∆E = -0.0024 eV</p>
            <p>[INFO] Step 454 completed. ∆E = -0.0018 eV</p>
            <p className="text-sky-400 mt-4 animate-pulse">Running iteration 455...</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

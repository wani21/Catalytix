import { FileText, Calendar, Filter } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';

export const Experiments = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Experiment Logs</h1>
            <p className="text-slate-400">Track and manage physical laboratory experiments.</p>
          </div>
          <AnimatedButton icon={FileText}>Log New Experiment</AnimatedButton>
        </div>
      </header>

      <GlassCard className="p-0 overflow-hidden border-slate-700/50">
        <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex gap-4">
          <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded">
            <Calendar className="w-4 h-4" /> Date Range
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-slate-400 text-sm">
                <th className="p-4 font-medium">Exp ID</th>
                <th className="p-4 font-medium">Target</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Researcher</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
              {[
                { id: "EXP-2024-089", target: "CO2 + H2 -> Methanol", status: "Completed", user: "Dr. Alan", date: "Today, 10:45 AM" },
                { id: "EXP-2024-088", target: "N2 + H2 -> NH3", status: "Failed", user: "Dr. Sarah", date: "Yesterday, 2:15 PM" },
                { id: "EXP-2024-087", target: "Glucose -> Ethanol", status: "In Progress", user: "Dr. Alan", date: "May 04, 2026" },
                { id: "EXP-2024-086", target: "H2O -> H2 + O2", status: "Completed", user: "Dr. Chen", date: "May 02, 2026" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-mono text-sky-400">{row.id}</td>
                  <td className="p-4">{row.target}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      row.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                      row.status === 'Failed' ? 'bg-rose-500/20 text-rose-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4">{row.user}</td>
                  <td className="p-4 text-slate-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

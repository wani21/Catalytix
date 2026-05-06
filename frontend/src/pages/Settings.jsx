import { Settings as SettingsIcon, Bell, Shield, Database } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const Settings = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Platform Settings</h1>
        <p className="text-slate-400">Manage your workspace preferences and API configurations.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col gap-2">
          <button className="flex items-center gap-3 p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 text-left">
            <SettingsIcon className="w-5 h-5" /> General
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors text-left">
            <Database className="w-5 h-5" /> Data Sources
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors text-left">
            <Shield className="w-5 h-5" /> Security
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-colors text-left">
            <Bell className="w-5 h-5" /> Notifications
          </button>
        </div>

        <GlassCard className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-slate-200 mb-6 border-b border-slate-800 pb-4">General Configuration</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">AI Engine Model</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-sky-500" disabled>
                <option>Catalytix-GNN-v4 (Current)</option>
                <option>Transformer-Chem-v2</option>
              </select>
              <p className="text-xs text-slate-500 mt-1">Model selection is locked in the prototype phase.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Default Optimization Metric</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-sky-500">
                <option>Balanced (Activity + Stability)</option>
                <option>Maximize Selectivity</option>
                <option>Maximize Sustainability</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Name</label>
              <input type="text" value="Workspace Alpha" readOnly className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-2.5 text-slate-400 focus:outline-none" />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

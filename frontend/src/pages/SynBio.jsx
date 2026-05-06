import { Dna, Activity, Lock } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';

export const SynBio = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Synthetic Biology</h1>
        <p className="text-slate-400">Design metabolic pathways and optimize enzyme chains.</p>
      </header>

      <GlassCard className="flex flex-col items-center justify-center py-20 text-center border-dashed border-slate-700">
        <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mb-6 relative">
          <Dna className="w-10 h-10 text-emerald-400 animate-pulse-slow" />
          <div className="absolute -bottom-2 -right-2 bg-slate-900 rounded-full p-1 border border-slate-700">
            <Lock className="w-4 h-4 text-slate-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Module Locked</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          The Synthetic Biology pathway generation and enzyme optimization features are currently disabled in this prototype environment. They will be available in Phase 2 deployment.
        </p>
        <div className="flex gap-4">
          <AnimatedButton variant="outline" disabled>
            <Activity className="w-4 h-4 mr-2" /> View Demo Data
          </AnimatedButton>
        </div>
      </GlassCard>
    </div>
  );
};

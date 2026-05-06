import { Users, MessageSquare, Share2 } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';

export const Collaboration = () => {
  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Research Workspace</h1>
        <p className="text-slate-400">Collaborate with your team on molecular discovery projects.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-sky-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-200 mb-2">Team Alpha</h3>
          <p className="text-slate-400 text-sm mb-6">4 Active Researchers • 12 Shared Projects</p>
          <AnimatedButton variant="outline" className="text-sm py-2">Manage Team</AnimatedButton>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center py-16 text-center border-dashed border-slate-700">
          <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
            <Share2 className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-200 mb-2">External Sharing</h3>
          <p className="text-slate-400 text-sm mb-6">Securely share findings with external partners.</p>
          <AnimatedButton variant="secondary" className="text-sm py-2" disabled>Coming in Phase 2</AnimatedButton>
        </GlassCard>
      </div>
      
      <h3 className="text-xl font-bold text-slate-200 mt-4">Recent Discussions</h3>
      <GlassCard className="space-y-4">
        {[
          { user: "Dr. Chen", text: "The thermal stability on MX-12 looks promising. Should we run a secondary simulation?", time: "2 hours ago" },
          { user: "Dr. Sarah", text: "I noticed a slight drop in selectivity above 400C. Let's ask the AI Copilot for structural tweaks.", time: "5 hours ago" }
        ].map((msg, i) => (
          <div key={i} className="flex gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sky-400">
              {msg.user.charAt(4)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-slate-200">{msg.user}</span>
                <span className="text-xs text-slate-500">{msg.time}</span>
              </div>
              <p className="text-sm text-slate-400">{msg.text}</p>
            </div>
          </div>
        ))}
      </GlassCard>
    </div>
  );
};

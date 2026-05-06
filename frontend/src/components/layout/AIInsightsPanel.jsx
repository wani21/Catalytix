import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, AlertTriangle, Lightbulb, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const AIInsightsPanel = () => {
  // In a real app, this would be connected to a context/store to show contextual insights
  const insights = [
    {
      id: 1,
      type: 'recommendation',
      icon: Sparkles,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      title: 'Structural Optimization',
      content: 'Catalyst Variant C-12 shows higher predicted stability due to stronger oxygen binding affinity.'
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertTriangle,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      title: 'Instability Detected',
      content: 'Catalyst MX-9 underperformed at high temperature conditions. Similar structural instability observed in previous simulations.'
    },
    {
      id: 3,
      type: 'insight',
      icon: Lightbulb,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      title: 'Pattern Found',
      content: 'Adding Zinc oxide increases methanol selectivity by 18% based on recent datasets.'
    }
  ];

  return (
    <div className="w-80 h-screen border-l border-slate-800 bg-slate-900/50 backdrop-blur-xl flex flex-col fixed right-0 top-0 z-40">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-800/20">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400 animate-pulse-slow" />
          <span className="font-semibold text-slate-200">AI Copilot</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
        <AnimatePresence>
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="p-4 !rounded-lg border border-slate-700/50 bg-slate-800/40" hoverEffect>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${insight.bgColor} shrink-0`}>
                    <insight.icon className={`w-4 h-4 ${insight.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">{insight.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {insight.content}
                    </p>
                  </div>
                </div>
                {insight.type === 'recommendation' && (
                  <div className="mt-3 pt-3 border-t border-slate-700/50 flex justify-end">
                    <button className="text-xs font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                      Apply Suggestion <Zap className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="p-4 border-t border-slate-800 bg-slate-900/80">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask AI Copilot..." 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 pl-4 pr-10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-sky-400 transition-colors">
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

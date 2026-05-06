import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, Database, Brain, Sparkles, Filter } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { ProgressMeter } from '../components/ui/ProgressMeter';
import { simulateCatalystDiscovery } from '../services/mockData';

export const CatalystDiscovery = () => {
  const [reaction, setReaction] = useState('CO2 + H2 → Methanol');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState(0);

  const handleSearch = async () => {
    if (!reaction.trim()) return;
    
    setIsSearching(true);
    setResults(null);
    setLoadingPhase(1); // Database retrieval
    
    // Simulate loading phases for UX
    setTimeout(() => setLoadingPhase(2), 800); // AI Generation
    setTimeout(() => setLoadingPhase(3), 1600); // Ranking
    
    try {
      const data = await simulateCatalystDiscovery(reaction);
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const loadingSteps = [
    { phase: 1, icon: Database, text: "Retrieving known structural templates..." },
    { phase: 2, icon: Brain, text: "AI generating novel variants..." },
    { phase: 3, icon: Filter, text: "Ranking candidates by stability & activity..." }
  ];

  return (
    <div className="flex flex-col gap-8 pb-10 min-h-full">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Catalyst Discovery</h1>
        <p className="text-slate-400">Generate and evaluate novel catalyst structures for target reactions.</p>
      </header>

      {/* Input Section */}
      <GlassCard className="relative overflow-visible" glowEffect={isSearching}>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full relative">
            <label className="block text-sm font-medium text-slate-400 mb-2">Target Reaction Equation</label>
            <div className="relative">
              <input
                type="text"
                value={reaction}
                onChange={(e) => setReaction(e.target.value)}
                placeholder="e.g., CO2 + H2 → Methanol"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-4 pr-10 text-lg text-slate-200 font-mono placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                disabled={isSearching}
              />
            </div>
          </div>
          <AnimatedButton 
            onClick={handleSearch} 
            disabled={isSearching}
            icon={isSearching ? Loader2 : Search}
            className="w-full md:w-auto md:px-8 py-3 h-[52px]"
          >
            {isSearching ? 'Processing...' : 'Discover'}
          </AnimatedButton>
        </div>
      </GlassCard>

      {/* Loading State */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="w-16 h-16 relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border-t-2 border-sky-500 animate-spin" />
              <div className="absolute inset-2 rounded-full border-r-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
              <Brain className="w-6 h-6 text-sky-400 animate-pulse" />
            </div>
            
            <div className="flex flex-col gap-3 w-full max-w-md">
              {loadingSteps.map((step) => (
                <div 
                  key={step.phase} 
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                    loadingPhase >= step.phase 
                      ? 'bg-slate-800/80 border-sky-500/30 text-slate-200' 
                      : 'bg-slate-900/50 border-slate-800 text-slate-500'
                  }`}
                >
                  <step.icon className={`w-5 h-5 ${loadingPhase >= step.phase ? 'text-sky-400' : 'text-slate-600'}`} />
                  <span className="text-sm font-medium">{step.text}</span>
                  {loadingPhase === step.phase && (
                    <Loader2 className="w-4 h-4 ml-auto text-sky-400 animate-spin" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {results && !isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                AI Generated Candidates
              </h2>
              <span className="text-sm text-slate-400">Found {results.candidates.length} highly viable structures</span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {results.candidates.map((candidate, idx) => (
                <GlassCard key={candidate.id} delay={idx * 0.1} hoverEffect className="flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-200">{candidate.name}</h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{candidate.structure}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-slate-400 mb-1">AI Confidence</span>
                      <div className="px-2 py-1 rounded bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">
                        {candidate.confidence}%
                      </div>
                    </div>
                  </div>

                  {/* 3D Placeholder/Thumbnail */}
                  <div className="w-full h-40 bg-slate-900/80 rounded-lg border border-slate-800 mb-6 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                    <div className="w-16 h-16 rounded-full border border-sky-500/50 group-hover:border-sky-400 transition-colors flex items-center justify-center z-20">
                      <Search className="w-6 h-6 text-sky-400/70 group-hover:text-sky-400" />
                    </div>
                    {/* Fake molecule visual */}
                    <div className="absolute w-full h-full opacity-30">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30%" cy="40%" r="15" fill="#0ea5e9" />
                        <circle cx="70%" cy="60%" r="20" fill="#a855f7" />
                        <circle cx="50%" cy="30%" r="10" fill="#10b981" />
                        <line x1="30%" y1="40%" x2="70%" y2="60%" stroke="#475569" strokeWidth="2" />
                        <line x1="50%" y1="30%" x2="30%" y2="40%" stroke="#475569" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <ProgressMeter value={candidate.activity} label="Predicted Activity" color="sky" />
                    <ProgressMeter value={candidate.stability} label="Thermal Stability" color={candidate.stability < 70 ? 'rose' : 'emerald'} />
                    <ProgressMeter value={candidate.selectivity} label="Target Selectivity" color="purple" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400 italic">
                      " {candidate.aiInsight} "
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <AnimatedButton variant="outline" className="w-full py-2 text-sm">
                      View 3D Structure
                    </AnimatedButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

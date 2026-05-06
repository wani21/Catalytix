import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, TestTube, Target, Leaf } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { ProgressMeter, CircularProgress } from '../components/ui/ProgressMeter';
import { getSustainabilityMetrics } from '../services/mockData';

export const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    getSustainabilityMetrics().then(setMetrics);
  }, []);

  const stats = [
    { label: "Active Experiments", value: "12", icon: TestTube, color: "text-sky-400" },
    { label: "AI Candidates Gen.", value: "8,432", icon: Activity, color: "text-purple-400" },
    { label: "Avg. Success Prob.", value: "78%", icon: Target, color: "text-emerald-400" },
    { label: "Green Index", value: "A+", icon: Leaf, color: "text-amber-400" }
  ];

  return (
    <div className="flex flex-col gap-8 pb-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Workspace Dashboard</h1>
          <p className="text-slate-400">Overview of current molecular research and simulations.</p>
        </div>
      </header>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <GlassCard key={idx} delay={idx * 0.1} hoverEffect className="flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-slate-800 ${stat.color} bg-opacity-20`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-200">{stat.value}</h3>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <GlassCard className="col-span-1 lg:col-span-2 flex flex-col" delay={0.4}>
          <h3 className="text-xl font-bold text-slate-200 mb-6">Recent Candidate Pipelines</h3>
          
          <div className="flex-1 space-y-4">
            {[
              { id: 'MX-12', reaction: 'CO2 + H2 → Methanol', status: 'Optimizing', progress: 85 },
              { id: 'EZ-99', reaction: 'Glucose → Ethanol', status: 'Simulating', progress: 45 },
              { id: 'NX-01', reaction: 'N2 + H2 → NH3', status: 'Completed', progress: 100 },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-between group hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-medium">{item.reaction}</h4>
                    <p className="text-xs text-slate-400">{item.status}</p>
                  </div>
                </div>
                <div className="w-32">
                  <ProgressMeter 
                    value={item.progress} 
                    color={item.progress === 100 ? 'emerald' : 'sky'} 
                    showValue={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Sustainability Impact */}
        <GlassCard className="col-span-1 flex flex-col items-center justify-center text-center" delay={0.5}>
          <h3 className="text-xl font-bold text-slate-200 mb-2 w-full text-left">Sustainability Impact</h3>
          <p className="text-sm text-slate-400 mb-8 w-full text-left">Estimated ecological footprint of current active variants.</p>
          
          <CircularProgress 
            value={metrics?.greenChemistryScore || 0} 
            color="#10b981" 
            label="Green Score" 
          />
          
          <div className="w-full mt-8 space-y-4 text-left">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">CO₂ Reduction Est.</span>
                <span className="text-emerald-400">{metrics?.co2Reduction || '0%'}</span>
              </div>
              <ProgressMeter value={45} color="emerald" showValue={false} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Energy Efficiency</span>
                <span className="text-emerald-400">{metrics?.energyEfficiency || 0}%</span>
              </div>
              <ProgressMeter value={metrics?.energyEfficiency || 0} color="emerald" showValue={false} />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

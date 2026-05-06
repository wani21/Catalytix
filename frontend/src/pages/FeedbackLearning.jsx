import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { RefreshCw, AlertOctagon, CheckCircle2, Cpu } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { getExperimentFeedback } from '../services/mockData';

export const FeedbackLearning = () => {
  const [data, setData] = useState(null);
  const [isRetraining, setIsRetraining] = useState(false);

  useEffect(() => {
    getExperimentFeedback().then(setData);
  }, []);

  const handleRetrain = () => {
    setIsRetraining(true);
    setTimeout(() => {
      setIsRetraining(false);
      // Simulate slight accuracy bump
      setData(prev => ({
        ...prev,
        history: [...prev.history, { epoch: prev.history.length + 1, predicted: 88, actual: 86, accuracy: 99 }]
      }));
    }, 2000);
  };

  const radarData = [
    { subject: 'Activity', A: 82, B: 55, fullMark: 100 },
    { subject: 'Stability', A: 75, B: 30, fullMark: 100 },
    { subject: 'Selectivity', A: 78, B: 60, fullMark: 100 },
    { subject: 'Sustainability', A: 85, B: 85, fullMark: 100 },
    { subject: 'Synthesizability', A: 90, B: 45, fullMark: 100 },
  ];

  if (!data) return <div className="p-10 flex justify-center"><RefreshCw className="w-8 h-8 text-sky-500 animate-spin" /></div>;

  return (
    <div className="flex flex-col gap-8 pb-10">
      <header>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Failure Intelligence & Learning</h1>
        <p className="text-slate-400">Analyze experimental discrepancies to improve predictive models autonomously.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Failure Analysis Engine */}
        <GlassCard className="col-span-1 lg:col-span-1 border-rose-500/30" glowEffect={false}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded bg-rose-500/20 text-rose-400">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-200">Failure Detected</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Catalyst ID</span>
              <p className="text-slate-200 font-medium font-mono mt-1">{data.failureAnalysis.catalystId}</p>
            </div>
            
            <div className="p-3 bg-rose-950/30 rounded-lg border border-rose-900/50">
              <span className="text-xs text-rose-400 uppercase tracking-wider">Primary Failure Reason</span>
              <p className="text-rose-200 font-medium mt-1">{data.failureAnalysis.reason}</p>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-xs text-sky-400 uppercase tracking-wider">AI Diagnostic</span>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">{data.failureAnalysis.details}</p>
            </div>
            
            <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
              <span className="text-xs text-purple-400 uppercase tracking-wider">Generated Hypothesis</span>
              <p className="text-purple-200 text-sm mt-1">{data.failureAnalysis.recommendation}</p>
            </div>
          </div>
        </GlassCard>

        {/* Prediction vs Actual Radar */}
        <GlassCard className="col-span-1 lg:col-span-2">
          <h3 className="text-xl font-bold text-slate-200 mb-6">Predicted vs. Actual Performance Map</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#475569' }} />
                <Radar name="Predicted (Model)" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
                <Radar name="Actual (Lab Result)" dataKey="B" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.4} />
                <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Learning Curve */}
        <GlassCard className="col-span-1 lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-200">Model Accuracy Evolution</h3>
              <p className="text-sm text-slate-400">Tracking prediction accuracy over continuous feedback loops.</p>
            </div>
            <AnimatedButton 
              onClick={handleRetrain} 
              disabled={isRetraining}
              icon={isRetraining ? RefreshCw : Cpu}
              variant="secondary"
              className="py-2"
            >
              {isRetraining ? 'Retraining Weights...' : 'Initiate Retraining Loop'}
            </AnimatedButton>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.history} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="epoch" stroke="#64748b" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Line type="monotone" dataKey="predicted" name="Predicted Score" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, fill: '#0ea5e9' }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="actual" name="Actual Score" stroke="#a855f7" strokeWidth={3} dot={{ r: 4, fill: '#a855f7' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

      </div>
    </div>
  );
};

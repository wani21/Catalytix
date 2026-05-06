import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './GlassCard';

export const ProgressMeter = ({ 
  value, 
  max = 100, 
  label, 
  color = "sky",
  className,
  showValue = true
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colors = {
    sky: "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]",
    emerald: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]",
    purple: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
    amber: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
    rose: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]",
  };

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1 text-sm">
          {label && <span className="text-slate-300">{label}</span>}
          {showValue && <span className="text-slate-100 font-mono">{Math.round(value)}/{max}</span>}
        </div>
      )}
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={cn("h-full rounded-full relative", colors[color] || colors.sky)}
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 right-0 h-full bg-white/20" />
        </motion.div>
      </div>
    </div>
  );
};

export const CircularProgress = ({ 
  value, 
  max = 100, 
  size = 120, 
  strokeWidth = 8,
  color = "#0ea5e9", // Tailwind sky-500
  label
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(30, 41, 59, 1)" // slate-800
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
          className="drop-shadow-[0_0_8px_currentColor]"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold text-white glow-text">{Math.round(percentage)}%</span>
        {label && <span className="text-xs text-slate-400 mt-1">{label}</span>}
      </div>
    </div>
  );
};

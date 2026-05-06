import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { ArrowRight, Beaker, Zap, Shield, Leaf } from 'lucide-react';
import { AnimatedButton } from '../components/ui/AnimatedButton';
import { GlassCard } from '../components/ui/GlassCard';

// Animated background molecular sphere
const AnimatedSphere = () => {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={1.8}>
      <MeshDistortMaterial 
        color="#0ea5e9" 
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
        emissive="#0ea5e9"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

export const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Zap, title: "Design", desc: "AI-driven generation of novel molecular structures." },
    { icon: Shield, title: "Predict", desc: "High-accuracy stability and selectivity forecasting." },
    { icon: Beaker, title: "Optimize", desc: "Iterative feedback learning loops for refinement." },
    { icon: Leaf, title: "Discover", desc: "Accelerating sustainable green chemistry solutions." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden flex flex-col">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWMHptLTUgNTVINSV2LTUwaDUwdjUweiIgZmlsbD0icmdiYSgzMCwgNDEsIDU5LCAwLjE1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">AI-Powered Research OS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Accelerating <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400 glow-text animate-pulse-slow">Molecular Discovery</span> with AI
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            An intelligent platform for catalyst optimization, enzyme engineering, and sustainable fuel innovation. 
            Collaborate with an AI Co-Scientist to design, predict, and optimize.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton 
              variant="primary" 
              onClick={() => navigate('/workspace')}
              className="w-full sm:w-auto text-lg px-8 py-4"
              icon={ArrowRight}
            >
              Launch Workspace
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              View Simulation
            </AnimatedButton>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 max-w-6xl w-full mx-auto"
        >
          {features.map((feature, idx) => (
            <GlassCard key={idx} hoverEffect delay={0.6 + (idx * 0.1)} className="text-left p-6">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                <feature.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

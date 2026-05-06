import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { WorkspaceLayout } from './components/layout/WorkspaceLayout';
import { Dashboard } from './pages/Dashboard';
import { CatalystDiscovery } from './pages/CatalystDiscovery';
import { FeedbackLearning } from './pages/FeedbackLearning';
import { SynBio } from './pages/SynBio';
import { Simulations } from './pages/Simulations';
import { Experiments } from './pages/Experiments';
import { Collaboration } from './pages/Collaboration';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/workspace" element={<WorkspaceLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="discovery" element={<CatalystDiscovery />} />
        <Route path="learning" element={<FeedbackLearning />} />
        <Route path="synbio" element={<SynBio />} />
        <Route path="simulations" element={<Simulations />} />
        <Route path="experiments" element={<Experiments />} />
        <Route path="collaboration" element={<Collaboration />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

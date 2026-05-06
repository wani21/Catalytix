import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { AIInsightsPanel } from './AIInsightsPanel';

export const WorkspaceLayout = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-64 mr-80 flex flex-col relative overflow-hidden">
        {/* Main content area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </div>
      </div>
      <AIInsightsPanel />
    </div>
  );
};

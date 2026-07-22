'use client';

import React from 'react';

export function WatercolorMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Primary Radial Backdrop matching Clean Minimalism theme */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(191, 219, 254, 0.4) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(233, 213, 255, 0.4) 0px, transparent 50%),
            radial-gradient(at 50% 100%, rgba(252, 231, 243, 0.4) 0px, transparent 50%)
          `
        }}
      />

      {/* Floating Animated Mesh Blobs */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-200/30 blur-[120px] animate-mesh-1" 
      />
      
      <div 
        className="absolute top-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-200/25 blur-[130px] animate-mesh-2" 
      />

      <div 
        className="absolute -bottom-[15%] left-[25%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-pink-200/25 blur-[140px] animate-mesh-3" 
      />

      {/* Subtle Grid Dot Accent */}
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" 
      />
    </div>
  );
}


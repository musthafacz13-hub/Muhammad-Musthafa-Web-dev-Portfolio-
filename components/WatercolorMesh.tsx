'use client';

import React from 'react';

export function WatercolorMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Soft Blue Mesh Blob */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-transparent blur-[120px] opacity-[0.08] animate-mesh-1" 
      />
      
      {/* Soft Purple Mesh Blob */}
      <div 
        className="absolute top-[25%] -right-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-300/15 to-transparent blur-[140px] opacity-[0.07] animate-mesh-2" 
      />

      {/* Soft Pink Mesh Blob */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[65vw] h-[65vw] max-w-[950px] max-h-[950px] rounded-full bg-gradient-to-tl from-pink-400/20 via-rose-300/15 to-transparent blur-[150px] opacity-[0.07] animate-mesh-3" 
      />

      {/* Subtle WWDC Grid Noise overlay for tactile Apple feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" 
      />
    </div>
  );
}

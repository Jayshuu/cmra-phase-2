
import React from 'react';
import { Clock } from 'lucide-react';

const LiveStatBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-1.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center space-x-2">
          <Clock size={12} className="animate-pulse" />
          <span>Next Event: Round 1 @ RMM • May 24-25</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="opacity-80">184 Days Left</span>
          <a href="#" className="border-b border-white hover:border-transparent transition-all">Register ↗</a>
        </div>
      </div>
    </div>
  );
};

export default LiveStatBar;

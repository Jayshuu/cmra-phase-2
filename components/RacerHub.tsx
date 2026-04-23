
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { MOCK_RESOURCES, getIcon } from '../constants';

const RacerHub: React.FC = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-5xl font-teko font-bold leading-none mb-2">RACER HUB</h2>
          <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Essential documents and registration links.</p>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group hover:text-red-600 transition-colors">
          View All Downloads <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_RESOURCES.map((res) => (
          <div key={res.id} className="bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
            <div className="mb-8">
              <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {getIcon(res.icon, 24)}
              </div>
              <h3 className="text-sm font-bold leading-tight group-hover:text-red-600 transition-colors">{res.title}</h3>
              <p className="text-[9px] text-neutral-500 font-bold uppercase mt-2 tracking-widest">{res.type} • {res.size}</p>
            </div>
            <button className="text-neutral-500 group-hover:text-white transition-colors">
              <Download size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RacerHub;

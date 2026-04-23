
import React from 'react';
import { Trophy, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { MOCK_NEWS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
      {/* Hero Section */}
      <div className="md:col-span-8 relative group overflow-hidden bg-neutral-900 border border-white/5 aspect-[16/9] md:aspect-auto">
        <img 
          src="https://picsum.photos/seed/race1/1200/800" 
          alt="Race Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-2xl">
          <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 inline-block mb-4 uppercase">Season 2025</span>
          <h1 className="text-5xl md:text-7xl font-teko font-bold leading-[0.8] mb-4 italic">
            THE SPEED RETURNS.<br/>
            <span className="text-red-600">THE PASSION NEVER LEFT.</span>
          </h1>
          <p className="text-xs md:text-sm text-neutral-300 mb-8 max-w-lg leading-relaxed font-medium">
            Motorcycle roadracing is back in Southern Alberta! Bar-to-bar, knee-dragging, pulse pounding competition.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-xs uppercase tracking-widest transition-all">
              Become a Racer ↗
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 text-xs uppercase tracking-widest transition-all">
              Upcoming Events
            </button>
          </div>
        </div>
      </div>

      {/* Next Event Card */}
      <div className="md:col-span-4 bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[100px]"></div>
        <div>
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Next Event</p>
              <h2 className="text-4xl font-teko font-bold">ROUND 1</h2>
            </div>
            <div className="text-neutral-700">
              <Trophy size={32} strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-12">
            <p className="text-5xl font-teko font-bold mb-1">MAY 24</p>
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
               Rocky Mountain Motorsports
            </p>
          </div>
        </div>
        <div className="w-full bg-neutral-800 h-1 mb-8 overflow-hidden">
          <div className="bg-red-600 h-full w-2/3"></div>
        </div>
        <div className="text-[10px] text-neutral-500 font-bold uppercase text-center italic">
          Registration Closes in 5 days
        </div>
      </div>

      {/* Adaptive Feed / Tiles */}
      <div className="md:col-span-3 aspect-square md:aspect-auto bg-neutral-900 border border-white/5 p-8 group hover:bg-neutral-800 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
        <Trophy className="mb-4 text-white group-hover:text-red-600 transition-colors" size={32} strokeWidth={1.5} />
        <h3 className="text-xl font-teko font-bold">COMPETITION</h3>
        <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Classes & Rules</p>
      </div>

      <div className="md:col-span-3 aspect-square md:aspect-auto bg-neutral-900 border border-white/5 p-8 group hover:bg-neutral-800 transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
        <Users className="mb-4 text-white group-hover:text-red-600 transition-colors" size={32} strokeWidth={1.5} />
        <h3 className="text-xl font-teko font-bold">NEW RACERS</h3>
        <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">School & Licensing</p>
      </div>

      <div className="md:col-span-2 aspect-square md:aspect-auto bg-red-600 p-8 flex flex-col items-center justify-center text-center cursor-pointer group hover:bg-red-700 transition-colors">
        <HeartHandshake className="mb-4 text-white" size={32} strokeWidth={1.5} />
        <h3 className="text-xl font-teko font-bold">VOLUNTEER</h3>
        <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Join the Crew</p>
      </div>

      <div className="md:col-span-4 bg-neutral-900 border border-white/10 p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest">Latest News</h3>
          <a href="#" className="text-[9px] font-bold uppercase text-neutral-500 hover:text-white transition-all">View All</a>
        </div>
        <div className="space-y-6">
          {MOCK_NEWS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <span className="text-[8px] font-bold text-red-600 border border-red-600/30 px-1.5 py-0.5 rounded-sm uppercase inline-block mb-1">{item.category}</span>
              <h4 className="text-sm font-bold group-hover:text-red-600 transition-colors">{item.title}</h4>
              <p className="text-[10px] text-neutral-500 mt-1 line-clamp-1">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

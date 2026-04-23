
import React, { useState } from 'react';
import { Sparkles, Send, Copy, RefreshCw } from 'lucide-react';
import { generateSponsorshipProposal, generateSocialCaption } from '../services/geminiService';

const AICrewChief: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'funding' | 'exposure'>('exposure');

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const text = mode === 'funding' 
        ? await generateSponsorshipProposal(input)
        : await generateSocialCaption(input);
      setResult(text || 'No response generated.');
    } catch (err) {
      setResult('Error generating response. Please check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0C0A09] border border-white/10 rounded-lg overflow-hidden flex flex-col md:flex-row h-[600px]">
      <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 p-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center animate-pulse">
            <Sparkles size={16} className="text-black" />
          </div>
          <h2 className="text-3xl font-teko font-bold uppercase tracking-tight">AI Crew Chief</h2>
        </div>
        
        <p className="text-xs text-neutral-400 mb-8 leading-relaxed">
          Powered by Gemini. Built for the high-intensity world of CMRA roadracing.
        </p>

        <div className="space-y-4">
          <button 
            onClick={() => setMode('funding')}
            className={`w-full text-left p-4 rounded border transition-all ${mode === 'funding' ? 'bg-red-600/10 border-red-600 text-red-600' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Funding Engine</h3>
            <p className="text-[10px] opacity-70">Generate sponsorship proposals from race stats.</p>
          </button>
          
          <button 
            onClick={() => setMode('exposure')}
            className={`w-full text-left p-4 rounded border transition-all ${mode === 'exposure' ? 'bg-red-600/10 border-red-600 text-red-600' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Exposure Engine</h3>
            <p className="text-[10px] opacity-70">Turn finish positions into viral social hype.</p>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {result ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Gemini Response</span>
                 <button onClick={() => { navigator.clipboard.writeText(result) }} className="text-neutral-500 hover:text-white transition-colors">
                   <Copy size={16} />
                 </button>
               </div>
               <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-neutral-300 bg-neutral-900 p-6 border border-white/5">
                 {result}
               </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
               <Sparkles size={48} strokeWidth={1} className="mb-4" />
               <p className="text-xs uppercase font-bold tracking-widest">Enter details below to start</p>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-white/10 bg-black/40">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === 'funding' ? "Example: P3 finish, 1:24.59 lap time, heavy rain, 12 bikes in field..." : "Example: Won Round 1 after a last lap pass at turn 12, thanks to sponsor Pirelli."}
              className="w-full bg-neutral-900 border border-white/10 rounded-md p-4 text-xs font-medium focus:ring-1 focus:ring-red-600 focus:outline-none min-h-[100px] resize-none pr-16"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 disabled:bg-neutral-800 disabled:cursor-not-allowed p-3 rounded-full transition-all"
            >
              {loading ? <RefreshCw size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
          <p className="text-[8px] text-neutral-600 mt-4 uppercase font-bold tracking-widest text-center">Built on Gemini | React | Nineties Fire</p>
        </div>
      </div>
    </div>
  );
};

export default AICrewChief;

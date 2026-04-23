
import React, { useState } from 'react';
import Header from './components/Header';
import { Trophy, Users, Flag, ArrowRight, FileText, Map, GraduationCap, Info, History, ShieldCheck, Mail, MessageSquare, MapPin, Calendar, Timer, Ticket, ClipboardList, Clock, Wrench, Shield, Shirt, Radio, Zap, ArrowLeft, AlertTriangle, ExternalLink } from 'lucide-react';
import { MOCK_NEWS, MOCK_RESOURCES, MOCK_ROUNDS } from './constants';
import { NewsItem } from './types';

// --- MEDIA CONFIGURATION ---
const MEDIA_PATHS = {
  video: '/videos/intro.mp4',
  image: '/images/benz.jpg',
  aboutPageImage: '/images/about.jpg',
  fallback: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1600'
};

// Define valid views
type ViewType = 'home' | 'watch-live' | 'start-racing' | 'race-school' | 'register-races' | 'classes' | 'wccs' | 'bike-gear' | 'results' | 'race-numbers' | 'calendar' | 'register-events' | 'membership' | 'rules-safety' | 'news' | 'volunteers' | 'sponsors' | 'about' | 'rmm-circuit' | 'contact' | 'racer-info' | 'new-racers' | 'documents';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [mediaType, setMediaType] = useState<'video' | 'image' | 'fallback'>('video');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const navigateTo = (view: ViewType | string) => {
    setCurrentView(view as ViewType);
    window.scrollTo(0, 0);
  };

  const openNews = (item: NewsItem) => {
    setSelectedNews(item);
    navigateTo('news');
  };

  // --- CONTENT RENDERERS ---

  const renderPlaceholder = (title: string, description: string) => (
    <div className="flex flex-col lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500 justify-center items-center h-64 border border-white/10 border-dashed rounded-2xl bg-white/5">
      <h3 className="text-4xl font-teko font-bold uppercase italic text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm text-center max-w-md">{description}</p>
    </div>
  );

  const renderNewsDetailContent = () => {
    if (!selectedNews) return null;
    return (
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="lg:col-span-8 lg:col-start-3 bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-2xl lg:overflow-y-auto custom-scroll">
          <div className="mb-8 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm">{selectedNews.category}</span>
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{selectedNews.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-teko font-bold italic text-white uppercase leading-[0.9] mb-6">{selectedNews.title}</h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-medium font-teko uppercase tracking-wide">{selectedNews.content}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* 
                  UPDATED LOGIC:
                  If body is a string, use 'whitespace-pre-wrap' to respect \n newlines.
                  If body is JSX (ReactNode), remove that class so proper HTML tags (<p>, <ul>) control spacing.
              */}
            <div className={`text-neutral-300 leading-relaxed font-sans text-sm md:text-base mb-8 ${typeof selectedNews.body === 'string' ? 'whitespace-pre-wrap' : ''}`}>
              {selectedNews.body}
            </div>

            {/* Action Links */}
            {selectedNews.links && selectedNews.links.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {selectedNews.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black hover:bg-gradient-to-r hover:from-[#dc2626] hover:to-[#F59E0B] hover:text-white hover:border-transparent border border-transparent font-bold text-xs uppercase px-6 py-4 rounded transition-all tracking-widest flex items-center justify-center gap-2 shadow-lg"
                  >
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <button onClick={() => navigateTo('home')} className="text-neutral-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAboutContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Col 1: Hero Image */}
      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-64 lg:h-auto group shrink-0">
        <img
          src={MEDIA_PATHS.aboutPageImage}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== MEDIA_PATHS.fallback) {
              target.src = MEDIA_PATHS.fallback;
            }
          }}
          alt="Paddock Life"
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r"></div>
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
          <h3 className="text-4xl md:text-6xl font-teko font-bold italic text-white uppercase leading-none">Established 1987</h3>
          <p className="text-[#dc2626] font-bold uppercase tracking-widest text-sm md:text-base italic">Southern Alberta’s Home for Motorcycle Racing</p>
        </div>
      </div>

      {/* Col 2: Content */}
      <div className="lg:col-span-7 flex flex-col gap-6 lg:h-full lg:overflow-hidden">
        <div className="bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-white/10 flex-1 lg:overflow-y-auto custom-scroll space-y-8">
          <section className="space-y-4">
            <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] flex items-center gap-2">
              <History size={24} /> Our Mission
            </h4>
            <p className="text-neutral-300 leading-relaxed italic text-base md:text-lg">
              To run Western Canada’s premier motorcycle roadracing events, pushing the sport forward through safety, skill, and accountability – without dulling the edge.
            </p>
          </section>

          <section className="space-y-4">
            <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] flex items-center gap-2">
              <ShieldCheck size={24} /> The Legacy
            </h4>
            <p className="text-neutral-300 leading-relaxed italic text-base md:text-lg">
              Since 1987, the Calgary Motorcycle Roadracing Association has given riders a place to test their limits and pursue their racing potential.
              <br /><br />
              Built by volunteers and driven by racers, CMRA has been at the core of Canadian motorsports since the days of Race City Speedway. Race City may be gone, but its spirit isn’t. It lives on as we write the next chapter at <span className="text-white font-bold">Rocky Mountain Motorsports Circuit</span> – Alberta’s premier racetrack.
            </p>
          </section>

          <section className="space-y-4">
            <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] flex items-center gap-2">
              <Users size={24} /> The Community
            </h4>
            <p className="text-neutral-300 leading-relaxed italic text-base md:text-lg">
              CMRA is more than race weekends. It’s a paddock built on speed, commitment, and community. Whether you’re on the throttle, over the wall, or in the pits, if you live for motorcycles, you belong here.
              <br /><br />
              <span className="text-white font-bold">See you at the track.</span>
            </p>
          </section>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0">
          <button className="bg-neutral-900 hover:bg-neutral-800 p-6 rounded-2xl border border-white/10 hover:border-[#F59E0B] font-teko font-bold text-2xl uppercase text-white transition-all flex items-center justify-center gap-2 group shadow-lg">
            <Radio size={24} className="text-[#dc2626] group-hover:animate-pulse" /> Watch Action LIVE
          </button>
          <button
            onClick={() => navigateTo('new-racers')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 p-6 rounded-2xl border border-red-500/50 font-teko font-bold text-2xl uppercase text-white transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
            <Flag size={24} /> Ready to Race?
          </button>
        </div>
      </div>
    </div>
  );

  const renderContactContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Column 1: Info & Exec Cards */}
      <div className="lg:col-span-1 flex flex-col gap-6 lg:h-full lg:overflow-y-auto custom-scroll pr-2">
        <div className="space-y-2 shrink-0">
          <h3 className="text-5xl font-teko font-bold uppercase italic text-white leading-none">Contact Us</h3>
          <p className="text-neutral-400 text-sm">Reach out to the appropriate director.</p>
        </div>

        <div className="bg-neutral-900 border border-white/10 hover:border-[#dc2626]/50 p-6 rounded-xl transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-neutral-800 p-2 rounded-lg group-hover:bg-[#dc2626] transition-colors text-white"><MessageSquare size={20} /></div>
            <div><h4 className="font-bold uppercase text-white leading-none">General Inquiries</h4><span className="text-[10px] text-neutral-400 uppercase tracking-widest">Info</span></div>
          </div>
          <a href="mailto:info@roadracing.org" className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-center py-3 rounded font-bold uppercase text-xs tracking-widest text-white transition-all">Email Executive</a>
        </div>

        <div className="bg-neutral-900 border border-white/10 hover:border-[#dc2626]/50 p-6 rounded-xl transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-neutral-800 p-2 rounded-lg group-hover:bg-[#dc2626] transition-colors text-white"><Flag size={20} /></div>
            <div><h4 className="font-bold uppercase text-white leading-none">Race Direction</h4><span className="text-[10px] text-neutral-400 uppercase tracking-widest">Competition</span></div>
          </div>
          <a href="mailto:race@roadracing.org" className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-center py-3 rounded font-bold uppercase text-xs tracking-widest text-white transition-all">Email Director</a>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-auto">
          <div className="flex items-center gap-3 mb-4 text-[#dc2626]"><MapPin size={24} /><h4 className="text-xl font-teko font-bold uppercase text-white">Location</h4></div>
          <p className="text-neutral-400 text-xs mb-4">Range Road 292, Carstairs, AB</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] border-b border-[#dc2626]">Get Directions ↗</a>
        </div>
      </div>

      {/* Column 2 & 3: Form */}
      <div className="lg:col-span-2 bg-neutral-900/50 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col justify-center lg:h-full">
        <h4 className="text-2xl font-teko font-bold uppercase text-white mb-6">Quick Message</h4>
        <form className="space-y-4 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Name</label>
              <input type="text" className="w-full bg-black border border-white/20 rounded p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email</label>
              <input type="email" className="w-full bg-black border border-white/20 rounded p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Topic</label>
            <select className="w-full bg-black border border-white/20 rounded p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all">
              <option>General Question</option>
              <option>Licensing</option>
              <option>Volunteering</option>
            </select>
          </div>
          <div className="space-y-1 flex-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Message</label>
            <textarea className="w-full h-full min-h-[150px] bg-black border border-white/20 rounded p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all resize-none"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold py-4 uppercase text-xs tracking-widest rounded transition-all shadow-lg shadow-red-900/20 shrink-0">
            Send Transmission
          </button>
        </form>
      </div>
    </div>
  );

  const renderRacerInfoContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Area */}
      <div className="lg:col-span-4 flex flex-col gap-6 lg:h-full">
        <div className="bg-neutral-900 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center shrink-0">
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">Racer Info</h3>
          <p className="text-neutral-400 text-sm">Gate times, tech requirements, and essential knowledge for race weekend.</p>
        </div>

        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 flex-1 lg:overflow-y-auto custom-scroll">
          <h4 className="text-xl font-teko font-bold uppercase text-white mb-4">Active Classes</h4>
          <div className="grid grid-cols-1 gap-2">
            {['Superbike', '600 Super Sport', 'Lightweight', 'Thunder', 'Formula 112', 'Bottes', 'Sidecar'].map((cls) => (
              <div key={cls} className="bg-black/40 p-3 rounded border border-white/5 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-neutral-300">{cls}</span>
                <div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center: Schedule & Tech */}
      <div className="lg:col-span-5 flex flex-col gap-6 lg:h-full lg:overflow-hidden">
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex-1 lg:overflow-y-auto custom-scroll">
          <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] mb-4 flex items-center gap-2"><Clock size={20} /> Daily Schedule</h4>
          <ul className="space-y-3">
            {[
              { t: '07:00', e: 'Gates Open' },
              { t: '07:30', e: 'Tech Inspection' },
              { t: '08:30', e: 'Riders Meeting', h: true },
              { t: '09:00', e: 'Practice Begins' },
              { t: '12:00', e: 'Lunch Break' },
              { t: '13:00', e: 'Racing Begins' }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 border-b border-white/5 pb-2 last:border-0">
                <span className="font-mono text-[#F59E0B] font-bold w-12 text-right text-sm">{item.t}</span>
                <span className={`text-sm ${item.h ? 'text-white font-bold uppercase' : 'text-neutral-300'}`}>{item.e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex-1 lg:overflow-y-auto custom-scroll">
          <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] mb-4 flex items-center gap-2"><Wrench size={20} /> Tech Inspection</h4>
          <ul className="list-disc pl-4 space-y-2 marker:text-[#dc2626] text-sm text-neutral-300">
            <li>Safety wire: Oil drain, filler, filter, brake calipers.</li>
            <li>Coolant: Water or Water Wetter only.</li>
            <li>Side stands: Removed or secured.</li>
            <li>Numbers: Legible and class compliant.</li>
          </ul>
        </div>
      </div>

      {/* Right: Small Cards */}
      <div className="lg:col-span-3 flex flex-col gap-4 lg:h-full lg:overflow-y-auto custom-scroll pr-1">
        {[
          { icon: Shield, title: 'Licensing', text: 'Digital licenses required.', link: 'Apply' },
          { icon: Shirt, title: 'Gear', text: 'Snell M2020 / ECE 22.06.', link: 'Standards' },
          { icon: Radio, title: 'Radio', text: 'Tune to 88.1 FM.', link: 'Info' }
        ].map((Card, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group flex-1 flex flex-col justify-center min-h-[140px] lg:min-h-0">
            <Card.icon size={24} className="text-[#dc2626] mb-2" />
            <h5 className="font-teko font-bold text-lg uppercase text-white">{Card.title}</h5>
            <p className="text-xs text-neutral-400 mb-2">{Card.text}</p>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] group-hover:text-white transition-colors">{Card.link} &rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCalendarContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Sidebar Info */}
      <div className="lg:col-span-4 bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between shrink-0">
        <div>
          <div className="inline-block bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">Championship</div>
          <h3 className="text-5xl md:text-7xl font-teko font-bold uppercase italic text-white leading-[0.85] mb-4">2026<br />Season</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            Five rounds of high-octane competition at Rocky Mountain Motorsports. Points count toward the Western Canadian Championship.
          </p>
        </div>
        <div className="bg-black/30 p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-2 mb-2 text-white font-bold uppercase text-xs tracking-widest"><MapPin size={14} className="text-[#dc2626]" /> Track Info</div>
          <p className="text-neutral-500 text-xs">RMM is a 3.5km technical circuit featuring 16 turns and significant elevation changes.</p>
        </div>
      </div>

      {/* Events List */}
      <div className="lg:col-span-8 space-y-4 lg:h-full lg:overflow-y-auto custom-scroll pr-2">
        {MOCK_ROUNDS.map((round) => (
          <div key={round.id} className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#dc2626]/50 transition-all shrink-0">
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center border shrink-0 ${round.status === 'COMPLETED' ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-[#dc2626] text-white border-red-500'}`}>
                <span className="text-[10px] font-bold uppercase tracking-widest">{round.date.split(' ')[0]}</span>
                <span className="text-3xl font-teko font-bold leading-none">{round.date.split(' ')[1].split('-')[0]}</span>
              </div>
              <div>
                <h4 className="text-2xl font-teko font-bold uppercase italic text-white group-hover:text-[#dc2626] transition-colors">{round.name}</h4>
                <div className="flex gap-2 mt-1">
                  {round.status === 'OPEN' && <span className="text-[10px] bg-green-900/50 text-green-400 px-2 rounded uppercase font-bold tracking-wider border border-green-800">Reg Open</span>}
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">{round.location}</span>
                </div>
              </div>
            </div>
            {round.status === 'OPEN' ? (
              <button className="bg-white text-black hover:bg-gradient-to-r hover:from-[#dc2626] hover:to-[#F59E0B] hover:text-white hover:border-transparent border border-transparent font-bold text-xs uppercase px-6 py-3 rounded transition-all tracking-widest">Register</button>
            ) : (
              <button disabled className="text-neutral-600 font-bold text-xs uppercase px-4 py-2 border border-white/5 rounded cursor-not-allowed tracking-widest">Details</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderNewRacersContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#dc2626]/10 border border-[#dc2626]/20 p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><GraduationCap size={120} /></div>
        <div className="relative z-10">
          <div className="bg-[#dc2626] w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-900/50"><GraduationCap size={24} /></div>
          <h4 className="text-4xl md:text-5xl font-bold uppercase mb-4 font-teko text-white">Race School</h4>
          <p className="text-neutral-300 mb-8 leading-relaxed max-w-md">
            Mandatory for all new racers. Includes classroom theory on flagging/rules and on-track drills with pros.
          </p>
          {/* BUTTON: Race School Registration */}
          <a
            href="https://www.motorsportreg.com/events/2026-cmra-race-school-advanced-racer-training-rocky-mountain-motorsports-654468" // <--- EDIT HYPERLINK HERE
            target="_blank"
            rel="noreferrer"
            className="inline-block text-center bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 px-8 py-4 rounded-xl font-bold text-xs uppercase transition-all shadow-lg shadow-red-900/20 tracking-widest text-white"
          >
            Register Spring '26
          </a>
        </div>
      </div>

      <div className="bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={120} /></div>
        <div className="relative z-10">
          <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mb-6"><Users size={24} /></div>
          <h4 className="text-4xl md:text-5xl font-bold uppercase mb-4 font-teko text-white">Mentorship</h4>
          <p className="text-neutral-300 mb-8 leading-relaxed max-w-md">
            We assign mentors to all novice racers to assist with setup, pit space, and race craft throughout your rookie season.
          </p>
          {/* BUTTON: Mentorship Learn More */}
          <a
            href="mailto:info@roadracing.org" // <--- EDIT HYPERLINK HERE
            className="inline-block text-center bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-xs uppercase transition-all hover:bg-white/10 tracking-widest text-neutral-300 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );

  const renderDocumentsContent = () => (
    <div className="flex flex-col lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6 shrink-0">
        <h3 className="text-4xl font-teko font-bold uppercase italic text-white">Rules & Forms</h3>
        <p className="text-neutral-400 text-sm">Official documentation for the 2026 Season.</p>
      </div>

      <div className="flex-1 lg:overflow-y-auto custom-scroll pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_RESOURCES.map((res) => (
            <div key={res.id} className="bg-neutral-900 border border-white/5 p-6 rounded-2xl hover:bg-neutral-800 transition-all group cursor-pointer text-white flex flex-col justify-between min-h-[160px] border-l-4 hover:border-l-[#dc2626] border-l-transparent">
              <FileText className="mb-4 text-neutral-500 group-hover:text-[#dc2626] transition-colors" size={32} />
              <div>
                <h4 className="font-bold text-sm uppercase mb-1 leading-tight line-clamp-2">{res.title}</h4>
                <p className="text-[10px] text-neutral-500 font-bold uppercase">{res.type} • {res.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRaceNumbersContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Sidebar / Context */}
      <div className="lg:col-span-4 flex flex-col gap-6 lg:h-full">
        <div className="bg-neutral-900 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center shrink-0">
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">Race Numbers</h3>
          <p className="text-neutral-400 text-sm">Your race number is your identity. Ensure it meets regulation standards for scoring and safety.</p>
        </div>

        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 flex-1 lg:overflow-y-auto custom-scroll">
          <h4 className="text-xl font-teko font-bold uppercase text-white mb-4">Availability</h4>
          <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
            Numbers 1-10 are reserved for the previous season's top 10 experts. All other numbers are available on a first-come, first-served basis.
          </p>
          <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-lg">
            <h5 className="text-[#F59E0B] font-bold uppercase text-xs tracking-widest mb-1">Priority Deadline</h5>
            <p className="text-white font-teko text-2xl">MARCH 15, 2026</p>
          </div>
        </div>
      </div>

      {/* Main Content: Guidelines */}
      <div className="lg:col-span-8 bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl lg:h-full lg:overflow-y-auto custom-scroll">
        <h3 className="text-3xl font-teko font-bold uppercase text-white mb-6">Plate Requirements</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Expert Plate */}
          <div className="bg-[#050505] p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <div className="w-48 h-32 bg-white rounded-lg flex items-center justify-center mb-4 border-4 border-black shadow-lg">
              <span className="font-teko font-bold text-6xl text-black">18</span>
            </div>
            <h4 className="font-bold text-lg text-white uppercase mb-2">Expert</h4>
            <ul className="text-xs text-neutral-400 space-y-1 text-center">
              <li>Black Numbers</li>
              <li>White Background</li>
              <li>Minimum 6" High</li>
            </ul>
          </div>

          {/* Novice Plate */}
          <div className="bg-[#050505] p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <div className="w-48 h-32 bg-[#FFD700] rounded-lg flex items-center justify-center mb-4 border-4 border-black shadow-lg">
              <span className="font-teko font-bold text-6xl text-[#dc2626]">42</span>
            </div>
            <h4 className="font-bold text-lg text-white uppercase mb-2">Novice / Amateur</h4>
            <ul className="text-xs text-neutral-400 space-y-1 text-center">
              <li>Red Numbers</li>
              <li>Yellow Background</li>
              <li>Minimum 6" High</li>
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-teko font-bold uppercase text-white mb-4">Placement Guidelines</h3>
        <div className="space-y-4 text-neutral-300 text-sm leading-relaxed mb-8">
          <p><strong className="text-white uppercase">Front:</strong> Must be centered on the front fairing or windscreen. Numbers must be clearly visible when the motorcycle is vertical.</p>
          <p><strong className="text-white uppercase">Tail:</strong> Must be visible from the side. Can be on the tail section or side fairing depending on bodywork style.</p>
          <p><strong className="text-white uppercase">Font:</strong> Numbers must be in a solid, block font (e.g., Impact, Arial Black). Serifs or script fonts are prohibited.</p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="text-2xl font-teko font-bold uppercase text-white mb-4">Reserve Your Number</h3>
          <p className="text-neutral-400 text-sm mb-6">
            To reserve a specific race number for the 2026 season, please contact the CMRA Registrar. Please provide your top 3 choices.
          </p>
          <a href="mailto:registrar@roadracing.org" className="inline-block bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold py-3 px-8 text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-red-900/20">
            Contact Registrar
          </a>
        </div>
      </div>
    </div>
  );

  return (
    // MASTER LAYOUT: 
    <div className={`flex flex-col bg-[#050505] text-white min-h-[100dvh] lg:h-screen lg:overflow-hidden`}>
      <Header onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 lg:overflow-hidden relative flex flex-col p-4 md:p-6 lg:p-8">

        {currentView !== 'home' && (
          <div className="shrink-0 mb-4 lg:mb-6">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-teko text-lg uppercase tracking-wide group"
            >
              <div className="bg-white/10 p-1 rounded group-hover:bg-[#dc2626] transition-colors">
                <ArrowLeft size={14} />
              </div>
              Back to Grid
            </button>
          </div>
        )}

        <div className="flex-1 lg:overflow-hidden">
          {currentView === 'home' && (
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 md:gap-4 lg:h-full lg:overflow-hidden animate-in fade-in duration-300">
              {/* Dashboard Hero */}
              <div className="lg:col-span-9 flex flex-col gap-3 lg:h-full lg:overflow-hidden">
                <div className="relative flex-none lg:flex-1 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-inner group min-h-[300px] lg:min-h-0">
                  <div className="absolute inset-0">
                    {mediaType === 'video' && <video autoPlay muted loop playsInline src={MEDIA_PATHS.video} className="w-full h-full object-cover opacity-60" onError={() => setMediaType('image')} />}
                    {mediaType === 'image' && <img src={MEDIA_PATHS.image} alt="Hero" className="w-full h-full object-cover opacity-60" onError={() => setMediaType('fallback')} />}
                    {mediaType === 'fallback' && <img src={MEDIA_PATHS.fallback} alt="Hero" className="w-full h-full object-cover opacity-60" />}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                  </div>

                  {/* SCROLLABLE HERO CONTENT */}
                  <div className="absolute inset-0 p-6 md:p-8 overflow-y-auto custom-scroll">
                    <div className="max-w-4xl space-y-2 pt-2">
                      <div className="inline-block bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(210,43,43,0.4)] border border-red-500/30">
                        Season 2026
                      </div>
                      <div className="space-y-0 md:space-y-[-0.3em] pb-1">
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-teko font-bold italic leading-[0.85] tracking-tighter text-white">
                          THE SPEED RETURNS.
                        </h1>
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-teko font-bold italic leading-[0.85] tracking-tighter text-[#dc2626]">
                          THE PASSION NEVER LEFT.
                        </h1>
                      </div>
                      <p className="text-lg md:text-2xl font-bold italic text-white tracking-wide">
                        Motorcycle roadracing is back in Southern Alberta!
                      </p>
                      <div className="bg-black/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#dc2626] max-w-2xl mt-2 mb-2">
                        <p className="text-sm md:text-base font-medium text-neutral-200 leading-relaxed italic">
                          Bar-to-bar, knee-dragging, pulse pounding competition. That's the CMRA.
                          The bravest on two wheels take on Alberta's finest racetrack: <span className="text-white font-bold">Rocky Mountain Motorsports Circuit.</span>
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {/* HERO BUTTON 1: BECOME A RACER */}
                        <a
                          href="#" // <--- EDIT HYPERLINK HERE (e.g. https://www.motorsportreg.com)
                          onClick={(e) => {
                            // IF ADDING EXTERNAL LINK: Remove this onClick handler entirely.
                            // CURRENTLY: Navigates internally to 'new-racers' view.
                            e.preventDefault();
                            navigateTo('new-racers');
                          }}
                          className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-teko font-bold py-3.5 px-8 text-xl uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/40"
                        >
                          BECOME A RACER <ArrowRight size={20} />
                        </a>

                        {/* HERO BUTTON 2: UPCOMING EVENTS */}
                        <a
                          href="#" // <--- EDIT HYPERLINK HERE
                          onClick={(e) => {
                            // IF ADDING EXTERNAL LINK: Remove this onClick handler entirely.
                            // CURRENTLY: Navigates internally to 'calendar' view.
                            e.preventDefault();
                            navigateTo('calendar');
                          }}
                          className="inline-block text-center bg-[#1A1A1A] hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-teko font-bold py-3.5 px-8 text-xl uppercase tracking-widest rounded-xl transition-all"
                        >
                          UPCOMING EVENTS
                        </a>
                      </div>
                      <div className="h-4"></div>
                    </div>
                  </div>
                </div>
                {/* Bottom Tiles */}
                <div className="grid grid-cols-2 gap-3 h-[70px] shrink-0">
                  <div onClick={() => navigateTo('about')} className="bg-neutral-900/50 border border-white/5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer hover:bg-neutral-800 hover:border-[#dc2626] transition-all group">
                    <Info size={20} className="text-neutral-500 group-hover:text-[#dc2626] transition-colors" />
                    <span className="text-lg font-teko font-bold tracking-widest italic text-white group-hover:text-[#dc2626] transition-colors">WHY RACE WITH CMRA</span>
                  </div>
                  <div onClick={() => navigateTo('sponsors')} className="bg-neutral-900/50 border border-white/5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer hover:bg-neutral-800 hover:border-[#dc2626] transition-all group">
                    <Trophy size={20} className="text-neutral-500 group-hover:text-[#dc2626] transition-colors" />
                    <span className="text-lg font-teko font-bold tracking-widest italic text-white group-hover:text-[#dc2626] transition-colors">SPONSORS</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Sidebar */}
              <div className="lg:col-span-3 flex flex-col gap-3 lg:h-full lg:overflow-hidden">
                <div className="bg-neutral-900/40 border border-white/10 p-4 rounded-2xl flex flex-col justify-between shrink-0 min-h-[130px]">
                  <div>
                    <p className="text-[10px] font-bold text-[#dc2626] uppercase tracking-[0.2em] mb-1 italic">Next Event</p>
                    <h2 className="text-2xl font-teko font-bold tracking-tighter italic text-white leading-none">ROUND 1</h2>
                    <p className="text-4xl font-teko font-bold tracking-tighter italic leading-none mb-1 text-white">MAY 24</p>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-neutral-500 font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full"></div> RMM Circuit</div>
                </div>

                <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5 flex flex-col flex-grow min-h-[200px] lg:min-h-0 lg:overflow-hidden">
                  <h3 className="text-xl font-teko font-bold tracking-widest italic text-white mb-4 shrink-0">Latest News</h3>
                  <div className="flex-1 overflow-y-auto custom-scroll space-y-3 pr-2">
                    {MOCK_NEWS.map(n => (
                      <div key={n.id} onClick={() => openNews(n)} className="bg-black/40 border border-white/5 p-3 rounded-lg hover:border-[#dc2626]/30 transition-all cursor-pointer group">
                        <span className="text-[9px] font-bold text-[#dc2626] uppercase tracking-widest block mb-1 group-hover:text-white transition-colors">{n.category}</span>
                        <h4 className="text-sm font-bold leading-tight text-white font-teko tracking-wide mb-1">{n.title}</h4>
                        <p className="text-xs text-neutral-400 line-clamp-2 leading-snug">{n.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'news' && renderNewsDetailContent()}
          {currentView === 'about' && renderAboutContent()}
          {currentView === 'contact' && renderContactContent()}
          {currentView === 'racer-info' && renderRacerInfoContent()}
          {currentView === 'calendar' && renderCalendarContent()}
          {currentView === 'new-racers' && renderNewRacersContent()}
          {currentView === 'documents' && renderDocumentsContent()}
          {currentView === 'race-numbers' && renderRaceNumbersContent()}
          
          {currentView === 'watch-live' && renderPlaceholder('Watch LIVE', 'Live timing, scoring, and video feeds.')}
          {currentView === 'start-racing' && renderPlaceholder('How It Works', 'A comprehensive guide to starting your racing journey.')}
          {currentView === 'race-school' && renderNewRacersContent()}
          {currentView === 'register-races' && renderPlaceholder('Register for Races', 'Information on race registration and entry fees.')}
          {currentView === 'classes' && renderPlaceholder('Classes & Categories', 'Details on CMRA racing classes.')}
          {currentView === 'wccs' && renderPlaceholder('WCCS', 'Western Canadian Championship Series Information.')}
          {currentView === 'bike-gear' && renderPlaceholder('Bike & Gear', 'Technical requirements for motorcycles and safety gear.')}
          {currentView === 'results' && renderPlaceholder('Results', 'Race results and timing archives.')}
          {currentView === 'membership' && renderPlaceholder('Become a Member', 'CMRA Membership benefits and registration.')}
          {currentView === 'rules-safety' && renderDocumentsContent()}
          {currentView === 'volunteers' && renderPlaceholder('Volunteers', 'Information on marshalling and volunteering.')}
          {currentView === 'sponsors' && renderPlaceholder('Sponsors & Partners', 'Our 2026 Season Sponsors.')}
          {currentView === 'rmm-circuit' && renderPlaceholder('RMM Circuit', 'Information about Rocky Mountain Motorsports.')}
        </div>
      </main>

      {/* Footer */}
      <footer className="h-14 px-4 md:px-8 border-t border-white/5 flex items-center justify-between shrink-0 bg-black/80 backdrop-blur-md z-50">
        <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.4em]">© 2026 CMRA</p>
        <div className="flex items-center gap-2 select-none opacity-50">
          <div className="flex items-center gap-3 text-[9px] font-bold text-neutral-500 uppercase tracking-[0.4em]">
            <span className="hidden sm:inline">POWERED BY ELECTRIC AVENUE</span><span className="sm:hidden">ELEC AVE</span>
          </div>
          <Zap size={12} className="text-neutral-600" />
        </div>
      </footer>
    </div>
  );
};

export default App;

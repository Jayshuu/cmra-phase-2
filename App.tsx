
import React, { useState } from 'react';
import Header from './components/Header';
import { Trophy, Users, Flag, ArrowRight, FileText, Map, GraduationCap, Info, History, ShieldCheck, Mail, MessageSquare, MapPin, Calendar, Timer, Ticket, ClipboardList, Clock, Wrench, Shield, Shirt, Radio, Zap, ArrowLeft, AlertTriangle, ExternalLink, ChevronDown, TrendingUp } from 'lucide-react';
import { MOCK_NEWS, MOCK_RESOURCES, MOCK_ROUNDS } from './constants';
import { NewsItem } from './types';

// --- MEDIA CONFIGURATION ---
const MEDIA_PATHS = {
  video: '/videos/intro.mp4',
  image: '/images/group_photo.jpg',
  aboutPageImage: '/images/about.jpg',
  fallback: '/images/group_photo.jpg'
};

// Define valid views
type ViewType = 'home' | 'watch-live' | 'start-racing' | 'how-it-works' | 'race-school' | 'register-races' | 'classes' | 'wccs' | 'bike-gear' | 'results' | 'race-numbers' | 'calendar' | 'upcoming-events' | 'event-details' | 'register-events' | 'membership' | 'become-member' | 'forms-documents' | 'rules-safety' | 'news' | 'volunteers' | 'sponsors' | 'about' | 'rmm-circuit' | 'contact' | 'racer-info' | 'new-racers' | 'documents' | 'costs' | 'racing' | 'events' | 'community' | 'our-story' | 'advanced-training';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [mediaType, setMediaType] = useState<'video' | 'image' | 'fallback'>('image');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [activeRulesSection, setActiveRulesSection] = useState<string>('rulebooks');

  const navigateTo = (view: ViewType | string, section?: string) => {
    setCurrentView(view as ViewType);
    if (section) {
      setActiveRulesSection(section);
    }
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

  const renderCommunityMainContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R5027.jpg"
            alt="CMRA Community Racers Grid Group Photo"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Community</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">
            Racing doesn’t stop at the track.
          </h3>
          <p className="text-base text-white font-sans font-bold mb-3">It lives in the community—at events, in the paddock, and anywhere riders come together.</p>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            The Calgary Motorcycle Roadracing Association is out there—building the sport, supporting riders, and pushing motorcycle roadracing forward across Western Canada.
          </p>

          <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6">
            <button
              onClick={() => navigateTo('start-racing')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
            >
              👉 Start Racing
            </button>
            <button
              onClick={() => navigateTo('events')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest flex items-center justify-center gap-1.5"
            >
              👉 View Events
            </button>
          </div>
        </div>
      </div>

      {/* BENTO GRID (2 Blocks) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Block 1: NEWS & UPDATES */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Block 01</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">NEWS & UPDATES</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Stay In The Loop</p>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              From race announcements to community appearances, this is where you’ll find what’s happening – on and off the track.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              You’ll find the CMRA at local events like the Calgary Motorcycle and Powersport Show, in the community, and supporting the need for speed through fundraising and outreach.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigateTo('news')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Read News & Updates
            </button>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center flex items-center justify-center gap-1"
            >
              👉 Follow The CMRA On Social
            </a>
          </div>
        </div>

        {/* Block 2: SPONSORS & PARTNERS */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Block 02</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">SPONSORS & PARTNERS</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Powered By Passion</p>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              Racing doesn’t happen alone.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              Our sponsors and partners play a critical role in keeping the wheels turning – supporting riders, events, and the future of the sport.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto">
            <button
              onClick={() => navigateTo('sponsors')}
              className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 View Sponsors & Partners
            </button>
          </div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">FINAL CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Stay connected. Stay involved.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
          >
            👉 Follow The CMRA
          </a>
          <button
            onClick={() => navigateTo('contact')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5 group/btn"
          >
            👉 Contact The CMRA <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderNewsDetailContent = () => {
    if (selectedNews) {
      return (
        <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
          <button
            onClick={() => setSelectedNews(null)}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-teko text-lg uppercase tracking-wide group w-max"
          >
            <div className="bg-white/10 p-1 rounded group-hover:bg-[#dc2626] transition-colors">
              <ArrowLeft size={14} />
            </div>
            Back To News List
          </button>

          <div className="bg-neutral-900 border border-[#dc2626]/20 p-8 md:p-12 rounded-2xl">
            <div className="mb-8 border-b border-white/10 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm">{selectedNews.category}</span>
                <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">{selectedNews.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-teko font-bold italic text-white uppercase leading-[0.9] mb-6">{selectedNews.title}</h1>
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-medium font-teko uppercase tracking-wide">{selectedNews.content}</p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className={`text-neutral-300 leading-relaxed font-sans text-sm md:text-base mb-8 ${typeof selectedNews.body === 'string' ? 'whitespace-pre-wrap' : ''}`}>
                {selectedNews.body}
              </div>

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
              <button
                onClick={() => setSelectedNews(null)}
                className="text-neutral-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back to News List
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Render landing list of news articles
    return (
      <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
        {/* HERO & OVERVIEW */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">News & Updates</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            What’s happening – right now.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">This is your source for everything CMRA.</p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl mb-3">
              From race announcements and schedule updates to community appearances and behind-the-scenes moments, it’s all here.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-3xl">
              As the Calgary Motorcycle Roadracing Association continues to grow its presence, this page will evolve with it – capturing the people, events, and momentum behind the racing.
            </p>
          </div>
        </div>

        {/* WHAT YOU'LL FIND & STAY CONNECTED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* WHAT YOU'LL FIND */}
          <div className="lg:col-span-6 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
            <div>
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
                <ClipboardList size={18} className="text-[#dc2626]" /> What You'll Find
              </h4>

              <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
                <li>Event announcements and updates</li>
                <li>Race weekend highlights</li>
                <li>Community involvement and appearances</li>
                <li>Important rider information</li>
              </ul>
            </div>
          </div>

          {/* STAY CONNECTED */}
          <div className="lg:col-span-6 bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
                <Users size={18} className="text-[#dc2626]" /> Stay Connected
              </h4>
              <p className="text-xs text-neutral-300 font-sans mb-4">
                Not everything waits for a webpage update.
              </p>
              <p className="text-xs text-neutral-400 font-sans mb-6">
                For real-time news, reminders, and announcements:
              </p>
            </div>

            <div className="border-t border-white/5 pt-4 mt-auto">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center block"
              >
                👉 Follow The CMRA On Social Media
              </a>
            </div>
          </div>

        </div>

        {/* ACTIVE ARTICLES GRID */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-6">Stay In The Loop</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_NEWS.map(news => (
              <div
                key={news.id}
                onClick={() => setSelectedNews(news)}
                className="bg-[#050505] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors cursor-pointer group animate-in fade-in duration-300"
              >
                <div>
                  <span className="text-[#dc2626] font-bold text-[10px] uppercase block mb-1">{news.date}</span>
                  <h4 className="text-2xl font-teko font-bold text-white uppercase mb-2 group-hover:text-[#dc2626] transition-colors leading-tight">{news.title}</h4>
                  <p className="text-neutral-400 text-xs font-sans line-clamp-3 leading-relaxed mb-4">{news.content}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                    {news.category}
                  </span>
                  <span className="text-xs font-bold uppercase text-[#dc2626] group-hover:text-white transition-colors flex items-center gap-1">
                    READ ARTICLE <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
            <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Don’t miss what’s next.</h4>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
            <button
              onClick={() => navigateTo('upcoming-events')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
            >
              👉 View Upcoming Events
            </button>
            <button
              onClick={() => navigateTo('start-racing')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5 group/btn"
            >
              👉 Start Racing <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderOurStoryContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
        <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Our Story</span>
        <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
          The CMRA: Southern Alberta’s Home for Motorcycle Racing
        </h3>

        <div className="mt-4 border-t border-white/5 pt-4">
          <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Our Mission</h4>
          <p className="text-base md:text-lg text-white font-sans font-bold leading-relaxed mb-3">
            To run Western Canada’s premier motorcycle roadracing events by pushing the sport forward through safety, skill, and accountability – without dulling the edge.
          </p>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            Since 1987, the Calgary Motorcycle Roadracing Association has given riders a place to test their limits and pursue their racing potential.
          </p>

          <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6">
            <button
              onClick={() => navigateTo('start-racing')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
            >
              👉 Start Racing
            </button>
            <button
              onClick={() => navigateTo('events')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest flex items-center justify-center gap-1.5"
            >
              👉 View Events
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Legacy & Paddock Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Block 1: THE LEGACY */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Legacy</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">THE CMRA LEGACY</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Our History & Spirit</p>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
              Built by volunteers and driven by racers, the CMRA has been at the core of Canadian motorsports since the days of Race City Speedway, in Calgary.
            </p>

            <div className="bg-black/40 p-3 rounded-xl border border-white/5 my-4">
              <p className="text-xs text-white leading-normal font-sans italic font-bold">
                Race City may be gone, but our spirit isn’t.
              </p>
            </div>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              It lives on as we write the next chapter at Rocky Mountain Motorsports Circuit – Alberta’s premier racetrack.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigateTo('watch-live')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Watch LIVE
            </button>
            <button
              onClick={() => navigateTo('calendar')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 View Event Calendar
            </button>
          </div>
        </div>

        {/* Block 2: THE COMMUNITY */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Paddock</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">THE CMRA COMMUNITY</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">More Than Race Weekends</p>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              The CMRA is more than race weekends.
            </p>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              It’s a paddock built on speed, commitment, and community. Whether you’re on the throttle, over the wall, or in the pits – if you live for motorcycles, you belong here.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigateTo('become-member')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Become A Member
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Contact CMRA
            </button>
          </div>
        </div>

      </div>

      {/* FINAL CTA: See you at the track */}
      <div className="bg-neutral-950 border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-amber-950/10 to-red-950/10 opacity-50"></div>
        <h4 className="text-4xl md:text-6xl font-teko font-bold uppercase italic text-white leading-none tracking-wider relative z-10 group-hover:scale-105 transition-transform duration-500">
          See you at the track.
        </h4>
      </div>
    </div>
  );

  const renderAdvancedTrainingContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6469.jpg"
            alt="Advanced Rider Training Paddock"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Advanced Rider Training</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Good isn’t enough. Get faster.
          </h3>

          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">
              Advanced Rider Training (ART) is built for racers ready to push further.
            </p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              This is where you go beyond basics – and find precision.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid (3 Blocks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: WHAT YOU'LL WORK ON */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Focus Areas</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">CLINIC CURRICULUM</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-4">What You’ll Work On</p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Passing techniques</li>
              <li>Racecraft under pressure</li>
              <li>Line refinement</li>
              <li>Consistency at speed</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-[10px] text-neutral-400 leading-normal font-sans italic font-bold">
              Targeted skill building to safely drops your lap times.
            </p>
          </div>
        </div>

        {/* Block 2: STRUCTURE */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Format</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">COURSE FORMAT</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-4">Structure</p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Small groups (max 3:1 ratio)</li>
              <li>Personalized coaching</li>
              <li>Same-day integration with CMRA Race School sessions</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-[10px] text-neutral-400 leading-normal font-sans italic font-bold">
              High coach-to-rider ratio guarantees immediate, targeted feedback.
            </p>
          </div>
        </div>

        {/* Block 3: WHO IT'S FOR */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Target Audience</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">ELIGIBILITY</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-4">Who It’s For</p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Licensed racers</li>
              <li>Riders looking to improve lap times</li>
              <li>Anyone serious about competing at a higher level</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-[10px] text-neutral-400 leading-normal font-sans italic font-bold">
              Push your racing credentials and unlock advanced racecraft capabilities.
            </p>
          </div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Find your next second.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="https://www.motorsportreg.com"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 Register via MotorsportReg <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );

  const renderAboutContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R5540.jpg"
            alt="About CMRA Action Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">About the CMRA</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Built on passion. Proven on track.
          </h3>

          <p className="text-base text-white font-sans font-bold mb-3">
            Since 1987, the Calgary Motorcycle Roadracing Association has been at the center of motorcycle roadracing in Southern Alberta.
          </p>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed mb-4 max-w-3xl">
            What started as a place to race has become something more:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6">
            {['A proving ground.', 'A community.', 'A standard.'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span>
                <span className="text-sm md:text-base font-sans font-bold text-white uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6">
            <button
              onClick={() => navigateTo('start-racing')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
            >
              👉 Start Racing
            </button>
            <button
              onClick={() => navigateTo('events')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest flex items-center justify-center gap-1.5"
            >
              👉 View Events
            </button>
          </div>
        </div>
      </div>

      {/* BENTO GRID (3 Blocks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: THE CMRA (Our Story) */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R5803.jpg"
              alt="CMRA Story Backdrop"
              className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none z-10"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

          <div className="relative z-10">
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Block 01</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">THE CMRA</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Our Story</p>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              From the early days at Race City Speedway to today’s competition at a world-class facility, the CMRA has always been about one thing:
            </p>
            <div className="bg-black/50 p-3 rounded-xl border border-white/5 my-4 backdrop-blur-sm">
              <p className="text-xs text-white leading-normal font-sans italic font-bold">
                Giving riders a place to push their limits.
              </p>
            </div>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6 font-bold">
              Volunteer-driven. Rider-focused. Built for real racing.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto relative z-10">
            <button
              onClick={() => navigateTo('our-story')}
              className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Learn More About the CMRA
            </button>
          </div>
        </div>

        {/* Block 2: CONTACT (Get In Touch) */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R5918.jpg"
              alt="Contact Background"
              className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none z-10"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

          <div className="relative z-10">
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Block 02</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">CONTACT</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Get In Touch</p>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              Every racer starts somewhere – and usually with a question.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
              Whether you’re getting started or getting back on track, the CMRA team is here to help.
            </p>

            <a
              href="mailto:cmra@roadracing.org"
              className="block w-full bg-black/60 hover:bg-black/80 border border-white/5 hover:border-white/10 rounded-xl p-3 text-xs text-neutral-300 font-sans transition-all flex items-center justify-center gap-2 mb-4 backdrop-blur-sm"
            >
              <Mail size={14} className="text-[#dc2626]" />
              <span>👉 Email: cmra@roadracing.org</span>
            </a>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto relative z-10">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 Contact CMRA
            </button>
          </div>
        </div>

        {/* Block 3: ROCKY MOUNTAIN MOTORSPORTS CIRCUIT (Our Home Track) */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6089.jpg"
              alt="Rocky Mountain Motorsports Circuit Backdrop"
              className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none z-10"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

          <div className="relative z-10">
            <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Block 03</span>
            <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1 leading-tight">ROCKY MOUNTAIN MOTORSPORTS CIRCUIT</h4>
            <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide mb-3">Our Home Track</p>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              All CMRA events take place at Rocky Mountain Motorsports Circuit – a modern, purpose-built circuit designed for performance.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6 italic">
              Fast. Technical. Unforgiving in the best way. A true rider’s track.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            <button
              onClick={() => navigateTo('rmm-circuit')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase py-3 rounded-xl transition-all tracking-wider text-center"
            >
              👉 Explore The Circuit
            </button>
            <button
              onClick={() => navigateTo('events')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase py-3 rounded-xl transition-all tracking-wider text-center"
            >
              👉 View Events At RMM
            </button>
          </div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Now you know who we are. The next move is yours.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('start-racing')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center gap-1.5 group/btn"
          >
            👉 Start Racing <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => navigateTo('become-member')}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest flex items-center justify-center gap-1.5"
          >
            👉 Become A Member
          </button>
        </div>
      </div>
    </div>
  );

  const renderContactContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
        <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Get In Touch</span>
        <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
          Ask the question. Take the next step.
        </h3>

        <div className="mt-4 border-t border-white/5 pt-4">
          <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
          <p className="text-base text-white font-sans font-bold mb-2">Every racer starts with a question.</p>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            Whether it’s about getting licensed, preparing your bike, or choosing your first event – the Calgary Motorcycle Roadracing Association is here to help.
          </p>
        </div>
      </div>

      {/* Grid: Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Details & Info (Bento Blocks) */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Contact Details Block */}
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

            <h4 className="text-xl font-teko font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Mail size={18} className="text-[#dc2626]" /> Contact Details
            </h4>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-[#F59E0B] uppercase tracking-widest font-mono font-bold block mb-1">General Inquiries:</span>
                <a href="mailto:cmra@roadracing.org" className="text-xl font-teko font-bold tracking-wide text-white hover:text-[#dc2626] transition-colors block">
                  cmra@roadracing.org
                </a>
              </div>

              <p className="text-xs text-neutral-300 font-sans leading-relaxed border-t border-white/5 pt-3">
                The CMRA team strives to respond as quickly as possible to all inquiries.
              </p>
            </div>
          </div>

          {/* Stay Informed Block */}
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

            <h4 className="text-xl font-teko font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Info size={18} className="text-[#dc2626]" /> Stay Informed
            </h4>

            <div className="space-y-4 text-xs font-sans">
              <div>
                <p className="text-neutral-300 font-bold mb-2">For the latest updates on:</p>
                <ul className="space-y-1.5 text-neutral-400 pl-4 list-disc marker:text-[#dc2626]">
                  <li>Events</li>
                  <li>Registration openings</li>
                  <li>Announcements</li>
                </ul>
              </div>

              <div className="border-t border-white/5 pt-3">
                <p className="text-neutral-300 font-bold mb-2">Be sure to check:</p>
                <ul className="space-y-1.5 text-neutral-400 pl-4 list-disc marker:text-[#dc2626]">
                  <li>The website</li>
                  <li>CMRA social channels</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-center">
          <h4 className="text-2xl font-teko font-bold uppercase text-white mb-6">Quick Message</h4>
          <form className="space-y-4 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Name</label>
                <input type="text" className="w-full bg-black border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email</label>
                <input type="email" className="w-full bg-black border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Topic</label>
              <select className="w-full bg-black border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all">
                <option>General Question</option>
                <option>Licensing</option>
                <option>Volunteering</option>
              </select>
            </div>
            <div className="space-y-1 flex-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Message</label>
              <textarea className="w-full h-full min-h-[120px] bg-black border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#dc2626] focus:outline-none focus:ring-1 focus:ring-[#dc2626] transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold py-4 uppercase text-xs tracking-widest rounded-xl transition-all shadow-md shadow-red-950/40 shrink-0">
              Send Transmission
            </button>
          </form>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Don’t wait for the perfect moment – reach out.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="mailto:cmra@roadracing.org"
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 Email CMRA Now <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest flex items-center justify-center gap-1.5"
          >
            👉 Follow The CMRA
          </a>
        </div>
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
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6247.jpg"
            alt="Calendar Season Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">season calendar</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            The season is taking shape.
          </h3>
          <p className="text-[#F59E0B] font-teko font-bold text-lg md:text-xl uppercase tracking-wide italic mb-4 leading-none">
            Dates are dropping. More are coming. Be ready to move when they do.
          </p>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            The Calgary Motorcycle Roadracing Association calendar is built as the season comes together – giving riders early visibility while leaving room for additional race weekends and updates.
          </p>
        </div>
      </div>

      {/* OVERVIEW ACCENT BOX */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
        <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider mb-2">Track Overview</h4>
        <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed flex items-center gap-2">
          <MapPin size={16} className="text-[#dc2626] shrink-0" />
          <span>Currently, all CMRA roadracing events take place at the world-class <span className="text-white font-bold">Rocky Mountain Motorsports Circuit</span>.</span>
        </p>
      </div>

      {/* THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Box 1: WHAT TO EXPECT */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Flag size={18} className="text-[#dc2626]" /> WHAT TO EXPECT
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">RACE WEEKEND</span>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Practice + race sessions at every round</li>
              <li>Championship points on the line</li>
              <li>Additional events may be added as the season develops</li>
              <li>Updates to the schedule will be posted online</li>
            </ul>
          </div>
        </div>

        {/* Box 2: STAY READY */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Timer size={18} className="text-[#F59E0B]" /> STAY READY
              </h4>
              <span className="text-[10px] bg-[#dc2626] text-white font-bold px-2 py-0.5 rounded">ADVANTAGE</span>
            </div>

            <p className="text-white font-bold text-xs mb-3 leading-snug">
              This isn’t a static schedule.
            </p>
            <p className="text-[11px] text-neutral-400 font-sans mb-3 leading-normal">
              New dates can drop. Existing rounds can evolve. Riders who stay ready win the early advantage:
            </p>

            <ul className="space-y-2 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#F59E0B]">
              <li>Monitor announcements</li>
              <li>Check back regularly</li>
              <li>Be prepared to register when events go live</li>
            </ul>
          </div>
        </div>

        {/* Box 3: KEY NOTES */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Info size={18} className="text-[#dc2626]" /> KEY NOTES
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">REGISTRATION</span>
            </div>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Registration opens as events are confirmed</li>
              <li>Availability may be limited per event</li>
            </ul>

            <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-4">
              <p className="text-[10px] text-neutral-400 leading-normal font-sans italic">
                Grids are configured on MotorsportReg. Book early to secure your grid position.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* THE SEASON CALENDAR LIST (Interactive rounds list) */}
      <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl">
        <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-6">Confirmed Rounds & Dates</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_ROUNDS.map((round) => (
            <div key={round.id} className="bg-[#050505] border border-white/5 rounded-xl p-5 flex items-center justify-between gap-6 group hover:border-[#dc2626]/30 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-lg flex flex-col items-center justify-center border shrink-0 ${round.status === 'COMPLETED' ? 'bg-neutral-800 border-neutral-700 text-neutral-500' : 'bg-[#dc2626] text-white border-red-500'}`}>
                  <span className="text-[8px] font-bold uppercase tracking-wider leading-none mb-0.5">{round.date.split(' ')[0]}</span>
                  <span className="text-2xl font-teko font-bold leading-none">{round.date.split(' ')[1].split('-')[0]}</span>
                </div>
                <div>
                  <h4 className="text-xl font-teko font-bold uppercase italic text-white group-hover:text-[#dc2626] transition-colors leading-none mb-1">{round.name}</h4>
                  <div className="flex gap-2">
                    {round.status === 'OPEN' ? (
                      <span className="text-[8px] bg-green-950 text-green-400 border border-green-800 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Reg Open</span>
                    ) : (
                      <span className="text-[8px] bg-neutral-800 text-neutral-400 border border-neutral-700 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">{round.status}</span>
                    )}
                    <span className="text-[8px] text-neutral-500 uppercase font-bold tracking-wider pt-0.5">{round.location}</span>
                  </div>
                </div>
              </div>

              {round.status === 'OPEN' ? (
                <button
                  onClick={() => navigateTo('register-races')}
                  className="bg-white text-black hover:bg-[#dc2626] hover:text-white font-bold text-[10px] uppercase px-4 py-2 rounded transition-all tracking-wider shrink-0"
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={() => navigateTo('event-details')}
                  className="text-neutral-500 font-bold text-[10px] uppercase px-3 py-2 border border-white/5 rounded hover:text-white hover:border-white/10 transition-all tracking-wider shrink-0"
                >
                  Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Stay sharp. Stay ready.</h4>
          <p className="text-neutral-400 text-xs mt-1">Ready to find out what you are made of? Choose your round or register when grids go live.</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('upcoming-events')}
            className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-1.5 group text-left"
          >
            View Upcoming Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
          </button>
          <button
            onClick={() => navigateTo('register-races')}
            className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            Register When Events Go Live <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );

  const renderNewRacersContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6111.jpg"
            alt="Race School Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity z-10"><GraduationCap size={120} /></div>
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
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6238.jpg"
            alt="Mentorship Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity z-10"><Users size={120} /></div>
        <div className="relative z-10">
          <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center mb-6"><Users size={24} /></div>
          <h4 className="text-4xl md:text-5xl font-bold uppercase mb-4 font-teko text-white">Mentorship</h4>
          <p className="text-neutral-300 mb-8 leading-relaxed max-w-md">
            We assign mentors to all novice racers to assist with setup, pit space, and race craft throughout your rookie season.
          </p>
          {/* BUTTON: Mentorship Learn More */}
          <a
            href="mailto:info@roadracing.org" // <--- EDIT HYPERLINK HERE
            className="inline-block text-center bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-xs uppercase transition-all hover:bg-white/10 tracking-widest text-neutral-300 hover:text-white relative z-10"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );

  const renderWatchLiveContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Left Column: Full Copy and Experience Details */}
      <div className="lg:col-span-8 bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl space-y-8 text-neutral-300 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6221.jpg"
            alt="Watch LIVE Spectator"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <div>
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">spectator guide</span>
            <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-[0.9] mb-4">
              ALBERTA’S BEST-KEPT MOTORSPORTS SECRET – RIGHT IN YOUR BACKYARD.
            </h3>

            <div className="bg-black/40 border border-white/5 p-5 rounded-xl border-l-4 border-l-[#dc2626] mb-6">
              <p className="font-sans text-sm md:text-base leading-relaxed italic text-white">
                The wide-open beauty of Alberta meets the raw intensity of high-speed competition. This is where first-time spectators become lifelong fans – where the sound, speed, and atmosphere hit differently in person. Welcome to CMRA race day.
              </p>
            </div>
          </div>

          {/* Section 1: Experience It Live */}
          <section className="space-y-4">
            <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] flex items-center gap-2">
              <MapPin size={22} /> Experience It Live
            </h4>
            <p className="text-sm font-sans leading-relaxed">
              Set against the backdrop of rolling prairie and big Alberta sky, races take place at the world-class <strong className="font-bold text-white">Rocky Mountain Motorsports Circuit</strong> – just north of the city.
            </p>
            <div className="bg-[#050505] p-5 rounded-xl border border-white/5 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-white">This is professional-grade road racing, up close:</p>
              <ul className="space-y-2 text-xs text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                <li>Bar-to-bar competition at full throttle</li>
                <li>Multiple race classes across the day</li>
                <li>Open paddock access – get closer to the bikes, teams, and riders</li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('rmm-circuit')}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] hover:text-white transition-colors border-b border-[#dc2626] hover:border-white"
                >
                  Plan your visit: Rocky Mountain Motorsports Circuit &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: Built for Everyone */}
          <section className="space-y-4">
            <h4 className="text-2xl font-teko font-bold uppercase text-[#dc2626] flex items-center gap-2">
              <Users size={22} /> Built for Everyone
            </h4>
            <p className="text-sm font-sans leading-relaxed">
              Motorsports has always been about more than racing – it’s about people. Whether you’re a lifelong fan or just curious, you’ll find race day is welcoming, accessible – and meant for everyone.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { t: 'Family Atmosphere', d: 'Welcoming environments for all ages.' },
                { t: 'Flexible Viewing', d: 'Vantage spots positioned around the circuit.' },
                { t: 'Community & Action', d: 'Food, community pits, and a full day of action.' }
              ].map((it, idx) => (
                <li key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl text-center">
                  <span className="text-white font-teko text-lg uppercase font-bold block mb-1">{it.t}</span>
                  <span className="text-[10px] text-neutral-400 font-sans block leading-normal">{it.d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Pure Racing */}
          <section className="space-y-3 bg-[#050505]/40 border border-white/5 p-5 rounded-xl">
            <h4 className="text-2xl font-teko font-bold uppercase text-white">Pure Racing</h4>
            <p className="text-sm font-sans leading-relaxed italic text-neutral-300">
              This isn’t a stadium event with barriers and big-ticket pricing. It’s something better.
              <br /><br />
              It’s real racing – up close. Where you can walk the paddock, hear every gear change, and watch riders push the edge of skill and nerve – fueled by the kind of passion you can feel in your chest.
              <br /><br />
              No distance. No pretense. No inflated price. Just authentic motorsports – made for the people who love it.
            </p>
          </section>

          {/* Action: Get Your Tickets */}
          <section className="border-t border-[#dc2626]/20 pt-6 space-y-4">
            <h4 className="text-xl font-teko font-bold uppercase text-white">Get Your Tickets</h4>
            <p className="text-xs text-neutral-400 font-sans">
              Tickets are available through our trusted partner, MotorsportReg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.motorsportreg.com/calendar/?q=Calgary+Motorcycle+Road+Racing&radius=300"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest text-center shadow-lg shadow-red-900/20 flex items-center justify-center gap-1.5"
              >
                Buy Tickets on MotorsportReg <ExternalLink size={14} />
              </a>
              <button
                onClick={() => navigateTo('calendar')}
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest text-center"
              >
                View Upcoming Race Dates
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Right Column: Sticky CTA & Know Before You Go */}
      <div className="lg:col-span-4 flex flex-col gap-6 pr-1">
        {/* Sticky/Right-Aligned CTA */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl text-center space-y-4 shadow-xl">
          <h4 className="text-2xl font-teko font-bold uppercase text-white leading-none">Feel it. Hear it. Be part of it.</h4>
          <div className="h-[1px] w-12 bg-[#dc2626] mx-auto"></div>
          <a
            href="https://www.motorsportreg.com/calendar/?q=Calgary+Motorcycle+Road+Racing&radius=300"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest block shadow-lg shadow-red-950/40"
          >
            Get Tickets Now
          </a>
        </div>

        {/* Know Before You Go */}
        <div className="bg-neutral-900/40 border border-white/5 p-6 rounded-2xl space-y-4">
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <Info size={18} className="text-[#dc2626]" /> RMM CIRCUIT | Know Before You Go
          </h4>
          <ul className="space-y-3 font-sans text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Just off Highway 2 and under an hour from downtown Calgary</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Parking is free</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Bring a hoodie, a jacket, or both—Alberta weather likes to keep things interesting. Closed-toe shoes are strongly recommended.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Pack your own food and drinks to be safe, as concessions and vendor availability can vary throughout the season.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderStartRacingContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R4440.jpg"
            alt="Start Racing Action Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">how to start</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            You’ve watched long enough. Now it’s your turn.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed mb-6">
            Racing isn’t reserved for someone else – it’s built for riders like you.
            With the Calgary Motorcycle Roadracing Association, the path from street rider to starting grid is clear, structured, and built around one thing above all:
            <br />
            <span className="text-[#dc2626] font-bold uppercase tracking-wide">Safety – through skill, community, and organized competition.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('race-school')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-2 group"
            >
              Start Your Racing Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('calendar')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-2 group"
            >
              View Upcoming Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* BENTO SECTION (4 Sequential Blocks) */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          {/* Block 1: HOW IT WORKS */}
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src="/images/_A7R4465.jpg"
                alt="How It Works Background"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent z-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">01</span>
                <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider">HOW IT WORKS</h4>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide leading-none mb-1">
                The Path To The Grid
              </p>
              <p className="text-white font-bold text-sm mb-2">
                You’re closer than you think.
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
                If you’ve got the bike and the gear, you’re only a few steps away from lining up on race day.
              </p>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 mb-4 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-2">Here’s how it works:</p>
                <ul className="space-y-1.5 text-xs text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Earn your race license through Race School</li>
                  <li>Become a CMRA member</li>
                  <li>Register and race</li>
                </ul>
              </div>

              <p className="text-xs font-sans text-neutral-300 italic mb-4">
                That’s it – a clear path forward to racing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-4 mt-auto relative z-10">
              <button
                onClick={() => navigateTo('how-it-works')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                See The Full Path <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo('bike-gear')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Check Bike & Gear Requirements <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 2: RACE SCHOOL & LICENSE */}
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src="/images/_A7R4620.jpg"
                alt="Race School Background"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent z-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">02</span>
                <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider">RACE SCHOOL & LICENSE</h4>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide leading-none mb-1">
                Earn Your Place
              </p>
              <p className="text-white font-bold text-sm mb-2">
                This is where it becomes real.
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
                Race School is your gateway – where riders become racers. Learn the fundamentals, build confidence, and prove you’re ready to compete.
              </p>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 mb-4 backdrop-blur-sm">
                <ul className="space-y-1.5 text-xs text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Classroom + on-track training</li>
                  <li>Structured, safety-first environment</li>
                  <li>Pathway to championship eligibility</li>
                </ul>
              </div>

              <p className="text-xs font-sans text-neutral-300 italic mb-4">
                Pass, and you’ll earn your CMRA Race License – your key to the grid.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-4 mt-auto relative z-10">
              <button
                onClick={() => navigateTo('race-school')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Register For Race School <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo('race-school')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Learn What To Expect <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 3: MEMBERSHIP & REGISTRATION */}
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src="/images/_A7R4700.jpg"
                alt="Membership & Registration Background"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent z-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">03</span>
                <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider">MEMBERSHIP & REGISTRATION</h4>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide leading-none mb-1">
                Commit To The Season
              </p>
              <p className="text-white font-bold text-sm mb-2">
                You’re not just signing up – you’re joining a grid.
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
                Membership makes it official. It connects you to the championship, the community, and every race on the calendar.
              </p>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 mb-4 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-2">Once licensed:</p>
                <ul className="space-y-1.5 text-xs text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Register for events</li>
                  <li>Secure your spot on the grid</li>
                  <li>Start earning points</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-4 mt-auto relative z-10">
              <button
                onClick={() => navigateTo('membership')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Become A Member <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo('register-races')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Register For A Race <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 4: COSTS & EXPECTATIONS */}
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src="/images/_A7R5396.jpg"
                alt="Costs & Expectations Background"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent z-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">04</span>
                <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider">COSTS & EXPECTATIONS</h4>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-lg uppercase tracking-wide leading-none mb-1">
                Know Before You Go
              </p>
              <p className="text-white font-bold text-sm mb-2">
                Real racing – without the barriers.
              </p>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
                The CMRA is built to keep racing accessible, without compromising the experience.
              </p>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 mb-4 backdrop-blur-sm">
                <ul className="space-y-1.5 text-xs text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Transparent pricing</li>
                  <li>More racing = more value</li>
                  <li>A full day (or weekend) of track time</li>
                </ul>
              </div>

              <p className="text-xs font-sans text-neutral-300 italic mb-1">
                And beyond the numbers?
              </p>
              <p className="text-xs font-sans text-neutral-400 mb-4">
                A community that pushes you to improve – safely, competitively, and together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-4 mt-auto relative z-10">
              <button
                onClick={() => navigateTo('costs')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Costs & Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* FINAL CTA (Bottom Frame) */}
        <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 mt-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">You’re closer than you think.</h4>
            <p className="text-neutral-400 text-xs mt-1">Lining up on the starting grid is within reach. Take action today.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
            <button
              onClick={() => navigateTo('race-school')}
              className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
            >
              Start With CMRA Race School <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-1.5 group text-left"
            >
              Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHowItWorksContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R5271.jpg"
            alt="Pre-grid lining up"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dc2626]/5 rounded-full blur-3xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2.5 py-1 rounded-md w-max mb-4 block">how it works</span>
          <h3 className="text-4xl md:text-6xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            From rider to racer – in three steps.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            No shortcuts. No confusion. This is the path to the starting line.
          </p>
        </div>
      </div>

      {/* THREE STEPS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* STEP 1: Get Licensed */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R4625.jpg"
              alt="Prepped bike under canopy"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-4 -right-2 text-8xl font-teko font-bold text-white/5 group-hover:text-red-500/5 transition-all select-none">01</div>

            <div>
              <span className="text-[10px] bg-red-600/15 text-[#dc2626] border border-red-500/20 font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4 block">Step 1</span>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-red-500/10 flex items-center justify-center text-white mb-4 shadow-md shadow-red-950/20">
                <GraduationCap size={24} />
              </div>

              <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider mb-2">Get Licensed</h4>

              <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                Earn your CMRA Race License by completing an approved race school.
              </p>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                The Calgary Motorcycle Roadracing Association makes this simple with its own, CMRA Race School.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <button
                onClick={() => navigateTo('race-school')}
                className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-3 px-4 rounded-xl transition-all tracking-wider shadow-md shadow-red-950/40 flex items-center justify-center gap-1.5 group/btn mb-4"
              >
                Go To Race School & Get Licensed <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('rules-safety', 'rulebooks')}
                className="text-[11px] text-neutral-400 hover:text-white font-sans transition-colors flex items-start gap-1.5 text-left leading-normal"
              >
                <FileText size={12} className="text-[#dc2626] shrink-0 mt-0.5" />
                <span>See the full list of accepted schools in the 2026 CMRA Competition Rulebook (p.52).</span>
              </button>
            </div>
          </div>
        </div>

        {/* STEP 2: Become a Member */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6248.jpg"
              alt="Paddock membership high five"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-4 -right-2 text-8xl font-teko font-bold text-white/5 group-hover:text-red-500/5 transition-all select-none">02</div>

            <div>
              <span className="text-[10px] bg-red-600/15 text-[#dc2626] border border-red-500/20 font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4 block">Step 2</span>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-red-500/10 flex items-center justify-center text-white mb-4 shadow-md shadow-red-950/20">
                <Users size={24} />
              </div>

              <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider mb-2">Become a Member</h4>

              <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                Purchase your annual CMRA Membership to compete in events and earn championship points.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <button
                onClick={() => navigateTo('membership')}
                className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-3 px-4 rounded-xl transition-all tracking-wider shadow-md shadow-red-950/40 flex items-center justify-center gap-1.5 group/btn mb-4"
              >
                View Membership Options <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('rules-safety', 'rulebooks')}
                className="text-[11px] text-neutral-400 hover:text-white font-sans transition-colors flex items-start gap-1.5 text-left leading-normal"
              >
                <FileText size={12} className="text-[#dc2626] shrink-0 mt-0.5" />
                <span>More details available in the Rulebook (p.51).</span>
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3: Register & Race */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6081.jpg"
              alt="Pre-grid line of riders"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-4 -right-2 text-8xl font-teko font-bold text-white/5 group-hover:text-red-500/5 transition-all select-none">03</div>

            <div>
              <span className="text-[10px] bg-red-600/15 text-[#dc2626] border border-red-500/20 font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-4 block">Step 3</span>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dc2626] to-red-500/10 flex items-center justify-center text-white mb-4 shadow-md shadow-red-950/20">
                <Flag size={24} />
              </div>

              <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider mb-2">Register & Race</h4>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-3">
                Once licensed and registered:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Choose your events</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Sign up through MotorsportReg</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Line up and race</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <button
                onClick={() => navigateTo('register-races')}
                className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-3 px-4 rounded-xl transition-all tracking-wider shadow-md shadow-red-950/40 flex items-center justify-center gap-1.5 group/btn mb-4"
              >
                Register For Events <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('rules-safety', 'rulebooks')}
                className="text-[11px] text-neutral-400 hover:text-white font-sans transition-colors flex items-start gap-1.5 text-left leading-normal"
              >
                <FileText size={12} className="text-[#dc2626] shrink-0 mt-0.5" />
                <span>Registration policies: Rulebook (p.53).</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Everything you need is here.</h4>
          <p className="text-neutral-400 text-xs mt-1">Now it’s up to you.</p>
        </div>
        <button
          onClick={() => navigateTo('race-school')}
          className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-2 group shrink-0"
        >
          Start With Race School <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const renderRaceSchoolContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Left Column (lg:col-span-8) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* HERO Banner */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6456.jpg"
              alt="Rider Briefing"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">race school & license</span>
            <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">
              Learn it. Earn it. Race it.
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm font-sans italic">
              This is where riders become racers.
            </p>
          </div>
        </div>

        {/* WHAT YOU’RE WORKING TOWARD */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <h4 className="text-2xl font-teko font-bold uppercase text-white mb-1">WHAT YOU’RE WORKING TOWARD</h4>
          <p className="text-neutral-300 text-xs uppercase font-bold tracking-wider mb-3">A CMRA Race License gives you:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'YOUR RACE NUMBER', desc: 'Your official CMRA race number' },
              { title: 'CHAMPIONSHIP ACCESS', desc: 'Eligibility for CMRA championship points' },
              { title: 'SANCTIONED RACING', desc: 'Access to sanctioned CMRA race events' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl text-center flex flex-col items-center">
                <div className="bg-[#dc2626]/10 p-2 rounded-lg text-[#dc2626] mb-3">
                  {idx === 0 && <Clock size={20} />}
                  {idx === 1 && <Trophy size={20} />}
                  {idx === 2 && <Flag size={20} />}
                </div>
                <span className="text-white font-teko text-lg uppercase font-bold block mb-1">{item.title}</span>
                <span className="text-[10px] text-neutral-400 font-sans block leading-normal">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOW TO GET IT */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <h4 className="text-2xl font-teko font-bold uppercase text-white mb-2">HOW TO GET IT</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option 1 */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[9px] px-2 py-0.5 rounded mb-3 inline-block">Option 1: Recommended</span>
                <h5 className="text-xl font-teko font-bold uppercase text-white mb-1">CMRA Race School</h5>
                <p className="text-[11px] text-neutral-400 font-sans mb-3 flex items-center gap-1.5"><MapPin size={12} className="text-[#dc2626]" /> Held at Rocky Mountain Motorsports Circuit</p>

                <div className="border-t border-b border-white/5 py-3 my-3">
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-2">2-Day Format:</span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans text-neutral-300">
                    <div className="bg-white/5 p-2 rounded"><strong className="text-white block font-teko uppercase text-sm leading-none mb-0.5">Day 1</strong> Classroom learning</div>
                    <div className="bg-white/5 p-2 rounded"><strong className="text-white block font-teko uppercase text-sm leading-none mb-0.5">Day 2</strong> On-track practicum</div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                  Train in controlled groups based on skill and bike class – designed to build confidence safely.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-white/5 pt-4 mt-auto">
                <button
                  onClick={() => navigateTo('rmm-circuit')}
                  className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
                >
                  See The Track <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://www.motorsportreg.com/events/2026-cmra-race-school-advanced-racer-training-rocky-mountain-motorsports-654468"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
                >
                  Register Via MotorsportReg <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <span className="bg-neutral-800 text-neutral-400 font-bold uppercase tracking-widest text-[9px] px-2 py-0.5 rounded mb-3 inline-block">Option 2</span>
                <h5 className="text-xl font-teko font-bold uppercase text-white mb-1">Approved External Schools</h5>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                  We accept certifications from accredited external motorcycle racing schools.
                </p>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-3">
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block">Recognized Schools Include:</span>
                  <div className="flex flex-wrap gap-2">
                    {['WERA', 'California Superbike School', 'STAR Motorcycle School'].map((sch) => (
                      <span key={sch} className="text-[10px] bg-black/60 text-white font-semibold font-sans px-2.5 py-1 rounded border border-white/5">{sch}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 mt-auto">
                <button
                  onClick={() => navigateTo('rules-safety', 'rulebooks')}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
                >
                  Full list: Rulebook (p.52) <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (lg:col-span-4) */}
      <div className="lg:col-span-4 flex flex-col gap-6 pr-1">
        {/* COSTS & DETAILS Card */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#F59E0B]"></div>
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <Timer size={18} className="text-[#F59E0B]" /> Costs & Details
          </h4>

          <div className="space-y-3 text-xs font-sans">
            <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block">CMRA Race School</span>
                <span className="text-white font-bold text-sm">2-Day Program</span>
              </div>
              <span className="text-[#F59E0B] font-teko text-2xl font-bold">$400 <span className="text-[10px] font-sans text-neutral-400 font-normal">(+ GST)</span></span>
            </div>

            <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block">CMRA Race License</span>
                <span className="text-white font-bold text-sm">Annual Eligibility</span>
              </div>
              <span className="text-[#F59E0B] font-teko text-2xl font-bold">$50 <span className="text-[10px] font-sans text-neutral-400 font-normal">tax in</span></span>
            </div>
          </div>

          <a
            href="https://www.motorsportreg.com/events/2026-cmra-race-school-advanced-racer-training-rocky-mountain-motorsports-654468"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white text-center py-3 rounded font-bold uppercase text-[10px] tracking-widest transition-all block"
          >
            👉 Register Early (Limited Space)
          </a>
        </div>

        {/* IMPORTANT NOTES CARD */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <AlertTriangle size={18} className="text-[#dc2626]" /> Important Notes
          </h4>

          <ul className="space-y-3 font-sans text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>You must pass an approved race school to obtain a license.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Non-sanctioned schools may require evaluation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Full refunds available if you do not pass.</span>
            </li>
          </ul>

          <div className="bg-black/20 p-3 rounded-xl border border-white/5 mt-2">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="text-[10px] text-neutral-400 hover:text-white transition-colors block leading-relaxed text-left text-xs font-sans"
            >
              Full CMRA Race License and CMRA Race School policies: <strong className="text-white border-b border-white/20">Rulebook (p.52-54) &rarr;</strong>
            </button>
          </div>
        </div>

        {/* PREP CHECKLIST CARD */}
        <div className="bg-neutral-900/40 border border-white/5 p-6 rounded-2xl space-y-3">
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <ShieldCheck size={18} className="text-green-500" /> Prep Checklist
          </h4>

          <div className="bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-3">
            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block">BEFORE SHOWING UP:</span>
            <ul className="space-y-2 text-xs text-neutral-300 font-sans">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Confirm bike + gear requirements
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Purchase membership
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Monitor event calendar for updates
              </li>
            </ul>
          </div>

          <div className="flex gap-2 pt-1.5">
            <button
              onClick={() => navigateTo('bike-gear')}
              className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] hover:text-white transition-colors border-b border-[#dc2626] hover:border-white"
            >
              View Requirements
            </button>
            <span className="text-neutral-600">|</span>
            <button
              onClick={() => navigateTo('calendar')}
              className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] hover:text-white transition-colors border-b border-[#dc2626] hover:border-white"
            >
              View Event Calendar
            </button>
          </div>
        </div>

        {/* Sticky CTA Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl text-center space-y-4 shadow-xl mt-auto">
          <h4 className="text-2xl font-teko font-bold uppercase text-white leading-none">This is your starting line.</h4>
          <div className="h-[1px] w-12 bg-[#dc2626] mx-auto"></div>
          <a
            href="https://www.motorsportreg.com/events/2026-cmra-race-school-advanced-racer-training-rocky-mountain-motorsports-654468"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest block shadow-lg shadow-red-950/40 text-center flex items-center justify-center gap-2 group"
          >
            Register For Race School <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );

  const renderRegisterRacesContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6432.jpg"
            alt="Racers Walking in Paddock"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Registration</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            This is where you commit.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">Registration is how you move from planning to racing.</p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              Secure your place on the grid through MotorsportReg.
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <h4 className="text-2xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-6 flex items-center gap-2">
          <ClipboardList size={22} className="text-[#dc2626]" /> How It Works
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prerequisites */}
          <div className="space-y-4">
            <h5 className="text-sm font-sans font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={16} /> Before registering, you must have:
            </h5>
            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>A valid race license</li>
              <li>An active CMRA membership</li>
            </ul>
          </div>

          {/* Registration Steps */}
          <div className="space-y-4">
            <h5 className="text-sm font-sans font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Zap size={16} className="text-[#dc2626]" /> Once ready:
            </h5>
            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-decimal marker:text-[#dc2626]">
              <li>Select your event(s)</li>
              <li>Choose your classes</li>
              <li>Complete registration online</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TIMELINES, DEADLINES & GRID POSITION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Deadlines & Refunds */}
        <div className="lg:col-span-6 bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Timer size={18} className="text-[#dc2626]" /> Important Deadlines
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626] mb-6">
              <li>Registration closes 24 hours before the event</li>
              <li>Late registrations incur a $25 fee</li>
            </ul>

            <div className="border-t border-white/5 pt-4">
              <h5 className="text-sm font-teko font-bold uppercase text-white mb-2 flex items-center gap-1.5">
                <Clock size={16} className="text-[#dc2626]" /> Refunds
              </h5>
              <p className="text-xs text-[#F59E0B] font-sans font-bold">
                Available until 8:30 AM on Race Day
              </p>
            </div>
          </div>
        </div>

        {/* Grid Position */}
        <div className="lg:col-span-6 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R5027.jpg"
              alt="Grid Group Photo"
              className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-transparent"></div>
          </div>

          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

          <div className="relative z-10">
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Flag size={18} className="text-[#dc2626]" /> Grid Position (First Race)
            </h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4 font-bold">
              For the first race, grid positions are influenced by the order in which registrations are received.
            </p>
            <p className="text-xs text-white font-sans font-bold leading-relaxed italic">
              Early registration doesn’t just secure your spot – it can shape your start.
            </p>
          </div>
        </div>

      </div>

      {/* FULL REGISTRATION DETAILS */}
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-lg font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
              <FileText size={18} className="text-[#dc2626]" /> Full Registration Details
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Registration policies, requirements, and procedures are governed by the official CMRA rulebook.
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              For complete details, refer to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-black/40 border border-white/5 p-3 rounded-lg flex items-center gap-3">
                <span className="bg-[#dc2626]/20 text-[#dc2626] font-mono font-bold text-xs px-2 py-1 rounded">Page 53</span>
                <span className="text-[11px] text-neutral-300 font-sans uppercase font-bold">Event Registration</span>
              </div>
              <div className="bg-black/40 border border-white/5 p-3 rounded-lg flex items-center gap-3">
                <span className="bg-[#dc2626]/20 text-[#dc2626] font-mono font-bold text-xs px-2 py-1 rounded">Page 54</span>
                <span className="text-[11px] text-neutral-300 font-sans uppercase font-bold">CMRA Race School & related policies</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end mt-4 lg:mt-0">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-2 group text-left"
            >
              👉 View the 2026 CMRA Competition Rulebook
            </button>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Lock in your spot before someone else does.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="https://www.motorsportreg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            👉 Register Via MotorsportReg
          </a>
        </div>
      </div>
    </div>
  );

  const renderClassesContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6753.jpg"
            alt="Racing Classes"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">class grids</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Where you line up matters.
          </h3>
          <p className="text-white font-sans text-xs md:text-sm leading-relaxed mb-4 font-bold">
            Not just for fairness – but for the kind of racing you want.
          </p>
          <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed mb-6 max-w-3xl">
            From 1000cc Superbikes to middleweight twins – whether you’re chasing outright speed, racing in senior categories, or lining up in women’s classes – there’s a place for you on the grid.
            <span className="text-white font-bold block mt-3">Bring your machine. Find your class. Take your shot.</span>
          </p>
        </div>
      </div>

      {/* OVERVIEW & HOW CLASSES WORK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Overview */}
        <div className="lg:col-span-5 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <div>
            <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
              <ClipboardList size={18} className="text-[#dc2626]" /> CMRA Grid Balance
            </h4>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              The CMRA structures its classes to balance three core aspects:
            </p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Machine capability</li>
              <li>Rider experience</li>
              <li>Competitive integrity</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-[10px] text-neutral-400 leading-normal font-sans italic">
              "This creates grids where battles are real – and earned."
            </p>
          </div>
        </div>

        {/* How Classes Work */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Wrench size={18} className="text-[#dc2626]" /> Class Classifications & Principles
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider block mb-1">Built Around</span>
                <ul className="space-y-1 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Engine size and configuration</li>
                  <li>Modifications and eligibility</li>
                  <li>Rider classification (Novice / Expert)</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider block mb-1">Key Principles</span>
                <ul className="space-y-1 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#F59E0B]">
                  <li>Riders progress as skill improves</li>
                  <li>Machines compete within defined limits</li>
                  <li>Safety and parity come first</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* NOVICE AND BEYOND & SPECIALTY CLASSES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Novice and Beyond */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl">
          <h4 className="text-lg font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-[#dc2626]" /> Novice And Beyond
          </h4>
          <div className="space-y-3 font-sans text-xs text-neutral-300">
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="text-[#dc2626] font-bold block mb-0.5">Novice Grid</span>
              <p className="text-[11px] text-neutral-400">Learn racecraft, build confidence, and develop your pace safely.</p>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="text-[#F59E0B] font-bold block mb-0.5">Amateur and Expert Grids</span>
              <p className="text-[11px] text-neutral-400">Refined competition, tighter racing margins, and higher championship stakes.</p>
            </div>
            <p className="text-[11px] text-neutral-400 italic pl-1">
              * Progression is earned through performance and consistency.
            </p>
          </div>
        </div>

        {/* Specialty Classes */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R7506.jpg"
              alt="Specialty Classes Supermoto"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-65 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h4 className="text-lg font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-[#F59E0B]" /> Specialty Classes
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4">
              Certain classes are designed specifically to enhance other racing vectors:
            </p>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#F59E0B]">
              <li>Encourage accessibility for street riders and newcomers</li>
              <li>Support specific bike types and configurations</li>
              <li>Maintain strict competitive balance</li>
            </ul>
          </div>
        </div>

      </div>

      {/* IMPORTANT SECTION & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Important Rulebook Link */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#dc2626]" /> OFFICIAL SPECIFICATIONS
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4 leading-relaxed">
              This page represents a simplified overview. Technical specifications, bike legality, class groupings, and fuel limitations are governed strictly by Chapter 5 of the CMRA rulebook.
            </p>

            <div className="bg-black/40 border border-white/5 p-4 rounded-xl border-l-4 border-l-[#dc2626] flex items-start gap-3">
              <div className="text-[#dc2626] mt-0.5"><FileText size={18} /></div>
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-0.5">Reference Document</span>
                <span className="text-xs text-white font-bold block mb-1">2026 CMRA Competition Rulebook (Chapter 5)</span>
                <p className="text-[10px] text-neutral-400 leading-snug">Includes full class structures, eligibility rules, and technical displacement tables.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left leading-tight"
            >
              Access Rulebook Chapter 5 <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CTA Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-1">
              Find your class.
            </h4>
            <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-3">
              Take your position.
            </h4>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-6">
              Take your first step toward racing. Train with advanced coaches, prep your machine, and secure your place on the starting grid.
            </p>
          </div>

          <button
            onClick={() => navigateTo('start-racing')}
            className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center justify-center gap-2 group text-left mt-auto"
          >
            Start Racing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );

  const renderWCCSContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R7271.jpg"
            alt="WCCS Pack Racing"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">regional competition</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Every race counts. Every point matters.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            CMRA riders compete within the Western Canadian Championship Series (WCCS) – a regional championship that brings together top riders across Western Canada.
          </p>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
        <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider mb-2">WCCS Overview</h4>
        <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed">
          While the CMRA operates independently, its events contribute to the broader championship landscape, establishing a unified stage for regional motorsport supremacy.
        </p>
      </div>

      {/* THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Card 1: HOW IT WORKS */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Wrench size={18} className="text-[#dc2626]" /> HOW IT WORKS
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">STRUCTURE</span>
            </div>

            <p className="text-[11px] text-neutral-400 font-sans mb-4 italic">
              Points are tracked meticulously over the entire season calendar.
            </p>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Points are awarded based on race finishes</li>
              <li>Results accumulate across the season</li>
              <li>Consistency wins championships</li>
            </ul>
          </div>
        </div>

        {/* Card 2: WHAT YOU’RE RACING FOR */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Trophy size={18} className="text-[#F59E0B]" /> WHAT YOU'RE RACING FOR
              </h4>
              <span className="text-[10px] bg-[#dc2626] text-white font-bold px-2 py-0.5 rounded">GRID GLORY</span>
            </div>

            <p className="text-[11px] text-neutral-400 font-sans mb-4 italic">
              Compete against the very best on the prairies for ultimate glory.
            </p>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#F59E0B]">
              <li>Class championships</li>
              <li>Regional recognition</li>
              <li>Season-long performance standings</li>
            </ul>
          </div>
        </div>

        {/* Card 3: THE REALITY */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Users size={18} className="text-[#dc2626]" /> THE REALITY
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">RACE MINDSET</span>
            </div>

            <p className="text-white font-bold text-xs mb-3 leading-snug">
              It’s not just about winning one race.
            </p>

            <p className="text-[11px] text-neutral-400 font-sans mb-4 italic">
              A championship campaign is a test of attrition and dedication. It's about:
            </p>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Showing up</li>
              <li>Finishing strong</li>
              <li>Building momentum</li>
            </ul>
          </div>
        </div>

      </div>

      {/* IMPORTANT SECTION & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Important Details */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#dc2626]" /> SCORING & RULES
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4 leading-relaxed">
              WCCS operates under strict scoring metrics to maintain competitiveness and safety across all regional events. Full scoring and structure details are permanently logged in our rulebook.
            </p>

            <div className="bg-black/40 border border-white/5 p-4 rounded-xl border-l-4 border-l-[#dc2626] flex items-start gap-3">
              <div className="text-[#dc2626] mt-0.5"><FileText size={18} /></div>
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-0.5">Reference Document</span>
                <span className="text-xs text-white font-bold block mb-1">2026 CMRA Competition Rulebook (Appendix E)</span>
                <p className="text-[10px] text-neutral-400 leading-snug">Includes scoring structures, tier levels, point tables, and championship validation processes.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left leading-tight"
            >
              Access Rulebook Appendix E <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CTA Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-1">
              Race for more than
            </h4>
            <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-3">
              the moment.
            </h4>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-6">
              Step onto the starting grid, lock in your points campaign, and test your skills against the finest riders in Western Canada.
            </p>
          </div>

          <button
            onClick={() => navigateTo('calendar')}
            className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center justify-center gap-2 group text-left mt-auto"
          >
            View Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );

  const renderBikeGearContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6483.jpg"
            alt="Yamaha R6 Preparation"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">pre-race preparation</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Preparation is performance.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            Before the green flag, before the grid – this is where racing starts.
          </p>
        </div>
      </div>

      {/* THE FOUNDATION */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
        <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider mb-2">The Foundation</h4>
        <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed">
          Whether you’re riding on the street or racing on track, your machine matters.
          For the CMRA, it’s not just about speed – <span className="text-white font-bold">it’s about safety, control, and readiness.</span>
        </p>
      </div>

      {/* THREE-COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Box 1: FOR CMRA RACE SCHOOL */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Wrench size={18} className="text-[#dc2626]" /> CMRA RACE SCHOOL
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">SCHOOL</span>
            </div>

            <p className="text-white font-bold text-xs mb-3 leading-snug">
              You don’t need a full race bike – just a properly prepared machine.
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Bike Requirements</span>
                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Sportbike recommended (not required)</li>
                  <li>Must be roadworthy / tech-ready</li>
                  <li>Kickstands allowed</li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Tape / Remove</span>
                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Mirrors, signals, lights, reflectors</li>
                  <li>Functional engine kill switch required</li>
                  <li>Tires must be in good condition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: FOR RACING IN CMRA EVENTS */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Trophy size={18} className="text-[#F59E0B]" /> CMRA EVENTS RACING
              </h4>
              <span className="text-[10px] bg-[#dc2626] text-white font-bold px-2 py-0.5 rounded">RACING</span>
            </div>

            <p className="text-white font-bold text-xs mb-3 leading-snug">
              When you move to competition, requirements increase.
            </p>

            <div>
              <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider block mb-1">Additional Requirements</span>
              <ul className="space-y-2 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#F59E0B]">
                <li>Removal of kickstands and street bodywork</li>
                <li>Safety wiring of critical components</li>
                <li>Race-ready configuration</li>
              </ul>
            </div>

            <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-4">
              <p className="text-[10px] text-neutral-400 leading-normal font-sans italic">
                Safety wiring is critical to prevent parts loosening on track. It is mandatory for racing grids.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left leading-tight"
            >
              See Rulebook Chapter 5 & Appendix B (p.56) <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Box 3: RIDER GEAR */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <Shield size={18} className="text-[#dc2626]" /> RIDER GEAR
              </h4>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 font-bold px-2 py-0.5 rounded">SAFETY</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">CMRA Race School</span>
                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Full-face helmet (DOT + Snell/ECE equivalent)</li>
                  <li>Leather suit (1 or 2-piece)</li>
                  <li>Gloves, boots, back protector</li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider block mb-1">CMRA Racing</span>
                <ul className="space-y-1.5 text-[11px] text-neutral-300 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Higher standards apply</li>
                  <li>One-piece suits strongly recommended</li>
                  <li>Enhanced protection required</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 mt-6">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
            >
              Rider Gear: Chapter 4 of Rulebook <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* TRACK REQUIREMENTS & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Track Requirements */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Radio size={18} className="text-[#dc2626]" /> TRACK REQUIREMENTS
            </h4>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              At the world-class <span className="text-white font-medium">Rocky Mountain Motorsports Circuit (RMM)</span>, strict track-wide controls are in effect:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider block mb-1">Sound Limit</span>
                <p className="text-xs font-bold text-white font-mono mb-1">95 dB limit</p>
                <p className="text-[10px] text-neutral-400 leading-snug">Strictly enforced at all times. Standard or baffled exhausts recommended.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider block mb-1">Timing / Tracking</span>
                <p className="text-xs font-bold text-white font-mono mb-1">GPS Transponder</p>
                <p className="text-[10px] text-neutral-400 leading-snug">Required for tracking lap times and safety. Provided to you at entry.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6465.jpg"
              alt="Prepped race bike"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
              <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-1">
                Get your machine ready.
              </h4>
              <h4 className="text-2xl font-teko font-bold uppercase italic text-white leading-none mb-3">
                Get yourself ready.
              </h4>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mb-6">
                Take the first step towards racing. Build confidence, refine your skills, and earn your official CMRA Race License.
              </p>
            </div>

            <button
              onClick={() => navigateTo('race-school')}
              className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center justify-center gap-2 group text-left mt-auto"
            >
              Start with Race School <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );

  const renderResultsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R7513.jpg"
            alt="Timing & Results Knee Drag"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">timing & results</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Proof is in the finish.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            Where It All Lands – capturing margins, battles, and breakthroughs on the grid.
          </p>
        </div>
      </div>

      {/* SUPPORTING COPY & DYNAMIC GRAPHIC PLACEHOLDER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Supporting Copy */}
        <div className="lg:col-span-5 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <div className="space-y-4">
            <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
              <Timer size={18} className="text-[#dc2626]" /> Beyond The Numbers
            </h4>
            <p className="text-white font-bold text-xs leading-snug">
              Results aren’t just numbers.
            </p>
            <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed italic">
              "They’re late braking moves, photo finishes, and personal bests."
            </p>
            <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed">
              Every position earned. Every second fought for.
            </p>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <span className="text-[9px] font-bold text-[#dc2626] uppercase tracking-widest block mb-1">Grid Standard</span>
            <span className="text-[10px] text-neutral-400">All session times are validated by official transponders.</span>
          </div>
        </div>

        {/* Graphic Placeholder (Stylized CSS Graph) */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-[#dc2626]" /> Season Leaderboard Visualizer
            </h4>

            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              Full race results, lap times, and standings are updated after each event.
            </p>

            {/* Visual CSS Chart Placeholder */}
            <div className="bg-black/40 border border-white/5 p-4 rounded-xl space-y-3">
              {[
                { r: '1', name: 'Rider #18 (Expert)', w: 'w-[90%]', pts: '25 pts' },
                { r: '2', name: 'Rider #42 (Expert)', w: 'w-[75%]', pts: '20 pts' },
                { r: '3', name: 'Rider #89 (Novice)', w: 'w-[60%]', pts: '16 pts' }
              ].map((row, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                    <span>Pos {row.r}: {row.name}</span>
                    <span className="font-mono text-white">{row.pts}</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] rounded-full ${row.w}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-500/10 p-3 rounded-xl mt-4 flex items-start gap-2.5">
            <div className="text-[#dc2626] shrink-0 mt-0.5"><Info size={14} /></div>
            <p className="text-[10px] text-neutral-400 font-sans leading-snug">
              <span className="text-white font-bold block mb-0.5">Note:</span>
              Full race results, lap times, and standings are updated after each event.
            </p>
          </div>
        </div>

      </div>

      {/* TIMING ARCHIVES (Valued timing details) */}
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl">
        <h4 className="text-lg font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4">Timing Archives</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MOCK_ROUNDS.filter(r => r.status === 'COMPLETED').map(round => (
            <div key={round.id} className="flex justify-between items-center bg-black/40 border border-white/5 p-3 rounded-xl">
              <div className="flex flex-col">
                <span className="font-teko text-lg text-white font-bold uppercase leading-none">{round.name}</span>
                <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-1">Speedhive Timing</span>
              </div>
              <span className="text-[9px] bg-neutral-800 text-neutral-300 font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider cursor-pointer hover:bg-[#dc2626] hover:text-white transition-colors">
                View Laptimes ↗
              </span>
            </div>
          ))}
          {MOCK_ROUNDS.filter(r => r.status === 'COMPLETED').length === 0 && (
            <div className="sm:col-span-2 text-center py-6 text-neutral-500 text-xs font-sans italic">
              No results have been archived for the current season. Check back after Round 1.
            </div>
          )}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">See how the grid stacks up.</h4>
          <p className="text-neutral-400 text-xs mt-1">Review dates, round structures, and upcoming championship sessions.</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('calendar')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            View Upcoming Races <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderBecomeMemberContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6461.jpg"
            alt="Paddock life Revolver Racing"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dc2626]/5 rounded-full blur-3xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2.5 py-1 rounded-md w-max mb-4 block">membership & registration</span>
          <h3 className="text-4xl md:text-6xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Make it official. Take your place on the grid.
          </h3>
        </div>
      </div>

      {/* TWO-COLUMN CONTENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* MEMBERSHIP COLUMN */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-[#dc2626]">
                <Trophy size={20} />
              </div>
              <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider">CMRA Membership</h4>
            </div>

            <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
              Your CMRA Membership lets you race in the CMRA for Championship points – and connects you with the racing community. Members get:
            </p>

            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-1.5 shrink-0"></span>
                <span>Priority registration for CMRA schools</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-1.5 shrink-0"></span>
                <span>First updates on upcoming events</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-1.5 shrink-0"></span>
                <span>Voting privileges</span>
              </li>
            </ul>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
            <a
              href="https://www.motorsportreg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-3.5 px-4 rounded-xl transition-all tracking-wider shadow-md shadow-red-950/40 flex items-center justify-center gap-1.5 group/btn text-center"
            >
              Become A Member Via MotorsportReg <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => navigateTo('advanced-training')}
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase py-3.5 px-4 rounded-xl transition-all tracking-wider flex items-center justify-center gap-1.5 group/btn text-center"
            >
              Already Fast? Get Advanced Training <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* REGISTRATION & REFUNDS COLUMN */}
        <div className="flex flex-col gap-6">

          {/* EVENT REGISTRATION CARD */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/10 transition-all duration-300 relative group overflow-hidden flex-1">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-[#dc2626]">
                  <ClipboardList size={20} />
                </div>
                <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider">Registering for Events</h4>
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-3">
                Once licensed:
              </p>

              <ul className="space-y-2.5 mb-6">
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Register online through MotorsportReg</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Secure your grid position</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span>Prepare for race day</span>
                </li>
              </ul>
            </div>

            {/* IMPORTANT BOX */}
            <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl flex gap-3 items-start mt-auto">
              <AlertTriangle size={18} className="text-[#dc2626] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white uppercase block mb-1">Important:</span>
                <p className="text-[11px] text-neutral-300 font-sans leading-normal">
                  Registration closes 24 hours before the event. Late registrations are subject to a <span className="text-[#dc2626] font-bold">$25 late fee</span>.
                </p>
              </div>
            </div>
          </div>

          {/* REFUNDS CARD */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-red-500/10 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-[#dc2626] shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider mb-1">Refund Policy</h4>
                <p className="text-xs text-neutral-400 font-sans leading-normal">
                  Refunds are available until <span className="text-white font-bold">8:30 AM on Race Day</span>.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Pick your race. Claim your spot.</h4>
        </div>
        <button
          onClick={() => navigateTo('register-races')}
          className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-2 group shrink-0"
        >
          View Events & Register <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const renderBecomeMemberDetailsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6378.jpg"
            alt="Become Member Details Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Become A Member</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Join the riders who line up.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">Becoming a member of the Calgary Motorcycle Roadracing Association is your first official step into competition.</p>
            <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed mb-4">
              It connects you to:
            </p>
            <ul className="space-y-2 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>The full race calendar</li>
              <li>Championship standings</li>
              <li>A community built around skill, safety, and progression</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WHAT MEMBERSHIP UNLOCKS & ANNUAL MEMBERSHIP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* WHAT MEMBERSHIP UNLOCKS */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6386.jpg"
              alt="Membership Unlocks Backdrop"
              className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
          </div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

          <div className="relative z-10">
            <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
              <Trophy size={18} className="text-[#dc2626]" /> What Membership Unlocks
            </h4>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626] font-bold">
              <li>Eligibility to register for CMRA race events</li>
              <li>Ability to earn championship points</li>
              <li>Access to official race communications and updates</li>
              <li>Integration into a structured, safety-first racing environment</li>
            </ul>
          </div>
        </div>

        {/* ANNUAL MEMBERSHIP */}
        <div className="lg:col-span-5 bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-[#dc2626]" /> Annual Membership
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4">
              CMRA memberships are valid for the full racing season.
            </p>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <p className="text-xs text-[#F59E0B] leading-normal font-sans italic font-bold">
                One commitment – an entire season of opportunity.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* HOW TO BECOME A MEMBER & FULL DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* HOW TO BECOME A MEMBER */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <h4 className="text-xl font-teko font-bold text-white uppercase mb-2">How To Become A Member</h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6">
              Memberships are purchased through MotorsportReg.
            </p>
          </div>
          <div className="border-t border-white/5 pt-4 mt-auto">
            <a
              href="https://www.motorsportreg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center block"
            >
              👉 Purchase Your Membership
            </a>
          </div>
        </div>

        {/* FULL DETAILS */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

          <div>
            <h4 className="text-xl font-teko font-bold text-white uppercase mb-2">Full Details</h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
              Membership policies, requirements, and benefits are defined in the official rulebook.
            </p>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6 font-bold">
              Refer to Page 51 of the 2026 CMRA Competition Rulebook for complete membership details.
            </p>
          </div>
          <div className="border-t border-white/5 pt-4 mt-auto">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest text-center"
            >
              👉 View The 2026 CMRA Competition Rulebook
            </button>
          </div>
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Make it official. Take your place.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="https://www.motorsportreg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 Become A Member <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );

  const renderCostsContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Left Column (lg:col-span-8) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* HERO Banner */}
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6232.jpg"
              alt="Paddock expectations spec"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">costs & expectations</span>
            <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">
              Real people. Pure racing. No surprises.
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm font-sans">
              The more you race, the more you save.
            </p>
          </div>
        </div>

        {/* COST BREAKDOWN */}
        <div className="bg-neutral-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <h4 className="text-2xl font-teko font-bold uppercase text-white mb-2">COST BREAKDOWN</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Practice Card */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-1">QUALIFYING</span>
                <h5 className="text-xl font-teko font-bold uppercase text-white mb-3">PRACTICE DAY</h5>
                <p className="text-neutral-400 text-xs font-sans mb-4">
                  Practice sessions to determine starting grid positions.
                </p>
              </div>
              <span className="text-[#F59E0B] font-teko text-3xl font-bold mt-auto border-t border-white/5 pt-3">$310</span>
            </div>

            {/* Amateur & Pro Card */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex flex-col justify-between md:col-span-2">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-1">Grid Entries</span>
                <h5 className="text-xl font-teko font-bold uppercase text-white mb-3">AMATEUR & PRO CLASS RACES</h5>

                <div className="grid grid-cols-2 gap-3 text-xs font-sans text-neutral-300">
                  <div className="bg-white/5 p-2.5 rounded flex justify-between items-center">
                    <span>First Race:</span>
                    <strong className="text-white">$160</strong>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded flex justify-between items-center">
                    <span>Second Race:</span>
                    <strong className="text-white">$110</strong>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded flex justify-between items-center">
                    <span>Third Race:</span>
                    <strong className="text-white">$60</strong>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded flex justify-between items-center border border-[#dc2626]/20">
                    <span className="text-[#dc2626] font-bold">Fourth Race+:</span>
                    <strong className="text-green-400 uppercase font-bold">FREE</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Novice Card */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-1">Novice Entries</span>
                <h5 className="text-lg font-teko font-bold uppercase text-white leading-none">NOVICE CLASS RACES</h5>
                <p className="text-[11px] text-neutral-400 font-sans mt-1">Designed for aspiring road racers.</p>
              </div>
              <span className="text-[#F59E0B] font-teko text-2xl font-bold">$75 <span className="text-[10px] font-sans text-neutral-400 font-normal">/ race</span></span>
            </div>

            {/* Endurance Card */}
            <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-1">Team Competition</span>
                <h5 className="text-lg font-teko font-bold uppercase text-white leading-none">ENDURANCE</h5>
                <p className="text-[11px] text-neutral-400 font-sans mt-1">Multi-hour team endurance rounds.</p>
              </div>
              <span className="text-neutral-500 font-teko text-2xl font-bold uppercase">TBD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (lg:col-span-4) */}
      <div className="lg:col-span-4 flex flex-col gap-6 pr-1">
        {/* WHAT YOU’RE REALLY GETTING */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <ShieldCheck size={18} className="text-[#dc2626]" /> What You’re Really Getting
          </h4>

          <p className="text-xs text-neutral-400 font-sans italic font-medium">This isn’t just track time. It’s:</p>

          <ul className="space-y-3 font-sans text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>A structured, safety-first environment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Riders progressing together</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dc2626] font-bold">•</span>
              <span>Real competition, not chaos</span>
            </li>
          </ul>

          <div className="bg-black/20 p-3 rounded-xl border border-white/5 text-neutral-400 text-xs italic font-sans leading-relaxed">
            "You’ll be surrounded by people who want you to improve—and finish the day faster than you started."
          </div>
        </div>

        {/* THE CMRA DIFFERENCE */}
        <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#F59E0B]"></div>
          <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
            <Trophy size={18} className="text-[#F59E0B]" /> The CMRA Difference
          </h4>

          <p className="text-xs text-neutral-400 font-sans italic font-medium leading-normal">
            The Calgary Motorcycle Roadracing Association doesn’t just organize racing. It organizes:
          </p>

          <ul className="space-y-3 font-sans text-xs text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">•</span>
              <span>Safety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">•</span>
              <span>Skill development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F59E0B] font-bold">•</span>
              <span>Fair, competitive racing</span>
            </li>
          </ul>

          <div className="bg-black/20 p-3 rounded-xl border border-white/5 text-neutral-400 text-xs italic font-sans leading-relaxed">
            "Because the goal isn’t just to race. It’s to race well – and come back stronger every time."
          </div>
        </div>

        {/* Sticky CTA Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl text-center space-y-4 shadow-xl mt-auto">
          <h4 className="text-2xl font-teko font-bold uppercase text-white leading-none">You don’t need permission. Just a starting point.</h4>
          <div className="h-[1px] w-12 bg-[#dc2626] mx-auto"></div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo('race-school')}
              className="w-full bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest block shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 group text-left"
            >
              Start With Race School <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest block flex items-center justify-center gap-2 group text-left"
            >
              Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEventsMainContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
        <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">live racing events</span>
        <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-2">
          This is where it happens.
        </h3>
        <p className="text-[#F59E0B] font-teko font-bold text-lg md:text-xl uppercase tracking-wide italic mb-4 leading-none">
          Not highlights. Not replays. Right here. Right now.
        </p>
        <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
          With the Calgary Motorcycle Roadracing Association, every race weekend is a chance to line up, push limits in a controlled environment – and find out what you’re made of.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigateTo('calendar')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-2 group"
          >
            View Event Calendar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigateTo('register-races')}
            className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-2 group"
          >
            Register Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* BENTO GRID (4 Blocks) */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Block 1: EVENT CALENDAR */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">01</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">EVENT CALENDAR</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Calendar size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                “Pick Your Moment”
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                The schedule is building.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-normal font-sans">
                Confirmed dates are live – with possibly more to come. Stay ready to move when new events drop.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('calendar')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Calendar <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 2: UPCOMING EVENTS */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">02</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">UPCOMING EVENTS</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Timer size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                “Next Up”
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                The next race is closer than you think.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-normal font-sans">
                See what’s coming up, lock in your spot, and start preparing now.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('upcoming-events')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                See Upcoming Events <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 3: EVENT DETAILS */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">03</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">EVENT DETAILS</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Info size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                “Know Before You Roll In”
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                Roadracing has its own pace.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-normal font-sans">
                Know what to expect before you arrive so you can focus on what matters: riding.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('event-details')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Event Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 4: REGISTRATION */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">04</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">REGISTRATION</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Ticket size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                “Claim Your Spot”
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                The grid fills fast.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-normal font-sans">
                Register early, secure your place, and be ready when the lights go out.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('register-races')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Go to Registration <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* OPTIONAL MICROCOPY (HIGH-IMPACT) TICKER */}
      <div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'CALENDAR PROGRESS', t: '“The calendar is live. The grid is forming.”' },
            { label: 'TRACK RESET', t: '“Every race weekend is a reset – and another chance.”' },
            { label: 'PREPARATION CYCLE', t: '“Preparation starts long before race day.”' },
            { label: 'EARLY ADVANTAGE', t: '“Take the holeshot with early registration.”' }
          ].map((hi, i) => (
            <div key={i} className="bg-black/30 p-3 rounded-lg border border-white/5 flex flex-col justify-between">
              <span className="text-[8px] font-bold text-[#dc2626] uppercase tracking-[0.2em] block mb-1">{hi.label}</span>
              <p className="text-[11px] text-neutral-300 font-sans italic leading-snug">{hi.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA (Bottom Frame) */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">The only thing missing is you.</h4>
          <p className="text-neutral-400 text-xs mt-1">Review verified track layouts, secure your plate, and join Western Canada\'s roadracing grid.</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('calendar')}
            className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-1.5 group text-left"
          >
            Find Your Race <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
          </button>
          <button
            onClick={() => navigateTo('register-races')}
            className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            Register Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderRacingMainContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6520.jpg"
            alt="Championship Racing Corners"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">championship racing</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            You don’t watch this. You feel it.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            There’s a moment – right before the lights, right before the throttle – where everything sharpens.
            <span className="text-white font-bold block mt-1">This is that moment.</span>
            With the Calgary Motorcycle Roadracing Association, racing isn’t something you follow. It’s something you step into.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('calendar')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-2 group"
            >
              View Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('start-racing')}
              className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-2 group"
            >
              Start Racing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* BENTO SECTION (6 Blocks) */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

          {/* Block 1: CLASSES & CATEGORIES */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">01</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">CLASSES & CATEGORIES</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><ClipboardList size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Find Your Line
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                Every rider. Every machine. A class built for both.
              </p>
              <p className="text-[11px] text-neutral-400 mb-3 leading-normal font-sans">
                From novice grids to expert-level competition, CMRA classes are structured to keep racing:
              </p>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5 mb-3">
                <ul className="space-y-1 text-[11px] text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Competitive</li>
                  <li>Fair</li>
                  <li>Built around skill progression</li>
                </ul>
              </div>

              <p className="text-[11px] font-sans text-neutral-300 italic mb-4">
                Whether you’re learning racecraft or chasing podiums, there’s a place for you on the grid.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('classes')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Explore Classes & Categories <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateTo('rules-safety', 'rulebooks')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Full Rulebook (Chapter 5) <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 2: WESTERN CANADIAN CHAMPIONSHIP SERIES (WCCS) */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">02</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">WESTERN CANADIAN CHAMPIONSHIP</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Trophy size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Race For More
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                This is bigger than a single race.
              </p>
              <p className="text-[11px] text-neutral-400 mb-3 leading-normal font-sans">
                CMRA riders compete within the Western Canadian Championship Series – where every result, every finish, every overtake counts.
              </p>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5 mb-4">
                <ul className="space-y-1 text-[11px] text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Season-long points</li>
                  <li>Regional competition</li>
                  <li>Championship titles on the line</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('wccs')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                How the Championship Works <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 3: BIKE & GEAR REQUIREMENTS */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">03</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">BIKE & GEAR</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Wrench size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Built For The Track
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                Speed is nothing without control – and control starts with preparation.
              </p>
              <p className="text-[11px] text-neutral-400 mb-3 leading-normal font-sans">
                From CMRA Race School to full competition, your machine and gear evolve with you.
              </p>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5 mb-4">
                <ul className="space-y-1 text-[11px] text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Clear standards</li>
                  <li>Safety-first requirements</li>
                  <li>Built to protect riders, teams, and the track</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('bike-gear')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Check Bike & Gear Requirements <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 4: RESULTS */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">04</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">RACE RESULTS</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Timer size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Where It All Lands
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                Every lap leads here.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-relaxed font-sans">
                Results capture more than finishing positions – they tell the story of the race.
                <br /><br />
                Margins. Battles. Breakthroughs.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('results')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Latest Results <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 5: RACERS & NUMBERS */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">05</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">RACERS & NUMBERS</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><Users size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Know The Grid
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                Every number tells a story.
              </p>
              <p className="text-[11px] text-neutral-400 mb-4 leading-relaxed font-sans">
                Returning veterans. Rising novices. New challengers.
                <br /><br />
                This is the grid you’re joining.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('race-numbers')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                View Racers & Numbers <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Block 6: ADVANCED RIDER TRAINING (ART) */}
          <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#dc2626] text-white font-mono font-bold text-xs px-2 py-0.5 rounded">06</span>
                  <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider">ADVANCED TRAINING (ART)</h4>
                </div>
                <div className="text-[#dc2626] opacity-60 group-hover:opacity-100 transition-opacity"><GraduationCap size={18} /></div>
              </div>
              <p className="text-[#F59E0B] font-teko font-bold text-base uppercase tracking-wide leading-none mb-1">
                Level Up
              </p>
              <p className="text-white font-bold text-xs mb-2 leading-snug">
                You’ve got the basics. Now sharpen the edge.
              </p>
              <p className="text-[11px] text-neutral-400 mb-3 leading-normal font-sans">
                Advanced Rider Training is built for racers who want more:
              </p>

              <div className="bg-black/30 p-3 rounded-xl border border-white/5 mb-3">
                <ul className="space-y-1 text-[11px] text-neutral-400 font-sans list-disc pl-4 marker:text-[#dc2626]">
                  <li>Passing drills</li>
                  <li>Racecraft refinement</li>
                  <li>Small-group coaching (3:1 ratio)</li>
                </ul>
              </div>

              <p className="text-[11px] font-sans text-neutral-300 italic mb-4">
                Learn from some of the best in Western Canada – and take seconds off your lap time.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-auto">
              <button
                onClick={() => navigateTo('race-school')}
                className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn text-left"
              >
                Push harder with ART <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA (Bottom Frame) */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 mt-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">You already know what this feels like.</h4>
          <p className="text-neutral-400 text-xs mt-1">Take the grid. Test your limits. Connect with Western Canada's speed legacy.</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('classes')}
            className="bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest flex items-center gap-1.5 group text-left"
          >
            Find Your Class <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
          </button>
          <button
            onClick={() => navigateTo('register-races')}
            className="bg-[#dc2626] hover:bg-red-500 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            Register for Your First Race <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderFormsDocumentsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6428.jpg"
            alt="Racers Leaning in Curve Side-by-Side"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Forms & Documents</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Everything you need – right here.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">Racing runs on precision – and that starts before you ever hit the track.</p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              This is your hub for all official CMRA documents, including rules, requirements, and forms to keep you compliant, prepared, and race-ready.
            </p>
          </div>
        </div>
      </div>

      {/* A NOTE FOR NEW RIDERS */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2">
              <Info size={20} className="text-[#dc2626]" /> A Note For New Riders
            </h4>
            <p className="text-xs text-neutral-300 font-sans font-bold">
              If this feels like a lot – you’re not wrong. There are rules. Processes. Requirements. And at first, it can feel overwhelming.
            </p>
            <p className="text-xs text-neutral-400 font-sans">
              But here’s what matters: You don’t need to figure it all out alone. Every racer you see on the grid started right here – learning the system, asking questions, and getting ready step by step. The Calgary Motorcycle Roadracing Association is here to help.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-3 rounded-lg transition-all tracking-wider flex items-center justify-center gap-1.5"
            >
              👉 Contact The CMRA
            </button>
          </div>
        </div>
      </div>

      {/* RULE DOCUMENTS */}
      <div className="space-y-4">
        <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
          <FileText size={22} className="text-[#dc2626]" /> Rule Documents
        </h4>
        <p className="text-xs text-neutral-400 font-sans">
          These are the official documents that govern how CMRA racing works – on and off the track.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rulebook */}
          <div className="bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
            <div>
              <span className="text-[#dc2626] font-mono font-bold text-xs uppercase block mb-1">Official Rules</span>
              <h5 className="text-xl font-teko font-bold text-white uppercase mb-2">2026 CMRA Competition Rulebook</h5>
              <p className="text-xs text-neutral-400 font-sans mb-4">
                The complete guide to racing with CMRA. Covers:
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626] mb-6">
                <li>Rider requirements and classifications</li>
                <li>Race categories and machine standards</li>
                <li>Race procedures (flags, conduct, etc.)</li>
                <li>CMRA Race License, Membership, and Race School details</li>
                <li>Everything needed to prepare both rider and machine</li>
              </ul>
            </div>
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-3 rounded-xl transition-all tracking-widest shadow-md text-center"
            >
              👉 View 2026 CMRA Competition Rulebook
            </button>
          </div>

          {/* Checklist & Bylaws & Incident */}
          <div className="grid grid-cols-1 gap-4">
            {/* Tech Checklist */}
            <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
              <div>
                <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">CMRA Tech Checklist</h5>
                <p className="text-xs text-neutral-400 font-sans mb-3">
                  A practical, downloadable checklist to ensure your bike meets requirements, your gear is compliant, and you’re ready to pass technical inspection.
                </p>
              </div>
              <button
                onClick={() => navigateTo('rules-safety', 'technical')}
                className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-white transition-colors text-left"
              >
                👉 Download Tech Checklist
              </button>
            </div>

            {/* Bylaws */}
            <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
              <div>
                <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">CMRA Bylaws</h5>
                <p className="text-xs text-neutral-400 font-sans mb-3">
                  How CMRA operates as an organization, including governance structure, meetings, voting procedures, and the Statement of Purpose.
                </p>
              </div>
              <button
                onClick={() => navigateTo('rules-safety', 'rulebooks')}
                className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-white transition-colors text-left"
              >
                👉 View CMRA Bylaws
              </button>
            </div>

            {/* Incident Process */}
            <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
              <div>
                <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">CMRA Incident Resolution Process</h5>
                <p className="text-xs text-neutral-400 font-sans mb-3">
                  A structured 3-step process outlining how on-track incidents are reviewed and resolved.
                </p>
              </div>
              <button
                onClick={() => navigateTo('rules-safety', 'incident')}
                className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-white transition-colors text-left"
              >
                👉 View Incident Resolution Process
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FORMS */}
      <div className="space-y-4 pt-4 border-t border-white/5">
        <h4 className="text-2xl font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2">
          <ClipboardList size={22} className="text-[#dc2626]" /> Forms
        </h4>
        <p className="text-xs text-neutral-400 font-sans">
          Use these forms to report, request, or get involved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Incident Report Form */}
          <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
            <div>
              <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">Incident Report Form</h5>
              <p className="text-xs text-neutral-400 font-sans mb-4">
                If something happens on track, this form ensures incidents are properly recorded, fairly reviewed, and resolved in a way that improves safety for everyone.
              </p>
            </div>
            <button
              onClick={() => navigateTo('rules-safety', 'forms')}
              className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-[#dc2626] transition-colors text-left mt-2"
            >
              👉 Report An Incident
            </button>
          </div>

          {/* Refund Form */}
          <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
            <div>
              <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">CMRA Race Fee Refund Form</h5>
              <p className="text-xs text-neutral-400 font-sans mb-3">
                Need to request a refund for a race entry?
              </p>
              <p className="text-[10px] text-[#F59E0B] font-sans italic mb-4">
                Refunds are available until 8:30am (local time) on race day. Refer to the rulebook for full details.
              </p>
            </div>
            <button
              onClick={() => navigateTo('rules-safety', 'forms')}
              className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-[#dc2626] transition-colors text-left mt-2"
            >
              👉 Request A Refund
            </button>
          </div>

          {/* Volunteer Form */}
          <div className="bg-[#090909] border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
            <div>
              <h5 className="text-lg font-teko font-bold text-white uppercase mb-1">CMRA Volunteer Form</h5>
              <p className="text-xs text-neutral-400 font-sans mb-4">
                Racing doesn’t happen without the people behind it. From track operations to event support, volunteers are essential to every race weekend. You don’t need to ride to make an impact.
              </p>
            </div>
            <button
              onClick={() => navigateTo('rules-safety', 'forms')}
              className="w-max text-xs font-bold uppercase text-[#dc2626] hover:text-[#dc2626] transition-colors text-left mt-2"
            >
              👉 Become A Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* PREVIOUS RULEBOOKS */}
      <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h5 className="text-lg font-teko font-bold uppercase text-white mb-1">Previous Rulebooks</h5>
            <p className="text-xs text-neutral-400 font-sans">
              Looking for a previous version of the CMRA Competition Rulebook? They’re available upon request.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="text-xs font-bold uppercase text-[#dc2626] hover:text-white transition-colors text-left"
          >
            👉 Contact The CMRA To Request Previous Rulebooks
          </button>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">FINAL CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Don’t get stuck in the details – get moving.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('contact')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 Contact CMRA <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderVolunteersContent = () => (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="lg:col-span-8 bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6503.jpg"
            alt="Volunteers and Marshalls"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full flex-grow">
          <div>
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-6">JOIN THE PADDOCK</span>
            <h3 className="text-5xl md:text-7xl font-teko font-bold uppercase italic text-white leading-[0.85] mb-6">VOLUNTEERS & MARSHALS</h3>

            <div className="space-y-6 text-neutral-300 font-sans text-sm md:text-base leading-relaxed mb-8">
              <p className="italic text-neutral-200">
                "Corner marshals and volunteer staff are the unsung heroes of motorcycle roadracing. They provide vital flag communications, track sweep operations, and safety watch."
              </p>
              <p>
                No experience is required to volunteer—we provide full track orientation, radio training, safety gear, and daily lunch. Get closest to the high-speed action and join our tight-knit paddock.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <button
              onClick={() => navigateTo('rules-safety', 'forms')}
              className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md"
            >
              FILL OUT CMRA VOLUNTEER FORM
            </button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <h4 className="text-2xl font-teko font-bold uppercase text-white mb-4">VOLUNTEER PERKS</h4>
          <ul className="space-y-4 text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
            <li>Free lunches and snacks provided on track days.</li>
            <li>Official CMRA marshal apparel and safety vests.</li>
            <li>Free paddock parking and exclusive event viewing access.</li>
            <li>Earn credits towards annual club memberships or racer entries.</li>
          </ul>
        </div>
        <div className="border-t border-white/5 pt-4">
          <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-1">Registration</span>
          <span className="text-white font-bold text-xs uppercase tracking-wide">CMRA Corner Marshal Crew</span>
        </div>
      </div>
    </div>
  );

  const renderRMMCircuitContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO (Top Frame) */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6252.jpg"
            alt="Rocky Mountain Motorsports Circuit Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Our Home Track</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Alberta’s finest. Built for riders.
          </h3>

          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">
              All CMRA events take place at Rocky Mountain Motorsports Circuit – a modern, purpose-built facility designed to deliver a world-class racing experience.
            </p>
            <div className="flex items-center gap-2 mt-3 bg-black/40 px-4 py-2.5 rounded-xl border border-white/5 w-max backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse"></span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                This isn’t just a track. <span className="text-white font-bold">It’s a rider’s track.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Specs & Features (Col Span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* What Sets It Apart */}
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

            <h4 className="text-xl font-teko font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Zap size={18} className="text-[#dc2626]" /> What Sets It Apart
            </h4>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Recently built with modern design standards</li>
              <li>Technical layout that rewards precision and skill</li>
              <li>High-quality surface and safety infrastructure</li>
              <li>Designed to challenge riders at every level</li>
            </ul>
          </div>

          {/* Circuit Specs Block */}
          <div className="bg-[#090909] border border-white/10 p-6 rounded-2xl">
            <h4 className="text-xl font-teko font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Map size={18} className="text-[#dc2626]" /> Circuit Specs
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 font-sans">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Total Length:</span>
                <span className="font-bold text-white">3.5 Kilometers</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Total Turns:</span>
                <span className="font-bold text-white">16 (Right/Left mix)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Max Grade:</span>
                <span className="font-bold text-white">Up to 36m changes</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Location:</span>
                <span className="font-bold text-white">Carstairs, Alberta</span>
              </div>
            </div>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mt-4">
              Track Grade: FIA Grade 2 Compliant Geometry
            </p>
          </div>

        </div>

        {/* Right Column: Experience & External Link (Col Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* The Experience */}
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group flex-1 flex flex-col justify-between">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img
                src="/images/_A7R6377.jpg"
                alt="Track Experience Backdrop"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none z-10"></div>
            <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626] z-10"></div>

            <div className="relative z-10">
              <h4 className="text-xl font-teko font-bold uppercase text-white mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-[#dc2626]" /> The Experience
              </h4>

              <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6 font-bold">
                From your first laps in CMRA Race School to full race weekends, this circuit pushes you to improve – corner by corner, lap by lap.
              </p>
            </div>

            <div className="space-y-2.5 border-t border-white/5 pt-4 mt-auto relative z-10">
              {[
                'It’s where confidence is built.',
                'Where speed is earned.',
                'Where racers are made.'
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  <span className="text-xs font-sans font-bold text-white uppercase tracking-wider">{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Track Website Card */}
          <a
            href="https://rockymountainmotorsports.com"
            target="_blank"
            rel="noreferrer"
            className="bg-neutral-900 border border-white/5 hover:border-[#dc2626]/55 p-5 rounded-2xl flex items-center justify-between transition-colors group/link"
          >
            <div className="flex items-center gap-3">
              <div className="bg-neutral-800 p-2 rounded-xl text-white group-hover/link:bg-[#dc2626] transition-colors">
                <ExternalLink size={18} />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans font-bold block">Official Track Website</span>
                <span className="text-xs font-bold text-white uppercase tracking-wide">Rocky Mountain Motorsports</span>
              </div>
            </div>
            <ArrowRight size={16} className="text-neutral-500 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all" />
          </a>

        </div>

      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">See it. Ride it. Race it.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('events')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 View Events At Rocky Mountain Motorsports Circuit <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderSponsorsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6435.jpg"
            alt="FC Moto Paddock Sponsors Backdrop"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Sponsors & Partners</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Built together. Powered forward.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">Behind every race weekend, every lap, and every rider on the grid – there’s support.</p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              The Calgary Motorcycle Roadracing Association is proud to partner with organizations that believe in the sport, the riders, and the future of motorcycle roadracing in Western Canada.
            </p>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h4 className="text-xl font-teko font-bold uppercase text-white flex items-center gap-2">
              <Trophy size={20} className="text-[#dc2626]" /> Why It Matters
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-3">
              Our sponsors and partners help:
            </p>
            <ul className="space-y-2 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626] mb-4">
              <li>Keep racing accessible</li>
              <li>Support rider development</li>
              <li>Deliver safe, high-quality events</li>
            </ul>
            <p className="text-xs text-white font-sans font-bold leading-normal italic">
              They don’t just support racing. They make it possible.
            </p>
          </div>
        </div>
      </div>

      {/* PARTNER DIRECTORY */}
      <div className="bg-[#090909] border border-white/10 p-6 rounded-2xl space-y-6">
        <div>
          <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-3">Partner Directory</h4>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            We're currently updating this section - keep an eye out.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Support the brands that support racing.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('contact')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group/btn"
          >
            👉 Contact The CMRA To Get Involved <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderUpcomingEventsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R6381.jpg"
            alt="Racer 88 active cornering"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Upcoming Events</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Your next race is waiting.
          </h3>
          <div className="mt-4 border-t border-white/5 pt-4">
            <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
            <p className="text-base text-white font-sans font-bold mb-2">This is what’s coming up next.</p>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
              Whether it’s your first race or your next podium run, these are the events you should be focused on now.
            </p>
          </div>
        </div>
      </div>

      {/* EVENT LIST & WHY ACT EARLY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* EVENT LIST (Intro Copy) */}
        <div className="lg:col-span-5 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <div>
            <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
              <Calendar size={18} className="text-[#dc2626]" /> Event List
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4 font-bold">
              Each event includes:
            </p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Date and schedule</li>
              <li>Classes running</li>
              <li>Registration status</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-xs text-[#F59E0B] leading-normal font-sans italic font-bold">
              Spots are limited – and grids fill quickly.
            </p>
          </div>
        </div>

        {/* WHY ACT EARLY */}
        <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Timer size={18} className="text-[#dc2626]" /> Why Act Early
            </h4>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Secure your preferred races</li>
              <li>Avoid late registration fees</li>
              <li>
                For your first race only: earlier registration can help determine your grid position
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* REGISTRATION DETAILS */}
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-lg font-teko font-bold uppercase text-white flex items-center gap-2 border-b border-white/5 pb-2">
              <AlertTriangle size={18} className="text-[#F59E0B]" /> Registration Details
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans font-bold">
              Registration policies, timelines, and requirements are governed by the official CMRA rulebook.
            </p>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              For complete details – including registration procedures, deadlines, and CMRA Race School policies – refer to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-black/40 border border-white/5 p-3 rounded-lg flex items-center gap-3">
                <span className="bg-[#dc2626]/20 text-[#dc2626] font-mono font-bold text-xs px-2 py-1 rounded">Page 53</span>
                <span className="text-[11px] text-neutral-300 font-sans uppercase font-bold">Race Registration</span>
              </div>
              <div className="bg-black/40 border border-white/5 p-3 rounded-lg flex items-center gap-3">
                <span className="bg-[#dc2626]/20 text-[#dc2626] font-mono font-bold text-xs px-2 py-1 rounded">Page 54</span>
                <span className="text-[11px] text-neutral-300 font-sans uppercase font-bold">CMRA Race School Registration</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end mt-4 lg:mt-0">
            <button
              onClick={() => navigateTo('rules-safety', 'rulebooks')}
              className="w-full bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-2 group text-left"
            >
              👉 View the 2026 CMRA Competition Rulebook
            </button>
          </div>
        </div>
      </div>

      {/* CONFIRMED UPCOMING EVENTS (Interactive Round Cards) */}
      <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl">
        <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-6">Confirmed Upcoming Schedule</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ROUNDS.filter(r => r.status === 'OPEN' || r.status === 'COMING SOON').map(round => (
            <div key={round.id} className="bg-[#050505] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#dc2626]/30 transition-colors">
              <div>
                <span className="text-[#dc2626] font-bold text-[10px] uppercase block mb-1">{round.date}</span>
                <h4 className="text-2xl font-teko font-bold text-white uppercase mb-1">{round.name}</h4>
                <span className="text-neutral-500 text-xs uppercase block mb-4">{round.location}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-4">
                <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${round.status === 'OPEN' ? 'bg-green-950 text-green-400 border border-green-800' : 'bg-neutral-800 text-neutral-400 border border-neutral-700'}`}>
                  {round.status}
                </span>
                {round.status === 'OPEN' ? (
                  <a
                    href="https://www.motorsportreg.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase text-[#dc2626] hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    REGISTER <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs font-bold text-neutral-600 uppercase cursor-not-allowed">COMING SOON</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Don’t wait for race weekend. Own it now.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <a
            href="https://www.motorsportreg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            👉 Register via MotorsportReg
          </a>
        </div>
      </div>

    </div>
  );

  const renderEventDetailsContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      {/* HERO & OVERVIEW */}
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
        <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">Event Details</span>
        <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
          Show up ready. Ride with confidence.
        </h3>
        <div className="mt-4 border-t border-white/5 pt-4">
          <h4 className="text-lg font-teko font-bold uppercase text-[#dc2626] mb-1">Overview</h4>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            Every event has its own character – but preparation is what separates a good weekend from a great one.
          </p>
        </div>
      </div>

      {/* WHAT YOU'LL FIND & WHY IT MATTERS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* WHAT YOU'LL FIND */}
        <div className="lg:col-span-6 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <div>
            <h4 className="text-lg font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
              <ClipboardList size={18} className="text-[#dc2626]" /> What You'll Find
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4 font-bold">
              Each event page includes:
            </p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Full schedule (practice + races)</li>
              <li>Class breakdowns</li>
              <li>Technical and safety notes</li>
              <li>Track-specific updates</li>
            </ul>
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div className="lg:col-span-6 bg-[#090909] border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-[#dc2626]" /> Why It Matters
            </h4>
            <p className="text-xs text-neutral-300 font-sans mb-4 font-bold">
              Knowing the schedule and setup ahead of time lets you:
            </p>

            <ul className="space-y-3 text-xs text-neutral-300 font-sans pl-4 list-disc marker:text-[#dc2626]">
              <li>Plan your race strategy</li>
              <li>Prepare your machine for the day</li>
              <li>Focus entirely on performance</li>
            </ul>
          </div>
        </div>

      </div>

      {/* TRACK CONTEXT */}
      <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
          <Map size={18} className="text-[#dc2626]" /> Track Context
        </h4>
        <p className="text-xs text-neutral-300 font-sans mb-4">
          All events take place at Rocky Mountain Motorsports Circuit, with:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
            <div className="bg-[#dc2626]/10 p-2 rounded-lg">
              <Radio size={20} className="text-[#dc2626]" />
            </div>
            <div>
              <span className="text-xs text-white font-bold block">95 dB Sound Limit</span>
              <span className="text-[10px] text-neutral-400 font-sans uppercase font-bold text-[#F59E0B]">Enforced</span>
            </div>
          </div>
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
            <div className="bg-[#dc2626]/10 p-2 rounded-lg">
              <Zap size={20} className="text-[#dc2626]" />
            </div>
            <div>
              <span className="text-xs text-white font-bold block">GPS Transponder Required</span>
              <span className="text-[10px] text-neutral-400 font-sans uppercase font-bold">Required For All Riders</span>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-2 block">CTA</span>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Know the details. Own the track.</h4>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('upcoming-events')}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5"
          >
            👉 View Upcoming Events
          </button>
          <button
            onClick={() => navigateTo('register-races')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-6 py-4 rounded-xl transition-all tracking-widest shadow-md flex items-center justify-center gap-1.5 group/btn"
          >
            👉 Register Now <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderRulesSafetyContent = () => {
    const sections = [
      {
        id: 'rulebooks',
        title: 'OFFICIAL RULEBOOKS',
        icon: ShieldCheck,
        items: [
          {
            title: '(1) 2026 CMRA Competition Rulebook',
            desc: 'The official guide containing all sporting regulations, class details, licensing criteria, and general conduct policies for the 2026 racing season.',
            breakdown: [
              'Chapter 1: Administration & General Rules',
              'Chapter 2: Riders & Licensing Requirements',
              'Chapter 3: Competition Classes & Points Setup',
              'Chapter 4: Race Control & Flagging Regulations'
            ],
            link: 'https://roadracing.org/wp-content/uploads/2026/03/2026-CMRA-Rulebook.pdf'
          },
          {
            title: 'CMRA Corporate Bylaws',
            desc: 'The governing bylaws outlining the legal, corporate structure, executive roles, and operational mandate of the Calgary Motorcycle Roadracing Association.',
            link: '/documents/cmra-bylaws.pdf'
          }
        ]
      },
      {
        id: 'incident',
        title: 'INCIDENT RESOLUTION',
        icon: AlertTriangle,
        items: [
          {
            title: '(2) Incident Resolution Process',
            desc: 'Step-by-step guidelines on protest procedures, executive reviews, appeals, and formal disciplinary pathways for track incidents.',
            breakdown: [
              'Phase 1: On-Track Incident Log submission',
              'Phase 2: Race Director review & witness statement collection',
              'Phase 3: Executive Committee hearing & final ruling'
            ],
            link: '/documents/incident-resolution-process.pdf'
          }
        ]
      },
      {
        id: 'technical',
        title: 'TECHNICAL & GEAR CHECKLISTS',
        icon: Wrench,
        items: [
          {
            title: '(1) Technical Requirements Checklist',
            desc: 'Essential preparation steps for your motorcycle, ensuring compliance with safety wires, fluids, and numbers before heading to Tech Inspection.',
            breakdown: [
              'Fluids: Water-cooled engines must use water or Water Wetter only (no glycol).',
              'Safety Wire: Oil drain plug, filler cap, filter, brake caliper bolts, axle nuts.',
              'Bodywork & Stand: Remove sidestands; belly pan must hold 3 liters of fluid.'
            ]
          },
          {
            title: '(1) Safety Gear',
            desc: 'Required personal protective equipment for riders, detailing helmet certifications, leather suits, back protectors, and glove/boot standards.',
            breakdown: [
              'Helmet: Snell M2020, ECE 22.05/22.06, or FIM certified (within 5 years of manufacture).',
              'Suit: One-piece leather or two-piece zip-together leather suit with full circumference zipper.',
              'Armor: CE-approved back protector, shoulder, elbow, and knee protectors.'
            ],
            link: '/documents/safety-gear-guide.pdf'
          }
        ]
      },
      {
        id: 'forms',
        title: 'RACE DAY FORMS (4TH LEVEL 1 SECTION)',
        icon: ClipboardList,
        items: [
          {
            title: 'Incident Report Form',
            desc: 'Official form for reporting on-track incidents or rules violations. Must be submitted to the Race Director within 30 minutes of the race completion.',
            link: '/documents/incident-report-form.pdf'
          },
          {
            title: '(2) Race Fee Refund Form',
            desc: 'Form to request refunds or event credits for DNS (Did Not Start) cases, mechanical failures, or official event cancellations.',
            link: '/documents/race-fee-refund.pdf'
          },
          {
            title: '(2) CMRA Volunteer Form',
            desc: 'Submit your details to sign up as a corner marshal, grid marshal, technical assistant, or general paddock volunteer.',
            link: '/documents/volunteer-signup-form.pdf'
          }
        ]
      }
    ];

    return (
      <div className="flex flex-col lg:h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group mb-6">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="/images/_A7R6426.jpg"
              alt="Rules and Safety Backdrop"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">regulations & safety</span>
            <h3 className="text-4xl font-teko font-bold uppercase italic text-white leading-none">Rules & Safety</h3>
            <p className="text-neutral-300 font-sans text-xs md:text-sm mt-2 max-w-2xl">Official regulations, safety standards, and administrative forms.</p>
          </div>
        </div>

        <div className="flex-grow lg:overflow-y-auto custom-scroll space-y-3 pr-2">
          {sections.map((sec) => {
            const isOpen = activeRulesSection === sec.id;
            const IconComponent = sec.icon;

            return (
              <div key={sec.id} className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                {/* Header Toggle Bar */}
                <button
                  onClick={() => setActiveRulesSection(isOpen ? '' : sec.id)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-all ${isOpen ? 'bg-[#dc2626]/10 text-white' : 'hover:bg-white/5 text-neutral-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={20} className={isOpen ? 'text-[#dc2626]' : 'text-neutral-500'} />
                    <span className="font-teko text-2xl font-bold tracking-widest uppercase">{sec.title}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-neutral-500'}`}
                  />
                </button>

                {/* Collapsible Content Panels */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] border-t border-white/5 opacity-100 p-6' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sec.items.map((item, idx) => (
                      <div key={idx} className="bg-[#050505] border border-white/10 rounded-xl p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="font-teko text-xl font-bold text-white uppercase mb-2 border-b border-white/5 pb-2 flex items-center justify-between">
                            <span>{item.title}</span>
                            <span className="text-[10px] bg-red-950/20 text-[#dc2626] px-2 py-0.5 rounded font-sans uppercase">Active</span>
                          </h4>
                          <p className="text-xs text-neutral-300 leading-relaxed mb-4 italic">"{item.desc}"</p>

                          {item.breakdown && (
                            <div className="mb-4">
                              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">Key Breakdown:</span>
                              <ul className="list-disc pl-4 space-y-1 text-[11px] text-neutral-400">
                                {item.breakdown.map((point, pIdx) => (
                                  <li key={pIdx}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {item.link && (
                          <div className="border-t border-white/5 pt-4 mt-auto">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full bg-white/5 hover:bg-[#dc2626] hover:text-white transition-all text-[#dc2626] border border-white/10 text-center py-2.5 rounded font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-1.5"
                            >
                              Download PDF <ExternalLink size={12} />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderRaceNumbersContent = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 pb-12">
      <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-2xl shrink-0 relative overflow-hidden group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/_A7R7030.jpg"
            alt="Race Numbers Starting Grid"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626]/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-[#dc2626] text-white font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-sm w-max mb-4 block">the starting grid</span>
          <h3 className="text-4xl md:text-5xl font-teko font-bold uppercase italic text-white leading-none mb-3">
            Every number has a meaning. Every rider has their purpose.
          </h3>
          <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed max-w-3xl">
            Each number represents a rider, a machine – and a story unfolding this season.
          </p>
        </div>
      </div>

      {/* SUPPORTING COPY & THE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Supporting Copy */}
        <div className="lg:col-span-5 bg-gradient-to-r from-neutral-900 to-black border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-[4px] h-full bg-[#dc2626]"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white tracking-wider flex items-center gap-2 mb-3">
              <Flag size={18} className="text-[#dc2626]" /> This Is The Grid
            </h4>
            <p className="text-[11px] text-neutral-400 font-sans mb-4">
              A dynamic mix of skill, speed, and dedication coming together on every race day. WCCS and local grids feature:
            </p>

            <ul className="space-y-3 font-sans text-xs text-neutral-300 pl-4 list-disc marker:text-[#dc2626]">
              <li>Returning competitors</li>
              <li>First-time racers</li>
              <li>Championship contenders</li>
            </ul>
          </div>

          <div className="bg-black/30 p-3 rounded-xl border border-white/5 mt-6">
            <p className="text-[10px] text-neutral-400 leading-normal font-sans italic">
              "Each number represents a rider, a machine – and a story unfolding this season."
            </p>
          </div>
        </div>

        {/* Placeholder / Empty Grid Slots */}
        <div className="lg:col-span-7 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <h4 className="text-xl font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-4 flex items-center gap-2">
              <Users size={18} className="text-[#dc2626]" /> Racer Roster & Plates
            </h4>

            <p className="text-[11px] text-neutral-300 font-sans leading-relaxed mb-6">
              Racer profiles and numbers will be published as the season begins.
              <span className="text-white font-bold block mt-1">Check back soon – or better yet, earn your place among them.</span>
            </p>

            {/* Visual Grid Placeholders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
              {[
                { n: '??', label: 'YOUR NAME HERE', reserved: false },
                { n: '01', label: 'CHAMPION', reserved: true },
                { n: '18', label: 'EXPERT', reserved: true },
                { n: '42', label: 'NOVICE', reserved: true }
              ].map((slot, i) => (
                <div
                  key={i}
                  className={`border rounded-xl p-3 flex flex-col items-center justify-center transition-all ${slot.reserved ? 'bg-black/20 border-white/5 opacity-50' : 'bg-gradient-to-br from-[#dc2626]/10 to-transparent border-[#dc2626]/30 animate-pulse hover:border-[#dc2626] cursor-pointer'}`}
                  onClick={() => !slot.reserved && navigateTo('start-racing')}
                >
                  <span className={`font-teko font-bold text-3xl leading-none mb-1 ${slot.reserved ? 'text-neutral-500' : 'text-[#dc2626]'}`}>{slot.n}</span>
                  <span className="text-[8px] font-bold text-neutral-400 tracking-wider text-center uppercase whitespace-nowrap">{slot.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* TECHNICAL PLATES REGULATIONS (Retained value-add) */}
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl">
        <h4 className="text-lg font-teko font-bold uppercase text-white border-b border-white/5 pb-2 mb-6">Plate Standards & Placement</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expert Plate */}
          <div className="bg-black/40 p-5 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-24 bg-white rounded-lg flex items-center justify-center border-4 border-black shrink-0 shadow-lg">
              <span className="font-teko font-bold text-5xl text-black">18</span>
            </div>
            <div>
              <span className="bg-neutral-800 text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded tracking-widest block w-max mb-1.5">EXPERT</span>
              <p className="text-white font-bold text-xs mb-1">White Plate Background</p>
              <p className="text-[10px] text-neutral-400 leading-snug">Black solid block font numbers, minimum 6" high. Must be centered on front fairing and side tails.</p>
            </div>
          </div>

          {/* Novice Plate */}
          <div className="bg-black/40 p-5 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-24 bg-[#FFD700] rounded-lg flex items-center justify-center border-4 border-black shrink-0 shadow-lg">
              <span className="font-teko font-bold text-5xl text-[#dc2626]">42</span>
            </div>
            <div>
              <span className="bg-[#dc2626] text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded tracking-widest block w-max mb-1.5">NOVICE / AMATEUR</span>
              <p className="text-white font-bold text-xs mb-1">Yellow Plate Background</p>
              <p className="text-[10px] text-neutral-400 leading-snug">Red solid block font numbers, minimum 6" high. Must be centered on front fairing and side tails.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/5 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <h4 className="text-3xl font-teko font-bold uppercase italic text-white leading-none">Next name on the list? Yours.</h4>
          <p className="text-neutral-400 text-xs mt-1">Claim your race license, secure your plate selection, and take the start grid.</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0 relative z-10">
          <button
            onClick={() => navigateTo('start-racing')}
            className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl transition-all tracking-widest shadow-md shadow-red-950/40 flex items-center gap-1.5 group text-left"
          >
            Start Racing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );

  return (
    // MASTER LAYOUT: 
    <div className="flex flex-col bg-[#050505] text-white min-h-[100dvh] lg:h-screen lg:overflow-hidden">
      <Header onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className={`flex-1 min-h-0 relative flex flex-col px-4 pb-4 pt-10 md:px-6 md:pb-6 md:pt-14 lg:px-8 lg:pb-8 lg:pt-20 ${currentView === 'home' ? 'lg:overflow-hidden' : 'lg:overflow-y-auto custom-scroll pb-16'}`}>

        {currentView !== 'home' && (
          <div className="shrink-0 mb-4 lg:mb-6 pl-28 md:pl-40 lg:pl-40">
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

        <div className={`flex-1 ${currentView === 'home' ? 'lg:overflow-hidden' : ''}`}>
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
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo('new-racers');
                          }}
                          className="bg-gradient-to-r from-[#dc2626] to-[#F59E0B] hover:opacity-90 text-white font-teko font-bold py-3.5 px-8 text-xl uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/40"
                        >
                          BECOME A RACER <ArrowRight size={20} />
                        </a>

                        {/* HERO BUTTON 2: UPCOMING EVENTS */}
                        <a
                          href="#"
                          onClick={(e) => {
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
          {currentView === 'our-story' && renderOurStoryContent()}
          {currentView === 'contact' && renderContactContent()}
          {currentView === 'racer-info' && renderRacerInfoContent()}
          {currentView === 'calendar' && renderCalendarContent()}
          {currentView === 'new-racers' && renderNewRacersContent()}
          {currentView === 'documents' && renderFormsDocumentsContent()}
          {currentView === 'race-numbers' && renderRaceNumbersContent()}

          {currentView === 'watch-live' && renderWatchLiveContent()}
          {currentView === 'start-racing' && renderStartRacingContent()}
          {currentView === 'how-it-works' && renderHowItWorksContent()}
          {currentView === 'race-school' && renderRaceSchoolContent()}
          {currentView === 'register-races' && renderRegisterRacesContent()}
          {currentView === 'racing' && renderRacingMainContent()}
          {currentView === 'events' && renderEventsMainContent()}
          {currentView === 'community' && renderCommunityMainContent()}
          {currentView === 'classes' && renderClassesContent()}
          {currentView === 'wccs' && renderWCCSContent()}
          {currentView === 'bike-gear' && renderBikeGearContent()}
          {currentView === 'results' && renderResultsContent()}
          {currentView === 'membership' && renderBecomeMemberContent()}
          {currentView === 'become-member' && renderBecomeMemberDetailsContent()}
          {currentView === 'costs' && renderCostsContent()}
          {currentView === 'forms-documents' && renderFormsDocumentsContent()}
          {currentView === 'rules-safety' && renderRulesSafetyContent()}
          {currentView === 'volunteers' && renderVolunteersContent()}
          {currentView === 'upcoming-events' && renderUpcomingEventsContent()}
          {currentView === 'event-details' && renderEventDetailsContent()}
          {currentView === 'sponsors' && renderSponsorsContent()}
          {currentView === 'rmm-circuit' && renderRMMCircuitContent()}
          {currentView === 'advanced-training' && renderAdvancedTrainingContent()}
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

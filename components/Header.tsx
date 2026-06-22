import React, { useState } from 'react';
import { ChevronDown, Flag, Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: string, section?: string) => void;
}

const NAV_ITEMS = [
  {
    label: 'Watch LIVE',
    value: 'watch-live'
  },
  {
    label: 'Start Racing',
    value: 'start-racing',
    subItems: [
      { label: 'How It Works (The Path To The Grid)', value: 'how-it-works' },
      { label: 'Race School & License', value: 'race-school' },
      { label: 'Membership & Registration (Commit To The Season)', value: 'membership' },
      { label: 'Costs & Expectations (Know Before You Go)', value: 'costs' }
    ]
  },
  {
    label: 'Racing',
    value: 'racing',
    subItems: [
      { label: 'Classes & Categories (Find Your Line)', value: 'classes' },
      { label: 'Western Canadian Championship Series (Race For More)', value: 'wccs' },
      { label: 'Bike & Gear Requirements (Built For The Track)', value: 'bike-gear' },
      { label: 'Results (Where It All Lands)', value: 'results' },
      { label: 'Racers & Numbers (Know The Grid)', value: 'race-numbers' },
      { label: 'Advanced Rider Training (Level Up)', value: 'advanced-training' }
    ]
  },
  {
    label: 'Events',
    value: 'events',
    subItems: [
      { label: 'Event Calendar (Pick Your Moment)', value: 'calendar' },
      { label: 'Upcoming Race Events (Next Up)', value: 'upcoming-events' },
      { label: 'Event Details (Know Before You Roll In)', value: 'event-details' },
      { label: 'Registration (Claim Your Spot)', value: 'register-races' }
    ]
  },
  {
    label: 'Membership',
    value: 'membership',
    subItems: [
      { label: 'Become a CMRA Member (Your Season Starts Here)', value: 'become-member' },
      { label: 'Forms & Documents (Everything You Need – In One Place)', value: 'forms-documents' }
    ]
  },
  {
    label: 'Rules & Safety',
    value: 'rules-safety',
    subItems: [
      { label: '2026 CMRA Competition Rulebook', value: 'rules-safety', section: 'rulebooks' },
      { label: 'Technical Requirements Checklist', value: 'rules-safety', section: 'technical' },
      { label: 'Safety Gear', value: 'rules-safety', section: 'technical' }
    ]
  },
  {
    label: 'Community',
    value: 'community',
    subItems: [
      { label: 'News & Updates (Stay In The Loop)', value: 'news' },
      { label: 'Sponsors & Partners (Powered By Passion)', value: 'sponsors' }
    ]
  },
  {
    label: 'About',
    value: 'about',
    subItems: [
      { label: 'The CMRA (Our Story)', value: 'our-story' },
      { label: 'Contact (Get In Touch)', value: 'contact' },
      { label: 'Rocky Mountain Motorsports Circuit (Our Home Track)', value: 'rmm-circuit' }
    ]
  }
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState<string | null>(null);

  const handleMobileLinkClick = (action?: () => void) => {
    action?.();
    setIsMobileMenuOpen(false);
    setMobileOpenSubMenu(null);
  };

  return (
    <div className="flex flex-col shrink-0 bg-[#050505] sticky top-0 z-[70]">
      {/* Red Line */}
      <div className="h-[3px] w-full bg-[#DC2626] shadow-[0_0_10px_rgba(220,38,38,0.5)] relative z-50"></div>

      <header className="relative px-4 md:px-6 h-20 md:h-28 flex items-center justify-between max-w-[1920px] mx-auto w-full border-b border-white/10 bg-[#050505]">
        {/* Left Side: Logo Area (Absolute Positioned for Overflow/Enlargement) */}
        <div className="absolute left-4 md:left-6 top-1 md:top-2 select-none cursor-pointer group z-[80]" onClick={() => onNavigate('home')}>
          {/* Logo Image directly on dark background (Huge Overflowing Crest) */}
          <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <img
              src="/images/logo.png"
              alt="CMRA Logo"
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(220,38,38,0.45)]"
            />
          </div>
        </div>

        {/* Spacer to reserve space for absolute positioned logo in flex layout */}
        <div className="w-24 md:w-36 shrink-0 h-1"></div>

        {/* Right Side: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 h-full flex-wrap justify-end pl-4">
          {NAV_ITEMS.map((item, index) => {
            const isRightAligned = index >= NAV_ITEMS.length - 3;
            return (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
                onMouseLeave={() => item.subItems && setOpenDropdown(null)}
              >
                {item.subItems ? (
                  <button
                    onClick={() => item.value && onNavigate(item.value)}
                    className={`flex items-center gap-1 cursor-pointer group h-full ${openDropdown === item.label ? 'text-white' : 'text-neutral-300'}`}
                  >
                    <span className="font-teko text-[1.1rem] font-medium tracking-wide group-hover:text-white transition-colors uppercase whitespace-nowrap">
                      {item.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-neutral-500 group-hover:text-white transition-transform duration-200 mt-0.5 ${openDropdown === item.label ? 'rotate-180 text-white' : ''}`}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate(item.value!)}
                    className={`font-teko text-[1.1rem] font-medium tracking-wide text-neutral-300 hover:text-white transition-colors uppercase whitespace-nowrap ${item.label === 'Watch LIVE' ? 'text-[#dc2626] font-bold' : ''}`}
                  >
                    {item.label}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div
                    className={`absolute top-full ${isRightAligned ? 'right-0' : 'left-0'} min-w-[200px] bg-[#0C0A09] border border-white/10 rounded-b-xl shadow-2xl py-2 flex flex-col transition-all duration-200 origin-top z-50 ${openDropdown === item.label ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
                  >
                    {item.subItems.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.label}
                          href={subItem.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-left px-6 py-3 font-teko text-lg font-medium tracking-wide text-neutral-400 hover:text-white hover:bg-white/5 transition-colors uppercase flex items-center justify-between"
                        >
                          {subItem.label}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <button
                          key={subItem.label}
                          disabled={'phase2' in subItem && subItem.phase2}
                          onClick={(e) => {
                            e.stopPropagation();
                            if ('phase2' in subItem && subItem.phase2) return;
                            onNavigate(subItem.value, 'section' in subItem ? subItem.section : undefined);
                            setOpenDropdown(null);
                          }}
                          className={`text-left px-6 py-3 font-teko text-lg font-medium tracking-wide transition-colors uppercase first:rounded-t-none last:rounded-b-xl whitespace-nowrap ${'phase2' in subItem && subItem.phase2 ? 'text-neutral-600 cursor-not-allowed hover:bg-transparent' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
                        >
                          {subItem.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 md:top-28 left-0 w-full bg-[#0C0A09]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-200 flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] overflow-y-auto z-[60]">
          <nav className="flex flex-col px-6 pb-24 pt-8 md:pt-14 gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-white/5 py-2 last:border-0">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => setMobileOpenSubMenu(mobileOpenSubMenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between p-4 rounded-xl font-teko text-2xl font-bold tracking-wide text-white hover:bg-white/5 transition-colors uppercase"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={20} className={`transition-transform duration-200 ${mobileOpenSubMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileOpenSubMenu === item.label && (
                      <div className="flex flex-col bg-white/5 rounded-lg mx-4 mb-2 overflow-hidden">
                        {item.subItems.map((subItem) => (
                          subItem.external ? (
                            <a
                              key={subItem.label}
                              href={subItem.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-left px-6 py-4 font-teko text-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors uppercase border-b border-white/5 last:border-0 flex items-center justify-between"
                            >
                              {subItem.label}
                              <ExternalLink size={16} />
                            </a>
                          ) : (
                            <button
                              key={subItem.label}
                              disabled={'phase2' in subItem && subItem.phase2}
                              onClick={() => {
                                if ('phase2' in subItem && subItem.phase2) return;
                                handleMobileLinkClick(() => onNavigate(subItem.value, 'section' in subItem ? subItem.section : undefined));
                              }}
                              className={`text-left px-6 py-4 font-teko text-xl transition-colors uppercase border-b border-white/5 last:border-0 ${'phase2' in subItem && subItem.phase2 ? 'text-neutral-600 cursor-not-allowed' : 'text-neutral-300 hover:text-white hover:bg-white/5'}`}
                            >
                              {subItem.label}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleMobileLinkClick(() => onNavigate(item.value!))}
                    className={`text-left w-full p-4 rounded-xl font-teko text-2xl font-bold tracking-wide text-white hover:bg-white/5 transition-colors uppercase ${item.label === 'Watch LIVE' ? 'text-[#dc2626]' : ''}`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { ChevronDown, Flag, Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: string) => void;
}

const NAV_ITEMS = [
  {
    label: 'Watch LIVE',
    value: 'watch-live'
  },
  {
    label: 'Start Racing',
    subItems: [
      { label: 'How It Works', value: 'start-racing' },
      { label: 'Go to Race School', value: 'race-school' },
      { label: 'Register for Races', value: 'register-races' },
    ]
  },
  {
    label: 'Racing',
    subItems: [
      { label: 'Classes & Categories', value: 'classes' },
      { label: 'WCCS', value: 'wccs' },
      { label: 'Bike & Gear', value: 'bike-gear' },
      { label: 'Results', value: 'results' },
      { label: 'Racers & Numbers', value: 'race-numbers' },
    ]
  },
  {
    label: 'Events',
    subItems: [
      { label: 'Event Calendar', value: 'calendar' },
      { label: 'Registration', value: 'register-events', external: true, url: 'https://www.motorsportreg.com' },
    ]
  },
  {
    label: 'Membership',
    value: 'membership'
  },
  {
    label: 'Rules',
    subItems: [
      { label: 'Rulebook & Forms', value: 'rules-safety' },
      { label: 'Technical Requirements', value: 'rules-safety' },
    ]
  },
  {
    label: 'Community',
    subItems: [
      { label: 'News & Updates', value: 'news' },
      { label: 'Volunteers / Marshals', value: 'volunteers' },
    ]
  },
  {
    label: 'Sponsors',
    value: 'sponsors'
  },
  {
    label: 'About',
    subItems: [
      { label: 'The CMRA', value: 'about' },
      { label: 'RMM Circuit', value: 'rmm-circuit' },
    ]
  },
  {
    label: 'Contact',
    value: 'contact'
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
      
      <header className="px-4 md:px-6 h-16 md:h-20 flex items-center justify-between max-w-[1920px] mx-auto w-full border-b border-white/10 bg-[#050505]">
        {/* Left Side: Logo Area */}
        <div className="flex items-center gap-3 select-none cursor-pointer group shrink-0" onClick={() => onNavigate('home')}>
          {/* Flag Icon */}
          <div className="bg-[#E53E3E] rounded-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[0_0_10px_rgba(229,62,62,0.3)] group-hover:bg-red-500 transition-colors">
            <Flag size={18} strokeWidth={2} className="text-white md:w-5 md:h-5" />
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col justify-center -space-y-1">
             <div className="flex items-baseline gap-1.5">
                <h1 className="font-teko text-3xl md:text-[2.75rem] font-bold italic tracking-tighter text-white leading-none group-hover:text-neutral-200 transition-colors">
                  CMRA
                </h1>
             </div>
             <span className="font-sans text-[0.4rem] md:text-[0.55rem] font-bold text-neutral-500 uppercase tracking-[0.35em] leading-none ml-0.5 hidden sm:block">
               EST. 1987
             </span>
          </div>
        </div>

        {/* Right Side: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 h-full flex-wrap justify-end pl-4 overflow-hidden">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
              onMouseLeave={() => item.subItems && setOpenDropdown(null)}
            >
              {item.subItems ? (
                <div className={`flex items-center gap-1 cursor-default group h-full ${openDropdown === item.label ? 'text-white' : 'text-neutral-300'}`}>
                  <span className="font-teko text-[1.1rem] font-medium tracking-wide group-hover:text-white transition-colors uppercase whitespace-nowrap">
                    {item.label}
                  </span>
                  <ChevronDown 
                    size={14} 
                    className={`text-neutral-500 group-hover:text-white transition-transform duration-200 mt-0.5 ${openDropdown === item.label ? 'rotate-180 text-white' : ''}`} 
                  />
                </div>
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
                  className={`absolute top-full left-0 min-w-[200px] bg-[#0C0A09] border border-white/10 rounded-b-xl shadow-2xl py-2 flex flex-col transition-all duration-200 origin-top z-50 ${openDropdown === item.label ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(subItem.value);
                          setOpenDropdown(null);
                        }}
                        className="text-left px-6 py-3 font-teko text-lg font-medium tracking-wide text-neutral-400 hover:text-white hover:bg-white/5 transition-colors uppercase first:rounded-t-none last:rounded-b-xl whitespace-nowrap"
                      >
                        {subItem.label}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
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
        <div className="xl:hidden absolute top-16 md:top-20 left-0 w-full bg-[#0C0A09]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-200 flex flex-col h-[calc(100vh-64px)] overflow-y-auto z-[60]">
          <nav className="flex flex-col p-6 gap-2 pb-24">
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
                              onClick={() => handleMobileLinkClick(() => onNavigate(subItem.value))}
                              className="text-left px-6 py-4 font-teko text-xl text-neutral-300 hover:text-white hover:bg-white/5 transition-colors uppercase border-b border-white/5 last:border-0"
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

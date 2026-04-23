
import React from 'react';
import { Trophy, Flag, Users, Clock, FileText, CheckCircle, Info, Briefcase } from 'lucide-react';
import { RaceRound, ResourceLink, NewsItem } from './types';

export const COLORS = {
  ASPHALT: '#0C0A09',
  APEX_RED: '#DC2626',
  SIGNAL_AMBER: '#F59E0B',
};

export const MOCK_ROUNDS: RaceRound[] = [
  { id: 1, name: 'ROUND 1: THE SEASON OPENER', date: 'MAY 24-25', location: 'ROCKY MOUNTAIN MOTORSPORTS', status: 'COMPLETED' },
  { id: 2, name: 'ROUND 2: THE SPEED FREAKS', date: 'JUNE 21-22', location: 'ROCKY MOUNTAIN MOTORSPORTS', status: 'OPEN' },
  { id: 3, name: 'ROUND 3: MIDSUMMER MADNESS', date: 'JULY 19-20', location: 'ROCKY MOUNTAIN MOTORSPORTS', status: 'COMING SOON' },
  { id: 4, name: 'ROUND 4: THE HEATWAVE', date: 'AUGUST 23-24', location: 'ROCKY MOUNTAIN MOTORSPORTS', status: 'COMING SOON' },
  { id: 5, name: 'ROUND 5: CHAMPIONSHIP SUNDAY', date: 'SEPTEMBER 20-21', location: 'ROCKY MOUNTAIN MOTORSPORTS', status: 'COMING SOON' },
];

export const MOCK_RESOURCES: ResourceLink[] = [
  { id: '1', title: '2026 Competition Rulebook', type: 'PDF', size: '2.4 MB', icon: 'trophy' },
  { id: '2', title: 'Tech Inspection Checklist', type: 'PDF', size: '150 KB', icon: 'check' },
  { id: '3', title: 'Medical Data Form', type: 'PDF', size: '1.1 MB', icon: 'file' },
  { id: '4', title: 'Sponsorship Package', type: 'PDF', size: '5.0 MB', icon: 'briefcase' },
];

export const MOCK_NEWS: NewsItem[] = [
  { 
    id: 'n1', 
    category: 'SEASON LAUNCH', 
    title: '2026 Is Here. Let’s Go!', 
    date: 'JAN 15, 2026',
    content: 'A new season begins – and so does the energy that brings our racing community together.',
    body: (
      <>
        <p className="mb-4">
          A new season begins – and so does the energy that brings our racing community together.
        </p>
        <p className="mb-4">
          Whether you’re a returning racer or gridding up for the first time, now’s the time to get ready:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <a 
              href="https://www.motorsportreg.com/events/cmra-2026-membership-race-licence-rocky-mountain-motorsports-calgary-542341" // <--- EDIT YOUR URL HERE
              target="_blank" 
              rel="noreferrer" 
              className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
            >
              2026 CMRA Membership & Race Licence
            </a>
          </li>
          <li>
            <a 
              href="https://www.motorsportreg.com/events/2026-cmra-race-school-advanced-racer-training-rocky-mountain-motorsports-654468" // <--- EDIT YOUR URL HERE
              target="_blank" 
              rel="noreferrer" 
              className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
            >
              CMRA Race School or Advanced Racer Training
            </a>
          </li>
        </ul>
        <p className="mb-4">
          2026 at Rocky Mountain Motorsports is about more than racing. It’s about the people, the paddock, and the shared drive to go faster, together.
        </p>
        <p className="mb-4">
          Watch our socials and find us at the{' '}
          <a 
            href="https://motocanada.com/shows/calgary/" // <--- EDIT YOUR URL HERE
            target="_blank" 
            rel="noreferrer" 
            className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
          >
            Calgary Motorcycle & Powersport Show
          </a>.
        </p>
        <p className="font-bold text-white italic">
          Then meet us where it all comes alive: on the grid.
        </p>
      </>
    )
    // removed the 'links' array to remove the bottom buttons
  },
  { 
    id: 'n2', 
    category: 'SCHOOL', 
    title: 'Race School 2025 – On Sale Now', 
    date: 'FEB 10, 2025',
    content: 'Step up your racing. Step onto the track. The 2025 CMRA Race School is your entry point.',
    body: (
      <>
        <p className="mb-4">
          Step up your racing. Step onto the track. The <span className="font-bold text-white">2025 CMRA Race School</span> is your entry point.
        </p>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Dates</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li><span className="font-bold text-white">Thursday, May 15</span> – Classroom session</li>
          <li><span className="font-bold text-white">Friday, May 16</span> – On-track practicum</li>
        </ul>

        <p className="mb-4 font-bold text-white">
          Register &rarr; <a href="https://www.motorsportreg.com/events/2025-cmra-race-school-rocky-mountain-motorsports-calgary-motorcycle-302577" target="_blank" rel="noreferrer" className="text-[#dc2626] hover:text-[#F59E0B] transition-colors underline decoration-red-500/30">HERE</a>
        </p>

        <p className="mb-4">
          <span className="font-bold text-white">Cost:</span> $420 ($410 – school + $10 – GPS rental)
        </p>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Classroom Session</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Arrive: 6:30 PM | Class: 7–9 PM</li>
          <li>Location: To be announced</li>
          <li>Learn bike prep, rider prep, proper racing lines, braking, cornering, and crash avoidance</li>
        </ul>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Track Session</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
             Location: <a href="https://rockymotorsports.com/" target="_blank" rel="noreferrer" className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30">Rocky Mountain Motorsports Circuit</a>
          </li>
          <li>Small groups, closed course, supervised by CMRA instructors</li>
          <li>Practice everything from class in real-time, with constant feedback and performance monitoring</li>
        </ul>

        <p className="font-bold text-white italic mt-6">
          The track is waiting. Learn. Ride. Race together.
        </p>
      </>
    )
    // removed buttons
  },
  { 
    id: 'n3', 
    category: 'MEMBERSHIP', 
    title: '2025 CMRA Memberships & Race Licences Now Available', 
    date: 'FEB 14, 2025',
    content: 'Alberta motorcycle road racing is accelerating!',
    body: (
      <>
        <p className="mb-4">
          Lap times are dropping. Competition is tightening. With <span className="font-bold text-white">Rocky Mountain Motorsports</span> back in Calgary, the CMRA is pushing forward – and we’re building the grid for 2025.
        </p>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">2025 Targets</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>100 Members</li>
          <li>65 Racers</li>
        </ul>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Pricing</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>CMRA Membership: $50</li>
          <li>Race Licence: $50</li>
        </ul>

        <p className="mb-6 mt-6">
          Support the greatest sport on earth and join the community with a{' '}
          <a 
            href="https://www.motorsportreg.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
          >
            CMRA Membership.
          </a>
        </p>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Why Become a Member</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Required to compete in all CMRA race events</li>
          <li>
            Access to racing at Alberta’s premier road course:{' '}
            <a 
               href="https://rockymotorsports.com/" 
               target="_blank" 
               rel="noreferrer" 
               className="text-[#dc2626] hover:text-[#F59E0B] transition-colors"
            >
               Rocky Mountain Motorsports Circuit
            </a>
          </li>
          <li>Support safety upgrades and keep race fees affordable</li>
          <li>Vote on leadership, rules, and the future of the club</li>
        </ul>

        <h4 className="font-bold text-white uppercase mb-2 mt-6">Race Licence Required</h4>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Mandatory for all CMRA practice and race events</li>
          <li>
            Reserve your race number
            <ul className="list-[circle] pl-5 mt-1 space-y-1 text-neutral-400">
              <li>Priority to CMRA licence holders</li>
              <li>Reciprocity licences may be asked to change numbers</li>
            </ul>
          </li>
        </ul>

        <p className="font-bold text-white italic mt-6">
          Join the grid. Join the community. Join road racing.
        </p>
      </>
    )
    // removed buttons
  },
  { 
    id: 'n4', 
    category: 'TRACK INFO', 
    title: 'Ride More @ RMM', 
    date: 'MAR 26, 2025',
    content: 'Rocky Mountain Motorsports Circuit is a private facility, with non-members limited to four track days per year.',
    body: (
      <>
        <p className="mb-4">
          <a 
            href="https://rockymotorsports.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
          >
            Rocky Mountain Motorsports Circuit
          </a> is a private facility, with non-members limited to four track days per year.
        </p>
        
        <p className="mb-4">
          And here’s the CMRA advantage: our Race School does *not* count toward your track-day limit.
        </p>

        <p className="mb-4">
          Turn this upcoming May Long weekend into track riding awesomeness at RMM:
        </p>

        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <a 
              href="https://www.motorsportreg.com/events/2025-cmra-race-school-rocky-mountain-motorsports-calgary-motorcycle-302577" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
            >
              Register for our CMRA Race School – May 15 & 16
            </a>
          </li>
          <li>
            <a 
              href="https://www.hardnoxtrackdayz.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#dc2626] font-bold hover:text-[#F59E0B] transition-colors underline decoration-red-500/30"
            >
              Register for a track day with our friends, Hardnox Trackdayz – May 17
            </a>
          </li>
        </ul>

        <p className="font-bold text-white italic">
          Seat time matters. This is how you get more of it.
        </p>
      </>
    )
    // removed links array
  }
];

export const getIcon = (name: string, size = 20) => {
  const props = { size, strokeWidth: 2, className: 'text-white' };
  switch (name) {
    case 'trophy': return <Trophy {...props} />;
    case 'flag': return <Flag {...props} />;
    case 'users': return <Users {...props} />;
    case 'clock': return <Clock {...props} />;
    case 'file': return <FileText {...props} />;
    case 'check': return <CheckCircle {...props} />;
    case 'briefcase': return <Briefcase {...props} />;
    default: return <Info {...props} />;
  }
};

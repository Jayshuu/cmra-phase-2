
import React from 'react';

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date?: string;
  content: string; // Used as preview/subheading
  body?: string | React.ReactNode;   // Full article text or React Component
  links?: { label: string; url: string }[]; // Action links from the PDF
}

export interface RaceRound {
  id: number;
  name: string;
  date: string;
  location: string;
  status: 'OPEN' | 'COMING SOON' | 'COMPLETED';
}

export interface ResourceLink {
  id: string;
  title: string;
  type: string;
  size: string;
  icon: string;
}

'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HomeIcon, QuestionMarkCircleIcon, ChartBarIcon, LightBulbIcon, CalculatorIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-blue-400">
        <span>🍩</span>
        <span>Donut Info</span>
      </Link>
      <div className="flex space-x-6 relative">
        <Link href="/how-it-works" className="flex items-center space-x-1 hover:text-blue-300">
          <QuestionMarkCircleIcon className="h-5 w-5" />
          <span>How It Works</span>
        </Link>
        <Link href="/getting-started" className="flex items-center space-x-1 hover:text-blue-300">
          <LightBulbIcon className="h-5 w-5" />
          <span>Getting Started</span>
        </Link>
        <div className="relative">
          <button onClick={() => setAnalyticsOpen(!analyticsOpen)} className="flex items-center space-x-1 hover:text-blue-300">
            <ChartBarIcon className="h-5 w-5" />
            <span>Analytics</span>
          </button>
          {analyticsOpen && (
            <div className="absolute top-full left-0 mt-2 bg-black/80 rounded-lg p-2 space-y-1 min-w-[200px]">
              <Link href="/analytics/apr" className="block p-2 hover:bg-blue-800/50">APR Tracker</Link>
              <Link href="/analytics/inflation" className="block p-2 hover:bg-blue-800/50">Inflation</Link>
              <Link href="/analytics/leaderboard" className="block p-2 hover:bg-blue-800/50">Leaderboard</Link>
              <Link href="/analytics/token" className="block p-2 hover:bg-blue-800/50">Token Metrics</Link>
            </div>
          )}
        </div>
        <Link href="/mining-strategy" className="flex items-center space-x-1 hover:text-blue-300">
          <UsersIcon className="h-5 w-5" />
          <span>Mining Strategy</span>
        </Link>
        <Link href="/calculator" className="flex items-center space-x-1 hover:text-blue-300">
          <CalculatorIcon className="h-5 w-5" />
          <span>Calculator</span>
        </Link>
        <Link href="/frontends" className="text-green-400 hover:text-green-300">Frontends</Link>
      </div>
    </nav>
  );
}

'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import ReferralGenerator from '../components/ReferralGenerator';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: prices } = useSWR('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', fetcher);

  const chartData = [{ name: 'Emissions', value: 55 }, { name: 'Burns', value: 45 }];
  const COLORS = ['#007BFF', '#0056b3'];

  return (
    <main className="min-h-screen">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-blue-900/20">
        <div className="text-center"><h2 className="text-2xl">${prices?.ethereum || 3800}</h2><p>ETH Price</p></div>
        <div className="text-center"><h2 className="text-2xl">$0.0021</h2><p>DONUT Price</p></div>
        <div className="text-center"><h2 className="text-2xl">8.2%</h2><p>Activity APR</p></div>
        <div className="text-center"><h2 className="text-2xl">12.1%</h2><p>Staking Yield</p></div>
      </section>

      <section className="text-center py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Donut Info Website</h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-4">
          A go-to website for DONUT protocol, the one you send to people to get started with DONUT mining.
        </p>
        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
          It should have links to all frontends. how it works. getting started process, analytics, mining strategy, simulator, calculator, you can also add donut mining to earn 5% referral fees.
        </p>
      </section>

      <section className="py-16 px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">How It Works</h3>
          <p className="text-blue-100">Learn DONUT basics.</p>
          <Link href="/how-it-works" className="block mt-4 text-blue-300 hover:underline">Explore →</Link>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Getting Started</h3>
          <p className="text-blue-100">Step-by-step guide.</p>
          <Link href="/getting-started" className="block mt-4 text-blue-300 hover:underline">Start Now →</Link>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Analytics</h3>
          <p className="text-blue-100">Real-time metrics.</p>
          <Link href="/analytics" className="block mt-4 text-blue-300 hover:underline">View Data →</Link>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Mining Strategy</h3>
          <p className="text-blue-100">Strategies & ROI tools.</p>
          <Link href="/mining-strategy" className="block mt-4 text-blue-300 hover:underline">Strategies →</Link>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Simulator</h3>
          <p className="text-blue-100">Test mining scenarios.</p>
          <Link href="/mining-strategy" className="block mt-4 text-blue-300 hover:underline">Simulate →</Link>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Calculator</h3>
          <p className="text-blue-100">EV & Buy vs Mine.</p>
          <Link href="/calculator" className="block mt-4 text-blue-300 hover:underline">Calculate →</Link>
        </div>
        <div className="bg-green-800/30 p-6 rounded-lg text-center col-span-2 lg:col-span-1">
          <ReferralGenerator />
        </div>
        <div className="bg-green-800/30 p-6 rounded-lg text-center col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold mb-2">All Frontends</h3>
          <p className="text-green-100">Links to DONUT tools.</p>
          <Link href="/frontends" className="block mt-4 text-green-300 hover:underline">Browse →</Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Inflation Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
              {chartData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </section>

      <footer className="bg-black/80 py-8 text-center border-t border-blue-500">
        <div className="flex justify-center items-center space-x-4 mb-2">
          <span>Bounty issued: thenetguy.eth 🖋️ 🕶️</span>
        </div>
        <p className="text-blue-300">0.25 ETH (950 USD)</p>
      </footer>
    </main>
  );
        }

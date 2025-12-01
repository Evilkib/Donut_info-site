'use client';
import { useState } from 'react';

export default function ReferralGenerator() {
  const [wallet, setWallet] = useState('');

  const generateLink = () => {
    const refLink = `https://donut-info-site.vercel.app/ref/${wallet}`;
    alert(`Your 5% referral link: ${refLink} – Earn fees on invites!`);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-2">Earn 5% Referral Fees</h3>
      <p className="text-green-100 mb-4">Add donut mining to earn 5% on invites.</p>
      <input
        type="text"
        placeholder="Enter your ETH wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className="p-2 bg-black text-white rounded mr-2"
      />
      <button onClick={generateLink} className="bg-green-600 px-4 py-2 rounded">
        Generate Link
      </button>
    </div>
  );
}

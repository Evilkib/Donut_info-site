export default function Frontends() {
  const frontends = [
    { name: 'Uniswap (Buy/Sell DONUT)', url: 'https://app.uniswap.org/#/swap?outputCurrency=0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9' },
    { name: 'Etherscan Explorer', url: 'https://etherscan.io/token/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9' },
    { name: 'DexScreener Charts', url: 'https://dexscreener.com/ethereum/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9' },
  ];

  return (
    <div className="py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">All DONUT Frontends & Tools</h1>
      <ul className="space-y-4">
        {frontends.map((f) => (
          <li key={f.name} className="bg-blue-800/30 p-4 rounded-lg">
            <a href={f.url} className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">{f.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

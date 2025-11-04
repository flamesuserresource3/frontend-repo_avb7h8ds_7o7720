import { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Learn from './components/Learn';
import Pricing from './components/Pricing';

function App() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full scroll-smooth bg-black text-white">
      <Hero onCTAClick={scrollToPricing} />
      <About />
      <Learn />
      {/* Anchor wrapper so CTA can scroll here precisely */}
      <div ref={pricingRef}>
        <Pricing />
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-black/90 py-10 text-sm text-neutral-300">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="font-medium text-white">Capital Code</div>
              <div className="mt-1 text-neutral-400">© 2025 Capital Code</div>
            </div>
            <div className="space-y-1">
              <div>Instagram: <a href="https://instagram.com/capital_code_" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300">@capital_code_</a></div>
              <div>Contact: <a href="mailto:contact@capitalcode.net" className="text-red-400 hover:text-red-300">contact@capitalcode.net</a></div>
            </div>
            <div className="sm:text-right">
              <div className="text-neutral-400">This workshop is educational. We do not provide investment advice.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

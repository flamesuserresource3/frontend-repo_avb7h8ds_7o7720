import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BASE_PRICE = 999;
const CAP_PRICE = 1999;
const CAP_USERS = 71; // After 71 users, reaches 1999
const MAX_SEATS = 250;

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export default function Pricing() {
  const [registrations, setRegistrations] = useState(0);
  const [seatsRemaining, setSeatsRemaining] = useState(MAX_SEATS);

  const price = useMemo(() => {
    const grown = Math.floor(BASE_PRICE * Math.pow(1.01, registrations));
    return Math.min(grown, CAP_PRICE);
  }, [registrations]);

  const progress = useMemo(() => {
    const p = (price - BASE_PRICE) / (CAP_PRICE - BASE_PRICE);
    return Math.max(0, Math.min(1, p));
  }, [price]);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scaleX: progress || 0.02, transition: { type: 'spring', stiffness: 120, damping: 20 } });
  }, [progress, controls]);

  const handleReserve = () => {
    setRegistrations((r) => Math.min(r + 1, CAP_USERS));
    setSeatsRemaining((s) => Math.max(0, s - 1));
  };

  return (
    <section id="pricing" className="relative w-full bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-24 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">Join the Masterclass</h2>

        {/* Dynamic price bar */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm uppercase tracking-wider text-neutral-400">Current Price</div>
              <div className="mt-1 text-4xl font-bold text-red-400">{formatINR(price)}</div>
            </div>
            <div className="text-right text-sm text-neutral-400">
              <div>Starts at {formatINR(BASE_PRICE)}</div>
              <div>Capped at {formatINR(CAP_PRICE)}</div>
            </div>
          </div>

          <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-red-500 via-red-400 to-white"
              initial={{ scaleX: 0.02 }}
              animate={controls}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-neutral-400">
            <span>0%</span>
            <span>Progress</span>
            <span>100%</span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-lg text-neutral-300">
              Seats Remaining: <span className="font-semibold text-white">{seatsRemaining}</span>
            </div>
            <button
              onClick={handleReserve}
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white shadow-[0_0_40px_-12px_rgba(220,38,38,0.8)] transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/60"
            >
              Reserve My Seat
              <span className="h-2 w-2 animate-ping rounded-full bg-white/80" />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-neutral-400">
            This is the first and last Capital Code Masterclass.
          </p>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onCTAClick }) {
  const videoRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient glows (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          The Capital Code Masterclass
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-3xl text-center text-base text-neutral-300 sm:text-lg"
        >
          The first and last masterclass to truly reveal how the markets work.
        </motion.p>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
        >
          <div className="relative aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
              title="Capital Code Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Soft glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>

        <motion.button
          onClick={onCTAClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-base font-medium text-white shadow-[0_0_40px_-10px_rgba(220,38,38,0.8)] transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/60"
        >
          <span className="relative">Reserve Your Seat Now</span>
          <span className="h-2 w-2 animate-ping rounded-full bg-white/80" />
        </motion.button>
      </div>
    </section>
  );
}

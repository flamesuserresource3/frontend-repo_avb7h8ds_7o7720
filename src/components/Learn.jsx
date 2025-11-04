import { motion } from 'framer-motion';
import { Search, LineChart, Shield } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Find companies before they make headlines',
    desc: 'Learn to surface asymmetric opportunities before they go mainstream.',
  },
  {
    icon: LineChart,
    title: 'Spot underlying market forces — not patterns or noise',
    desc: 'Read the tape beneath the charts and understand true drivers of motion.',
  },
  {
    icon: Shield,
    title: 'Uncover the strategies investment bankers use',
    desc: 'Structure insights the way professionals do — with edge and prudence.',
  },
];

export default function Learn() {
  return (
    <section id="learn" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          What You’ll Learn
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group perspective"
            >
              <div
                className="relative h-full transform-gpu rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-[0_0_60px_-20px_rgba(220,38,38,0.6)] transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_0_80px_-16px_rgba(220,38,38,0.9)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-red-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-red-400 ring-1 ring-inset ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const lines = [
  'For decades, private banks, hedge funds, investment banks and other financial corporations have been making 40–100% returns every single year for the ultra wealthy.',
  "We're here to change that.",
  "In just 3 months, we've reached over a million people and built a community of 10k.",
  "We never ask our clients to judge us by our winners, but by our losers — because we have so few.",
  'Finance is complex and full of jargon. So to give back, we\'ve decided to launch the Capital Code Masterclass.',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0"> 
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          About
        </motion.h2>

        <div className="mt-10 space-y-6">
          {lines.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-lg leading-relaxed text-neutral-300"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

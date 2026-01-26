'use client';

import { motion, Variants } from 'framer-motion';
import {
  ExternalLink,
  Mail,
  Terminal,
  Database,
  Layout,
  Server,
  Cpu,
  Code2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import morphify from '@/assets/morphify.png';
import velox from '@/assets/velox.png';
import { BsGithub, BsTwitterX } from 'react-icons/bs';

// Animation Variants
// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className='min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-purple-500/30 relative overflow-hidden'>
      {/* --- BACKGROUND EFFECTS --- */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
      </div>

      <div className='max-w-6xl mx-auto px-6 py-24 relative z-10'>
        {/* --- NAV PILL --- */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='flex justify-between items-center mb-24'>
          <div className='text-xl font-bold font-space tracking-tight text-white flex items-center gap-2'>
            <div className='w-8 h-8 bg-linear-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-xs'>
              EC
            </div>
            <span>Chidera.</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400'>
            <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            Open to Work
          </div>
        </motion.div>

        {/* --- HERO SECTION --- */}
        <motion.section
          initial='hidden'
          animate='visible'
          variants={staggerContainer}
          className='mb-32'>
          <motion.div
            variants={fadeInUp}
            className='relative inline-block mb-4'>
            <span className='absolute -inset-1 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 opacity-20 blur-lg'></span>
            <span className='relative px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-purple-300 flex items-center gap-2'>
              <Sparkles size={14} /> Fullstack Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className='text-6xl md:text-8xl font-bold font-space tracking-tight text-white mb-8 leading-[0.9]'>
            Building the <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-white via-white to-gray-500'>
              Next Generation
            </span>
            <br /> of Web Apps.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className='text-xl text-gray-400 max-w-2xl leading-relaxed mb-10'>
            I’m <b>Ebenebe Emmanuel Chidera</b>. I engineer pixel-perfect,
            scalable applications using
            <span className='text-white'> Next.js</span> and{' '}
            <span className='text-white'>Modern Architecture</span>. Bridging
            the gap between complex backends and fluid UI.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className='flex gap-4'>
            <Link
              href='mailto:ebenebechidera3@gmail.com'
              className='px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2'>
              <Mail size={18} /> Let's Talk
            </Link>
            <Link
              href='https://github.com/TheGrandGeiss'
              target='_blank'
              className='px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2'>
              <BsGithub size={18} /> GitHub
            </Link>
            <Link
              href='https://x.com/ChideraEbenebe'
              target='_blank'
              className='px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2'>
              <BsTwitterX size={18} /> Twitter | X
            </Link>
          </motion.div>
        </motion.section>

        {/* --- TECH STACK GRID --- */}
        <motion.section
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className='mb-40'>
          <motion.h2
            variants={fadeInUp}
            className='text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest'>
            Core Technologies
          </motion.h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              {
                icon: Layout,
                name: 'Next.js 15',
                color: 'group-hover:text-white',
              },
              {
                icon: Terminal,
                name: 'TypeScript',
                color: 'group-hover:text-blue-400',
              },
              {
                icon: Server,
                name: 'Auth.js v5',
                color: 'group-hover:text-green-400',
              },
              {
                icon: Database,
                name: 'Prisma ORM',
                color: 'group-hover:text-teal-400',
              },
              {
                icon: Database,
                name: 'MongoDB',
                color: 'group-hover:text-green-500',
              },
              {
                icon: Cpu,
                name: 'Tailwind CSS',
                color: 'group-hover:text-cyan-400',
              },
              {
                icon: Code2,
                name: 'React Server',
                color: 'group-hover:text-blue-300',
              },
              {
                icon: Sparkles,
                name: 'Framer Motion',
                color: 'group-hover:text-pink-400',
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className='group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 cursor-default relative overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                <tech.icon
                  className={`w-8 h-8 text-gray-500 mb-3 transition-colors ${tech.color}`}
                />
                <h3 className='font-medium text-gray-200'>{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- FEATURED WORK --- */}
        <section className='mb-32'>
          <div className='flex items-end justify-between mb-12'>
            <h2 className='text-4xl font-space font-bold text-white'>
              Selected Work
            </h2>
            <span className='hidden md:block h-px flex-1 bg-gray-800 mx-8 relative -top-2.5' />
            <Link
              href='https://github.com/TheGrandGeiss'
              className='text-sm font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1'>
              View All Repos <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className='space-y-24'>
            {/* Morphify Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='group relative grid md:grid-cols-2 gap-8 items-center'>
              <div className='order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 aspect-video'>
                <div className='absolute inset-0 bg-purple-500/20 z-10 group-hover:bg-transparent transition-colors duration-500' />
                <Image
                  src={morphify}
                  alt='Morphify Project'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              <div className='order-1 md:order-2 space-y-6'>
                <div className='flex items-center gap-3'>
                  <h3 className='text-3xl font-bold text-white'>Morphify</h3>
                  <span className='px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30'>
                    AI SaaS
                  </span>
                </div>
                <p className='text-gray-400 leading-relaxed text-lg'>
                  An intelligent SaaS platform for AI-driven image manipulation.
                  Users can remove backgrounds, generative fill, and recolor
                  objects in seconds. Built with a credit system and secure
                  auth.
                </p>
                <div className='flex flex-wrap gap-2 text-sm font-mono text-gray-500'>
                  <span>Next.js 15</span> • <span>Prisma</span> •{' '}
                  <span>Stripe</span> • <span>Better-Auth</span>
                </div>
                <div className='flex gap-4 pt-2'>
                  <Link
                    href='https://morphify-app.vercel.app'
                    target='_blank'
                    className='text-white hover:text-purple-400 font-medium flex items-center gap-2 transition-colors'>
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                  <Link
                    href='https://github.com/TheGrandGeiss/Morphify.ai'
                    target='_blank'
                    className='text-gray-500 hover:text-white flex items-center gap-2 transition-colors'>
                    <BsGithub size={18} /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Velox Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='group relative grid md:grid-cols-2 gap-8 items-center'>
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <h3 className='text-3xl font-bold text-white'>Velox.ai</h3>
                  <span className='px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded border border-green-500/30'>
                    AI Agent
                  </span>
                </div>
                <p className='text-gray-400 leading-relaxed text-lg'>
                  Natural language scheduling assistant. Forget date pickers,
                  just type "Lunch with Sarah tomorrow at 2pm" and Velox handles
                  the conflict detection and Google Calendar syncing
                  automatically.
                </p>
                <div className='flex flex-wrap gap-2 text-sm font-mono text-gray-500'>
                  <span>Gemini SDK</span> • <span>MongoDB</span> •{' '}
                  <span>Tailwind</span> • <span>NLP</span>
                </div>
                <div className='flex gap-4 pt-2'>
                  <Link
                    href='https://velox-ai-psi.vercel.app'
                    target='_blank'
                    className='text-white hover:text-green-400 font-medium flex items-center gap-2 transition-colors'>
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                  <Link
                    href='https://github.com/TheGrandGeiss/velox-ai'
                    target='_blank'
                    className='text-gray-500 hover:text-white flex items-center gap-2 transition-colors'>
                    <BsGithub size={18} /> Source Code
                  </Link>
                </div>
              </div>

              <div className='relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 aspect-video'>
                <div className='absolute inset-0 bg-green-500/20 z-10 group-hover:bg-transparent transition-colors duration-500' />
                <Image
                  src={velox}
                  alt='Velox Project'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className='border-t border-white/10 pt-12 pb-8 text-center'>
          <p className='text-gray-500 mb-4'>
            Designed & Engineered by{' '}
            <span className='text-white'>@TheGrandGeiss</span>
          </p>
          <div className='flex justify-center gap-6 text-gray-600'>
            <Link
              href='https://github.com/TheGrandGeiss'
              className='hover:text-white transition-colors'>
              GitHub
            </Link>
            <Link
              href='mailto:ebenebechidera3@gmail.com'
              className='hover:text-white transition-colors'>
              Email
            </Link>
            <Link
              href='#'
              className='hover:text-white transition-colors'>
              Twitter
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

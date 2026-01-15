'use client';

import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Mail,
  Terminal,
  Database,
  Layout,
  Server,
  Cpu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import morphify from '@/assets/morphify.png';
import { BsGithub } from 'react-icons/bs';

export default function Home() {
  return (
    <main className='min-h-screen max-w-5xl mx-auto px-6 py-20 font-sans selection:bg-purple-500/30'>
      {/* --- HERO SECTION --- */}
      <section className='mb-32 space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='flex items-center gap-3 text-purple-400 font-mono text-sm mb-4'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-500'></span>
            </span>
            Available for work
          </div>

          <h1 className='text-5xl md:text-7xl font-bold font-space tracking-tight text-white mb-6'>
            Ebenebe Emmanuel <span className='text-gray-500'>Chidera</span>
          </h1>

          <p className='text-xl text-gray-400 max-w-2xl leading-relaxed'>
            Fullstack Engineer focused on results. I help businesses scale by
            building robust, high-performance web applications using
            <span className='text-white font-medium'> Next.js</span> and
            <span className='text-white font-medium'> Modern Architecture</span>
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex gap-6'>
          <Link
            href='https://github.com/TheGrandGeiss'
            target='_blank'
            className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'>
            <Github size={20} />{' '}
            <span className='font-mono text-sm'>@TheGrandGeiss</span>
          </Link>
          <Link
            href='mailto:ebenebechidera3@gmail.com'
            className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'>
            <Mail size={20} />{' '}
            <span className='font-mono text-sm'>Contact Me</span>
          </Link>
        </motion.div>
      </section>

      {/* --- TECH STACK --- */}
      <section className='mb-32'>
        <h2 className='text-2xl font-space font-bold text-white mb-8 border-l-4 border-purple-500 pl-4'>
          Engineering Stack
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { icon: Layout, name: 'Next.js ', sub: 'App Router & SSR' },
            { icon: Layout, name: 'React', sub: 'Server Components' },
            { icon: Terminal, name: 'TypeScript', sub: 'Strict Typing' },
            { icon: Server, name: 'Auth.js (v5)', sub: 'Secure Auth' },
            { icon: Database, name: 'Prisma', sub: 'ORM' },
            { icon: Database, name: 'MongoDB', sub: 'NoSQL Database' },
            { icon: Cpu, name: 'Tailwind CSS', sub: 'Design System' },
            { icon: Server, name: 'Firebase', sub: 'Realtime DB' },
          ].map((tech, i) => (
            <div
              key={i}
              className='p-4 border border-gray-800 rounded-lg hover:border-purple-500/50 hover:bg-gray-900/50 transition-all group'>
              <tech.icon
                className='text-gray-500 group-hover:text-purple-400 mb-2'
                size={24}
              />
              <div className='font-bold text-gray-200'>{tech.name}</div>
              <div className='text-xs text-gray-500'>{tech.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED PROJECT (MORPHIFY) --- */}
      <section className='mb-32'>
        <h2 className='text-2xl font-space font-bold text-white mb-8 border-l-4 border-purple-500 pl-4'>
          Featured Work
        </h2>

        <div className='border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/20'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Left: Content */}
            <div className='p-8 flex flex-col justify-center'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-3xl font-bold text-white font-space'>
                  Morphify
                </h3>
                <span className='px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-mono border border-purple-500/20'>
                  AI SaaS
                </span>
              </div>

              <p className='text-gray-400 mb-6 leading-relaxed'>
                An intelligent SaaS platform for AI-driven image manipulation.
                Integrates generative AI to offer background removal, generative
                fill, and object recoloring. Features secure authentication and
                a robust credit system.
              </p>

              <div className='flex flex-wrap gap-2 mb-8'>
                {[
                  'Next.js',
                  'Better-Auth',
                  'Prisma',
                  'MongoDB',
                  'Tailwind',
                  'Stripe',
                ].map((tag) => (
                  <span
                    key={tag}
                    className='text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex gap-4'>
                <Link
                  href='https://morphify-app.vercel.app'
                  target='_blank'
                  className='flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors'>
                  <ExternalLink size={16} /> Live Demo
                </Link>
                <Link
                  href='https://github.com/TheGrandGeiss/Morphify.ai'
                  target='_blank'
                  className='flex items-center gap-2 text-white border border-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors'>
                  <BsGithub size={16} /> View Code
                </Link>
              </div>
            </div>

            {/* Right: Visual Placeholder */}
            <div className='bg-gray-800/50 min-h-75 md:min-h-full flex items-center justify-center border-l border-gray-800 relative group overflow-hidden'>
              {/* Replace this div with an <Image /> component of your screenshot later */}
              <Image
                src={morphify}
                alt='morphify landing page'
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className='border-t border-gray-800 pt-8 text-center text-gray-500 text-sm'>
        <p>© {new Date().getFullYear()} Ebenebe Emmanuel Chidera.</p>
        <p className='mt-2 font-mono'>Built by @TheGrandGeiss</p>
      </footer>
    </main>
  );
}

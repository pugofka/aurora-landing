'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <Section id="hero" className="h-screen min-h-[800px] flex flex-col pt-32 pb-12 overflow-hidden relative">

            {/* Background Layer - Fullscreen Image with specific blending */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/img/hero-bg.png"
                    alt="Construction Site"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                {/* Complex Gradient Mask to reveal text */}
                <div className="absolute inset-0 bg-gradient-to-b from-aurora-black via-transparent to-aurora-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-black/50 via-transparent to-aurora-black/50" />

                {/* Global Grain for this section */}
                <div className="absolute inset-0 opacity-20 bg-[url('/img/noise-texture.png')] mix-blend-overlay" />
            </div>

            <Container className="relative z-10 flex-1 flex flex-col justify-between">

                {/* TOP BAR INFO - Minimal */}
                <div className="flex justify-between items-start border-t border-aurora-white/20 pt-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hidden md:block"
                    >
                        <p className="font-mono text-xs text-aurora-orange uppercase tracking-widest mb-1">Завод</p>
                        <p className="font-display font-bold text-xl text-white">МЕТАЛЛОКОНСТРУКЦИЙ</p>
                    </motion.div>

                    {/* Removed English/Redundant Info */}
                    <div>
                        {/* Empty for balance or remove div entirely if not needed */}
                    </div>
                </div>

                {/* CENTER MONOLITH TITLE */}
                <div className="relative flex flex-col items-center justify-center flex-1 my-12">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, letterSpacing: "1em" }}
                        animate={{ opacity: 1, scale: 1, letterSpacing: "0em" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display font-bold text-[16vw] leading-[0.8] text-white uppercase text-center mix-blend-overlay"
                    >
                        АВРОРА
                    </motion.h1>

                    {/* Overlapping Solid Text for readability/effect */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute font-display font-bold text-[16vw] leading-[0.8] text-transparent text-stroked uppercase text-center pointer-events-none"
                        aria-hidden="true"
                    >
                        АВРОРА
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-6 font-mono text-sm md:text-base text-aurora-white/80 text-center max-w-lg leading-relaxed"
                    >
                        Металлоконструкции, которые приносят вашему бизнесу прибыль, а не проблемы.
                    </motion.p>
                </div>

                {/* BOTTOM CONTROLS */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <Button variant="primary" size="lg" className="rounded-none px-12 h-16 text-lg tracking-widest">
                            РАССЧИТАТЬ СМЕТУ
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="flex flex-col items-center gap-4 text-aurora-white/40"
                    >
                        <ArrowDown className="animate-bounce" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}

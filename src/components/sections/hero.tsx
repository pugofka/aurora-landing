'use client';


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

                {/* TOP BAR INFO - Heavy Border */}
                <div className="flex justify-between items-start border-t-4 border-aurora-orange pt-8">
                    <div className="hidden md:block">
                        <p className="font-mono text-sm text-aurora-orange font-bold uppercase tracking-widest mb-2">Завод</p>
                        <p className="font-display font-bold text-3xl text-white tracking-tight">МЕТАЛЛОКОНСТРУКЦИЙ</p>
                    </div>
                    <div className="text-right">
                        <p className="font-mono text-xs text-autora-white/50 uppercase tracking-widest">Est. 2008</p>
                    </div>
                </div>

                {/* CENTER HERO TEXT - MASSIVE & HEAVY */}
                <div className="relative flex flex-col items-start justify-center flex-1 my-12">
                    <h1 className="font-display font-bold text-[13vw] md:text-[9rem] leading-[0.85] text-white uppercase text-left tracking-tighter mix-blend-overlay opacity-90">
                        АВРОРА
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 mt-12 items-start border-l-4 border-white/20 pl-8">
                        <p className="font-mono text-base md:text-xl text-aurora-white/90 max-w-xl leading-relaxed">
                            Металлоконструкции, которые приносят бизнесу прибыль.
                            <br />
                            <span className="text-aurora-orange font-bold mt-2 block uppercase text-sm tracking-widest">
                                Проектирование / Производство / Монтаж
                            </span>
                        </p>
                    </div>
                </div>

                {/* BOTTOM CONTROLS */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 text-white w-full">
                    <div className="w-full md:w-auto">
                        <Button variant="primary" size="lg" className="w-full md:w-auto rounded-none px-16 h-20 text-xl font-bold tracking-widest bg-aurora-orange text-black hover:bg-white hover:text-black border-2 border-transparent hover:border-white transition-all">
                            РАССЧИТАТЬ СМЕТУ
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-aurora-white/40">
                        <ArrowDown className="animate-bounce" />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

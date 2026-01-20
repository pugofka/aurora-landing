'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

import Image from 'next/image';

const benefits = [
    'СКОРОСТЬ x2',
    'ИЗДЕРЖКИ -30%',
    'ГАРАНТИЯ 50 ЛЕТ'
];

export function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <Section id="about" className="py-40 bg-aurora-white text-aurora-black relative overflow-hidden">
            <Container ref={containerRef} className="relative">

                {/* 1. EDITORIAL HEADLINE */}
                <div className="relative z-10 mb-24 mix-blend-difference text-white">
                    <span className="block font-mono text-xs uppercase tracking-widest mb-4">О компании</span>
                    <h2 className="font-display font-medium text-[3rem] sm:text-[5rem] leading-[1.0] uppercase max-w-5xl">
                        Превращаем металл <br />
                        <span className="text-aurora-orange">в инструмент роста.</span>
                    </h2>
                </div>

                {/* 2. IMAGE & CONTENT GRID */}
                <div className="relative grid grid-cols-12 gap-8">

                    {/* Parallax Image */}
                    <motion.div style={{ y }} className="col-span-12 md:col-span-5 relative h-[600px] md:h-[800px] grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/img/welding-bg.png"
                            alt="Сварка металлоконструкций"
                            fill
                            className="object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-black/60 to-transparent" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div style={{ y: y2 }} className="col-span-12 md:col-span-6 md:col-start-7 pt-12 md:pt-32 relative z-20">
                        <div className="bg-aurora-black text-aurora-white p-8 md:p-12 md:-ml-24 shadow-2xl border-l-4 border-aurora-orange">
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-12 opactiy-90">
                                Наши металлоконструкции и металлоизделия создаются не просто «по чертежу», а под ключевые задачи заказчика: увеличить скорость строительства, снизить издержки, повысить надёжность объектов и дать долгий срок службы без лишних ремонтов.
                            </p>

                            <div className="space-y-8">
                                <div className="border-t border-aurora-white/20 pt-4">
                                    <h4 className="font-display text-xl uppercase text-aurora-orange mb-2">Полный цикл</h4>
                                    <p className="font-mono text-sm text-aurora-white/60">От разработки и расчётов до изготовления, покраски и доставки — всё в одном месте. Быстрее, проще, дешевле.</p>
                                </div>
                                <div className="border-t border-aurora-white/20 pt-4">
                                    <h4 className="font-display text-xl uppercase text-aurora-orange mb-2">Максимальная точность</h4>
                                    <p className="font-mono text-sm text-aurora-white/60">Современное оборудование и строгий контроль качества. Идеальная геометрия, быстрая сборка без ошибок.</p>
                                </div>
                                <div className="border-t border-aurora-white/20 pt-4">
                                    <h4 className="font-display text-xl uppercase text-aurora-orange mb-2">Сроки — закон</h4>
                                    <p className="font-mono text-sm text-aurora-white/60">Задержка — это потеря денег. Мы работаем по чёткому графику и всегда выполняем обязательства.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';

const steps = [
    { id: '01', title: 'АНАЛИЗ ТЗ', desc: 'Детальный разбор чертежей и нагрузок.' },
    { id: '02', title: 'ПРОЕКТ', desc: 'Разработка КМД в средах BIM/CAD.' },
    { id: '03', title: 'ЗАКУПКА', desc: 'Прямые поставки металла с комбинатов.' },
    { id: '04', title: 'ПРОИЗВОДСТВО', desc: 'Лазерная резка, роботизированная сварка.' },
    { id: '05', title: 'КОНТРОЛЬ', desc: 'УЗК-дефектоскопия каждого шва.' },
    { id: '06', title: 'МОНТАЖ', desc: 'Собственные бригады и техника.' },
];

export function Process() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} id="process" className="relative h-[300vh] bg-aurora-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* SECTION LABEL */}
                <div className="absolute top-12 left-12 z-20">
                    <p className="font-mono text-xs uppercase tracking-widest text-aurora-orange mb-2">/ Процесс</p>
                    <h2 className="font-display text-4xl text-white uppercase">Производственный цикл</h2>
                </div>

                <motion.div style={{ x }} className="flex gap-0">
                    {/* Intro Block */}
                    <div className="w-[40vw] h-[60vh] shrink-0 flex items-center justify-center border-r border-aurora-white/10 ml-[10vw]">
                        <span className="text-aurora-white/20 font-display text-8xl uppercase rotate-90">СТАРТ</span>
                    </div>

                    {steps.map((step) => (
                        <div key={step.id} className="w-[60vw] h-[60vh] shrink-0 border-r border-aurora-white/10 flex flex-col justify-between p-12 md:p-24 relative hover:bg-aurora-white/5 transition-colors group">
                            {/* Number */}
                            <span className="font-display font-medium text-[10rem] md:text-[15rem] leading-none text-aurora-white/5 group-hover:text-aurora-orange/20 transition-colors">
                                {step.id}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="font-display font-bold text-4xl md:text-6xl uppercase text-white mb-6">
                                    {step.title}
                                </h3>
                                <div className="w-24 h-[1px] bg-aurora-orange mb-6" />
                                <p className="font-mono text-lg text-aurora-white/60 max-w-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Outro Block */}
                    <div className="w-[40vw] h-[60vh] shrink-0 flex items-center justify-center">
                        <span className="text-aurora-orange font-display text-8xl uppercase rotate-90">СДАЧА</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

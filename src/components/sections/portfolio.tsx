'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; // Added Image import

const projects = [
    {
        id: '01',
        title: 'Верстаки / Хранение',
        image: '/img/projects/workbench.jpg',
        desc: 'Проектирование и изготовление модульных систем хранения.'
    },
    {
        id: '02',
        title: 'Блочно-модульные здания',
        image: '/img/projects/container.jpg',
        desc: 'Производство контейнерных блоков с полной отделкой.'
    },
    {
        id: '03',
        title: 'Фермы покрытия',
        image: '/img/projects/truss.jpg',
        desc: 'Изготовление ферм для логистического терминала.'
    },
];

export function Portfolio() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <Section id="portfolio" className="bg-aurora-black py-32 z-20 relative">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <h2 className="text-4xl md:text-6xl font-display font-medium uppercase leading-[0.9]">
                        Наши <br />
                        <span className="text-aurora-orange">Проекты</span>
                    </h2>
                    <div className="text-right hidden md:block">
                        <p className="text-aurora-white/60 font-mono text-sm max-w-xs mb-8">
                            МЫ СОЗДАЕМ ОБЪЕКТЫ, КОТОРЫЕ ФОРМИРУЮТ ЛАНДШАФТ ПРОМЫШЛЕННОСТИ.
                        </p>
                        <Button variant="outline">Смотреть все кейсы</Button>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="flex flex-col gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative border-t border-aurora-white/20 pt-8 md:pt-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                {/* ID */}
                                <div className="col-span-1 md:col-span-1">
                                    <span className="font-mono text-xs text-aurora-orange uppercase tracking-widest">
                                        /{project.id}
                                    </span>
                                </div>

                                {/* Title & Info */}
                                <div className="col-span-1 md:col-span-4 z-10">
                                    <h3 className="font-display font-medium text-3xl md:text-5xl uppercase text-aurora-white mb-4 group-hover:text-aurora-orange transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* IMAGE */}
                                <div className="col-span-1 md:col-span-7 relative h-[300px] md:h-[400px] overflow-hidden bg-aurora-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-aurora-black/80 to-transparent opacity-60" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="font-mono text-sm md:text-base text-aurora-white leading-relaxed max-w-lg">
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

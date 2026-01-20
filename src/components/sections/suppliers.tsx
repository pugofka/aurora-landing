'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';

const suppliers = [
    { name: 'ТМК', logo: '/img/clients/tmk.png' },
    { name: 'Северсталь', logo: '/img/clients/severstal.png' },
    { name: 'ОМК', logo: '/img/clients/omk.png' },
    { name: 'ММК', logo: '/img/clients/mmk.png' },
    { name: 'Мечел', logo: '/img/clients/mechel.png' },
];

export function Suppliers() {
    return (
        <section className="bg-aurora-white py-12 border-y-4 border-aurora-black overflow-hidden relative">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none mix-blend-multiply bg-[length:100%_4px]" />

            <div className="flex gap-16 md:gap-32 animate-marquee whitespace-nowrap items-center">
                {[...suppliers, ...suppliers, ...suppliers, ...suppliers].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 shrink-0 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                        {/* Logo Image */}
                        <div className="relative w-24 h-12 md:w-32 md:h-16">
                            <Image
                                src={s.logo}
                                alt={s.name}
                                fill
                                className="object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

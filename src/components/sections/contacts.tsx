'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Copy } from 'lucide-react';
import Image from 'next/image';

export function Contacts() {
    return (
        <Section id="contacts" className="bg-aurora-orange relative overflow-hidden pt-24 pb-12 flex flex-col justify-between min-h-screen text-aurora-black selection:bg-black selection:text-white">

            {/* Background Grain */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('/img/noise-texture.png')]" />

            <Container className="relative z-10 flex-1 flex flex-col">

                {/* Header */}
                <div className="border-b-4 border-aurora-black pb-8 mb-16">
                    <h2 className="font-display font-medium text-[3rem] md:text-[5rem] leading-[0.9] uppercase tracking-tighter text-aurora-black">
                        Рассчитать <br />
                        Проект
                    </h2>
                </div>

                {/* Content Grid: Form & Contacts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-auto">

                    {/* LEFT: FORM */}
                    <div className="bg-aurora-black p-8 md:p-12 text-aurora-white shadow-2xl">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-aurora-orange">Ваше имя</label>
                                <input type="text" className="w-full bg-transparent border-b border-aurora-white/20 py-3 focus:outline-none focus:border-aurora-orange transition-colors font-display text-xl uppercase" placeholder="Иван Иванов" />
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-aurora-orange">Телефон</label>
                                <input type="tel" className="w-full bg-transparent border-b border-aurora-white/20 py-3 focus:outline-none focus:border-aurora-orange transition-colors font-display text-xl uppercase" placeholder="+7 (999) 000-00-00" />
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-aurora-orange">Комментарий</label>
                                <textarea rows={2} className="w-full bg-transparent border-b border-aurora-white/20 py-3 focus:outline-none focus:border-aurora-orange transition-colors font-mono text-sm" placeholder="Опишите задачу..." />
                            </div>


                            <Button className="w-full bg-aurora-orange text-aurora-black hover:bg-white hover:text-black">
                                Отправить заявку
                            </Button>
                        </form>
                    </div>

                    {/* RIGHT: INFO */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-12">
                            <div className="group cursor-pointer">
                                <p className="font-mono text-sm font-bold uppercase tracking-widest mb-2 opacity-80 text-aurora-black">Почта</p>
                                <a href="mailto:105@td-avrora.ru" className="font-display text-3xl md:text-5xl uppercase hover:underline decoration-4 underline-offset-8 text-aurora-black block break-all">
                                    105@td-avrora.ru
                                </a>
                            </div>

                            <div className="group cursor-pointer">
                                <p className="font-mono text-sm font-bold uppercase tracking-widest mb-2 opacity-80 text-aurora-black">Телефон</p>
                                <a href="tel:89006476606" className="font-display text-3xl md:text-5xl uppercase hover:underline decoration-4 underline-offset-8 text-aurora-black">
                                    8 (900) 647-66-06
                                </a>
                            </div>
                        </div>

                        <div className="font-mono text-lg md:text-xl leading-relaxed mt-12 text-aurora-black font-medium">
                            <p className="mb-8">
                                <strong>Офис:</strong><br />
                                Санкт-Петербург, Ул. Губина д.16А, помещ. 68
                            </p>
                            <p>
                                <strong>Производство:</strong><br />
                                Санкт-Петербург, ул. Челябинская 160
                            </p>
                        </div>
                    </div>
                </div>

                {/* Giant Footer Links */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t-4 border-aurora-black pt-8 mt-24 text-aurora-black">
                    <div className="flex gap-8 font-mono text-sm uppercase tracking-widest font-bold">
                        <a href="#" className="hover:bg-aurora-black hover:text-aurora-orange px-2 py-1 transition-colors border border-transparent hover:border-aurora-black">Telegram</a>
                        <a href="#" className="hover:bg-aurora-black hover:text-aurora-orange px-2 py-1 transition-colors border border-transparent hover:border-aurora-black">WhatsApp</a>
                        <a href="#" className="hover:bg-aurora-black hover:text-aurora-orange px-2 py-1 transition-colors border border-transparent hover:border-aurora-black">ВКонтакте</a>
                    </div>
                    <div className="text-right mt-8 md:mt-0">
                        <p className="font-mono text-xs uppercase tracking-widest opacity-80 font-bold">© ЗМК АВРОРА 2008-2025</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

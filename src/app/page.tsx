import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Suppliers } from "@/components/sections/suppliers";
import { Contacts } from "@/components/sections/contacts";

export default function Home() {
  return (
    <main className="relative bg-aurora-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Process />
      <Portfolio />
      <Suppliers />
      <Contacts />

      <footer className="py-20 border-t border-aurora-white/5 bg-aurora-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                <a href="#" className="hover:text-aurora-orange transition-colors">Telegram</a>
                <a href="#" className="hover:text-aurora-orange transition-colors">WhatsApp</a>
                <a href="#" className="hover:text-aurora-orange transition-colors">ВКонтакте</a>
              </div>
              
              <div className="flex items-start gap-8">
                <Image 
                  src="/img/pugofka.svg" 
                  alt="Pugofka" 
                  width={80} 
                  height={80} 
                  className="mt-1 opacity-40 grayscale brightness-200 shrink-0"
                />
                <div className="space-y-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-relaxed text-white/50">
                  <p>
                    © 2008-2026 ЗМК АВРОРА // Все права защищены. Копирование информации преследуется по закону. Статья 146 УК РФ.
                  </p>
                  <p>
                    Вся информация на сайте носит ИСКЛЮЧИТЕЛЬНО ознакомительный характер и может отличаться от официальных источников. Просьба запрашивать информацию у Вашего персонального менеджера.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

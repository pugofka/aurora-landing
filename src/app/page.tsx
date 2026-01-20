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

      {/* Footer minimal */}
      <footer className="py-8 border-t border-aurora-white/10 text-center text-aurora-white/40 text-sm font-mono uppercase tracking-widest">
        © 2026 ЗМК АВРОРА
      </footer>
    </main>
  );
}

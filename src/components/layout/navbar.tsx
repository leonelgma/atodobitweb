"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkCls = (href: string) =>
    `opacity-80 hover:opacity-100 ${pathname === href ? "opacity-100" : ""}`;

  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20">
      <nav className="glass mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-widest">
          ATODOBIT
        </Link>

        <div className="hidden sm:flex gap-4 text-sm">
          <Link href="/servicios" className={linkCls("/servicios")}>Servicios</Link>
          <Link href="/proyectos" className={linkCls("/proyectos")}>Proyectos</Link>
          <Link href="/contacto" className={linkCls("/contacto")}>Contacto</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="hidden sm:inline-block text-xs md:text-sm rounded-full px-4 py-2 bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/30 border border-cyan-400/30 transition-colors">
            Entrar
          </Link>
          <Link href="/contacto" className="hidden sm:inline-block text-xs md:text-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/5 transition-colors">
            Hablemos
          </Link>
          <button
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="sm:hidden rounded-xl border border-cyan/20 px-3 py-2 hover:bg-cyan/5"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="block w-5 h-0.5 bg-cyan-500 mb-1" />
            <span className="block w-5 h-0.5 bg-cyan-500 mb-1" />
            <span className="block w-5 h-0.5 bg-cyan-500" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="sm:hidden mx-auto w-[92%] max-w-6xl">
          <div className="glass mt-2 rounded-2xl px-6 py-4 flex flex-col gap-3 text-sm">
            <Link onClick={close} href="/servicios" className="opacity-90">Servicios</Link>
            <Link onClick={close} href="/proyectos" className="opacity-90">Proyectos</Link>
            <Link onClick={close} href="/contacto" className="opacity-90">Contacto</Link>
            <Link onClick={close} href="/auth/login" className="rounded-full px-4 py-2 bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 border border-cyan-400/30 text-center">Entrar</Link>
            <Link onClick={close} href="/contacto" className="rounded-full px-4 py-2 border border-white/20 hover:bg-white/5 text-center">Hablemos</Link>
          </div>
        </div>
      )}
    </header>
  );
}

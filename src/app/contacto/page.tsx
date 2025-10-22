export const metadata = { title: "Contacto | AtodoBit" };

export default function ContactoPage() {
  return (
    <section className="py-12 sm:py-16 text-center">
      <h1 className="text-2xl font-semibold">¿Construimos algo juntos?</h1>
      <p className="mt-2 opacity-80 text-base md:text-lg">Escríbeme y agenda una llamada.</p>
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:contacto@atodobit.com" className="rounded-full px-5 py-3 border border-white/20 hover:bg-white/5">Email</a>
        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="rounded-full px-5 py-3 border border-white/20 hover:bg-white/5">WhatsApp</a>
        <a href="#" className="rounded-full px-5 py-3 bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 border border-cyan-400/30">Agendar demo</a>
      </div>
    </section>
  );
}

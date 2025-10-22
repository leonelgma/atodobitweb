import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export const metadata = { title: "Proyectos | AtodoBit" };

export default function ProyectosPage() {
  const proyectos = [
    { name: "Nebula CRM", summary: "CRM B2B con módulos de ventas y reportes en tiempo real.", stack: "Next.js, PostgreSQL, Prisma", link: "#" },
    { name: "Orion Pay", summary: "Pasarela de pago con conciliación automática y webhooks.", stack: "Node.js, Stripe, Redis", link: "#" },
    { name: "Atlas ERP", summary: "Inventario y órdenes con integraciones a marketplaces.", stack: "NestJS, MySQL, RabbitMQ", link: "#" },
    { name: "Quasar BI", summary: "Dashboard ejecutivo con KPIs y alertas proactivas.", stack: "Next.js, ClickHouse, Tailwind", link: "#" },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-[92%] max-w-6xl">
        <section className="py-12 sm:py-16">
          <h1 className="text-2xl font-semibold">Proyectos recientes</h1>
          <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
            {proyectos.map(p => (
              <a key={p.name} href={p.link} className="glass rounded-2xl p-6 block hover:translate-y-[-2px] transition-transform">
                <div className="text-sm opacity-75">{p.name}</div>
                <div className="mt-2 text-sm opacity-90 leading-relaxed">{p.summary}</div>
                <div className="mt-3 text-xs opacity-60">{p.stack}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

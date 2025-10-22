"use client";
import Image from "next/image";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

type Video = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  duration: string;
  views: string;
  publishedAt: string;
  thumbnail: string;
  href: string;
};

export default function Home() {
  const videos: Video[] = [
    {
      id: "nebula-crm",
      title: "Nebula CRM: pipeline de ventas en 20 min",
      description: "Configura un CRM B2B con etapas, reportes y panel en tiempo real.",
      stack: ["Next.js", "PostgreSQL", "Prisma"],
      duration: "12:48",
      views: "3.2K",
      publishedAt: "Oct 2025",
      thumbnail: "/images/thumbs/nebula.jpg", // reemplaza por tu ruta/URL
      href: "#",
    },
    {
      id: "orion-pay",
      title: "Orion Pay: webhooks y conciliación sin dolor",
      description: "Implementa pagos, idempotencia y reconcilia con planillas automáticas.",
      stack: ["Node.js", "Stripe", "Redis"],
      duration: "18:06",
      views: "5.9K",
      publishedAt: "Sep 2025",
      thumbnail: "/images/thumbs/orion.jpg",
      href: "#",
    },
    {
      id: "atlas-erp",
      title: "Atlas ERP: inventario + marketplaces",
      description: "Catálogo, órdenes y sincronización con múltiples canales de venta.",
      stack: ["NestJS", "MySQL", "RabbitMQ"],
      duration: "22:11",
      views: "1.1K",
      publishedAt: "Sep 2025",
      thumbnail: "/images/thumbs/atlas.jpg",
      href: "#",
    },
    {
      id: "quasar-bi",
      title: "Quasar BI: KPIs con alertas proactivas",
      description: "Mide tus métricas con dashboards reactivos y thresholds inteligentes.",
      stack: ["Next.js", "ClickHouse", "Tailwind"],
      duration: "15:32",
      views: "4.4K",
      publishedAt: "Aug 2025",
      thumbnail: "/images/thumbs/quasar.jpg",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto w-[92%] max-w-6xl">
        {/* Hero */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Descubre cómo crear <span className="text-cyan-400">sitios web modernos</span>
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto opacity-80 text-base md:text-lg">
            Aprende con videos prácticos: del setup al despliegue, paso a paso.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
            <a
              href="#servicios"
              className="rounded-full px-5 py-3 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-600/30 border border-cyan-400/30"
            >
              Ver servicios
            </a>
            <a
              href="#videos"
              className="rounded-full px-5 py-3 border border-white/20 hover:bg-white/5"
            >
              Videos
            </a>
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="py-12 sm:py-16">

          <div className="mt-6 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a
                key={v.id}
                href={v.href}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors bg-white/5 backdrop-blur-sm"
                aria-label={`Ver video: ${v.title}`}
              >
                {/* Thumb */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={v.thumbnail}
                    alt={`Miniatura: ${v.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                  {/* Degradado y duración */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold leading-snug line-clamp-2">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm opacity-75 leading-relaxed line-clamp-2">
                    {v.description}
                  </p>

                  {/* Métricas */}
                  <div className="mt-4 flex items-center justify-between text-xs opacity-70">
                    <div className="flex items-center gap-3">
                      <span>{v.publishedAt}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Contet
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

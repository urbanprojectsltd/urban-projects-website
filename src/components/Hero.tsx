import { site } from '../site'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center bg-cover bg-center pt-16"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero.jpg)` }}
    >
      {/* Light tint for text contrast, fading to white to blend into the next section */}
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="container-site relative py-24 text-center">
        <p className="section-kicker drop-shadow">{site.tagline}</p>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-6xl">
          {site.promise}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white drop-shadow">
          Full home renovations, extensions, kitchens, bathrooms, plumbing and tiling across{' '}
          {site.area}. Quality work, honest pricing and results you can trust.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Get a Free Quote
          </a>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-[#25D366] px-7 py-3.5 font-display font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="inline-block rounded border border-white/70 px-7 py-3.5 font-display font-bold uppercase tracking-wide text-white drop-shadow transition-colors hover:border-brand hover:text-brand"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

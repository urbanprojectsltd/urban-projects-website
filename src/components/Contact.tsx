import { site } from '../site'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-site max-w-2xl">
        <p className="section-kicker">Get Started</p>
        <h2 className="section-title">Ready to Start Your Project?</h2>
        <p className="mt-5 max-w-md leading-relaxed text-charcoal/70">
          Whether it is a full renovation, an extension or just some honest advice, we are happy
          to help. Get a no-obligation quote today.
        </p>
        <div className="mt-8 space-y-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="block font-display text-2xl font-bold text-brand"
          >
            {site.phone}
            <span className="ml-3 align-middle text-sm font-normal text-charcoal/60">Office</span>
          </a>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-display text-2xl font-bold text-[#1DA851]"
          >
            {site.whatsapp}
            <span className="ml-3 align-middle text-sm font-normal text-charcoal/60">WhatsApp</span>
          </a>
          <a href={`mailto:${site.email}`} className="block text-charcoal/80 hover:text-brand">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}

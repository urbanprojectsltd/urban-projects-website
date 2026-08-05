import { site } from '../site'

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-gray-50">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2.5 font-display text-lg font-extrabold uppercase tracking-wider">
            <img src={`${import.meta.env.BASE_URL}logo-hands.png`} alt="" className="h-6 w-auto" />
            <span>
              Urban<span className="text-brand">Projects</span>
            </span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            {site.tagline}
            <br />
            Serving {site.area}.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-wide text-charcoal/90">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/60">
            <li><a href="#top" className="hover:text-brand">Home</a></li>
            <li><a href="#why-us" className="hover:text-brand">About</a></li>
            <li><a href="#contact" className="hover:text-brand">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-wide text-charcoal/90">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/60">
            <li><a href="#services" className="hover:text-brand">Renovations &amp; Extensions</a></li>
            <li><a href="#services" className="hover:text-brand">Kitchens &amp; Bathrooms</a></li>
            <li><a href="#services" className="hover:text-brand">Electrical &amp; Plumbing</a></li>
            <li><a href="#services" className="hover:text-brand">Tiling &amp; Flooring</a></li>
            <li><a href="#services" className="hover:text-brand">Central Heating</a></li>
            <li><a href="#services" className="hover:text-brand">Painting &amp; Repairs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-wide text-charcoal/90">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/60">
            {site.address && <li>{site.address}</li>}
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-brand">
                {site.phone} (Office)
              </a>
            </li>
            <li>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {site.whatsapp} (WhatsApp)
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10 py-5 text-center text-xs text-charcoal/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}

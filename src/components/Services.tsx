const services = [
  {
    title: 'Full Home Renovations & Extensions',
    description:
      'Complete renovations and extensions, from single rooms to whole homes, finished to a standard you will be proud of.',
  },
  {
    title: 'Kitchens & Bathrooms',
    description:
      'Kitchen and bathroom refits designed around how you live, fitted properly and built to last.',
  },
  {
    title: 'Electrical & Plumbing',
    description:
      'Safe, reliable electrical and plumbing work, from small fixes to full rewires and repipes.',
  },
  {
    title: 'Tiling & Flooring',
    description:
      'Precise tiling and flooring in every style, laid with the care that makes the whole room.',
  },
  {
    title: 'Central Heating',
    description:
      'Central heating installation and servicing that keeps your home comfortable all year round.',
  },
  {
    title: 'Painting & Repairs',
    description:
      'Clean, tidy painting and general repairs, the finishing touches done right.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="section-kicker">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-charcoal/10 bg-white p-8 transition-colors hover:border-brand/60"
            >
              <div className="mb-5 h-1 w-10 bg-brand transition-all group-hover:w-16" />
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70">{service.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-brand"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

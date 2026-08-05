// TODO: swap in real client reviews (Google reviews work well here)
const testimonials = [
  {
    quote:
      'The team were professional from day one. The work was finished on time, the site was left spotless and the quality speaks for itself.',
    name: 'Andreas',
  },
  {
    quote:
      'Clear pricing, honest advice and no surprises. We knew exactly where we stood at every stage of the project.',
    name: 'Georgina',
  },
  {
    quote:
      'We have already recommended Urban Projects to friends and family. The finish on our extension is superb.',
    name: 'Jake',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="section-kicker">What Our Clients Say</p>
          <h2 className="section-title">Trusted by Homeowners Across Cyprus</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-lg border border-charcoal/10 bg-gray-50 p-8">
              <span className="font-display text-4xl font-extrabold leading-none text-brand">
                &ldquo;
              </span>
              <blockquote className="mt-2 leading-relaxed text-charcoal/80">{t.quote}</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-charcoal/60">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

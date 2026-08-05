const reasons = [
  {
    title: 'Quality Work',
    description:
      'Every job is finished with care, using proper materials and proven methods that stand the test of time.',
  },
  {
    title: 'Honest Pricing',
    description:
      'We come out, look at the job and give you a clear, no-obligation quote. No pressure, no hidden extras.',
  },
  {
    title: 'Results You Can Trust',
    description:
      'When we say we will be there, we are, and we do not call a job done until you are happy with it.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="section-kicker">Why Urban Projects</p>
          <h2 className="section-title">Why People Choose Us</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto mb-5 h-1 w-10 bg-brand" />
              <h3 className="font-display text-xl font-bold">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

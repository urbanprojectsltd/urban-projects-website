const steps = [
  {
    num: '01',
    title: 'Free Quote',
    description:
      'We visit, look at the job properly and give you a clear written quote, with no obligation and no hidden extras.',
  },
  {
    num: '02',
    title: 'Plan & Agree',
    description:
      'We agree the scope, the materials and a realistic timeline, so you know exactly what to expect before we start.',
  },
  {
    num: '03',
    title: 'We Build',
    description:
      'Our team gets to work, keeps the site tidy and keeps you updated at every stage of the project.',
  },
  {
    num: '04',
    title: 'Handover',
    description:
      'We walk through the finished work together, and we do not call it done until you are completely happy.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="section-kicker">How It Works</p>
          <h2 className="section-title">How We Work</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="font-display text-5xl font-extrabold text-brand/20">{step.num}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

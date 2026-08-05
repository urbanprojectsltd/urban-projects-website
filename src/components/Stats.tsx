// TODO: set these to the real figures once confirmed.
const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '250+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Focused' },
  { value: 'Fully', label: 'Insured & Qualified' },
]

export default function Stats() {
  return (
    <section className="bg-charcoal py-14 text-white">
      <div className="container-site grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-wide text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

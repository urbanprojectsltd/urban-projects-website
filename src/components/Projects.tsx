import { useState } from 'react'

// Real project photos live in /public. Featured shots carry a title; the rest
// show just their category tag. Swap, reorder or retitle any time.
const projects = [
  { title: 'Country Kitchen', tag: 'Kitchens', image: '/proj-05.jpg' },
  { title: 'Kitchen Island', tag: 'Kitchens', image: '/proj-12.jpg' },
  { title: 'Bespoke Kitchen', tag: 'Kitchens', image: '/proj-30.jpg' },
  { title: 'Belfast Kitchen', tag: 'Kitchens', image: '/proj-31.jpg' },
  { title: 'Shaker Kitchen & Range', tag: 'Kitchens', image: '/proj-65.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-21.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-22.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-41.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-42.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-47.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-62.jpg' },
  { title: '', tag: 'Kitchens', image: '/proj-75.jpg' },
  { title: 'Marble Bathroom Suite', tag: 'Bathrooms', image: '/proj-08.jpg' },
  { title: 'Feature Tiled Shower', tag: 'Bathrooms', image: '/proj-35.jpg' },
  { title: 'Classic Bathroom', tag: 'Bathrooms', image: '/proj-46.jpg' },
  { title: 'Double Vanity Suite', tag: 'Bathrooms', image: '/proj-59.jpg' },
  { title: 'Wet Room', tag: 'Bathrooms', image: '/proj-63.jpg' },
  { title: 'Freestanding Bath', tag: 'Bathrooms', image: '/proj-68.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-02.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-04.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-06.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-07.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-09.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-10.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-11.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-14.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-15.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-19.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-23.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-24.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-25.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-26.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-28.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-37.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-39.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-40.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-43.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-45.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-49.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-52.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-54.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-55.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-66.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-67.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-70.jpg' },
  { title: '', tag: 'Bathrooms', image: '/proj-73.jpg' },
  { title: 'Hallway Refit', tag: 'Renovations', image: '/proj-03.jpg' },
  { title: 'Ceiling Rose & Lighting', tag: 'Renovations', image: '/proj-27.jpg' },
  { title: 'Period Restoration', tag: 'Renovations', image: '/proj-48.jpg' },
  { title: 'Full Home Renovation', tag: 'Renovations', image: '/proj-58.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-00.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-29.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-32.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-36.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-44.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-60.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-61.jpg' },
  { title: '', tag: 'Renovations', image: '/proj-76.jpg' },
  { title: 'Utility Extension', tag: 'Extensions', image: '/proj-34.jpg' },
  { title: 'Extension & Exterior', tag: 'Extensions', image: '/proj-64.jpg' },
  { title: '', tag: 'Extensions', image: '/proj-18.jpg' },
  { title: '', tag: 'Extensions', image: '/proj-33.jpg' },
  { title: '', tag: 'Extensions', image: '/proj-69.jpg' },
  { title: 'Central Heating', tag: 'Central Heating', image: '/proj-57.jpg' },
  { title: '', tag: 'Central Heating', image: '/proj-01.jpg' },
  { title: '', tag: 'Central Heating', image: '/proj-38.jpg' },
  { title: '', tag: 'Central Heating', image: '/proj-51.jpg' },
  { title: '', tag: 'Central Heating', image: '/proj-56.jpg' },
  { title: 'Tiling & Flooring', tag: 'Tiling', image: '/proj-13.jpg' },
  { title: 'Feature Floor Tiling', tag: 'Tiling', image: '/proj-53.jpg' },
  { title: '', tag: 'Tiling', image: '/proj-20.jpg' },
  { title: '', tag: 'Tiling', image: '/proj-50.jpg' },
  { title: 'Outdoor Kitchen', tag: 'Outdoor', image: '/proj-16.jpg' },
  { title: '', tag: 'Outdoor', image: '/proj-17.jpg' },
  { title: '', tag: 'Outdoor', image: '/proj-71.jpg' },
  { title: '', tag: 'Outdoor', image: '/proj-74.jpg' },
]

// One cover image per category for the landing grid.
const categories = [
  { name: 'Kitchens', cover: '/proj-65.jpg' },
  { name: 'Bathrooms', cover: '/proj-46.jpg' },
  { name: 'Renovations', cover: '/proj-48.jpg' },
  { name: 'Extensions', cover: '/proj-64.jpg' },
  { name: 'Central Heating', cover: '/proj-57.jpg' },
  { name: 'Tiling', cover: '/proj-53.jpg' },
  { name: 'Outdoor', cover: '/proj-16.jpg' },
]

export default function Projects() {
  const [active, setActive] = useState<string | null>(null)
  const shown = active ? projects.filter((p) => p.tag === active) : []

  return (
    <section id="projects" className="py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="section-kicker">Our Work</p>
          <h2 className="section-title">{active ?? 'Our Work'}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-charcoal/70">
            {active
              ? `${shown.length} ${active.toLowerCase()} project${shown.length === 1 ? '' : 's'} across Cyprus.`
              : 'Browse our finished work by the service you need. Every project is finished to a standard we are proud to put our name to.'}
          </p>
        </div>

        {!active ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const count = projects.filter((p) => p.tag === cat.name).length
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(cat.name)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal-light text-left"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${cat.cover.slice(1)}`}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/45 transition-colors group-hover:bg-charcoal/25" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">{cat.name}</h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white/85">
                      View {count} project{count === 1 ? '' : 's'}
                      <span className="text-brand transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <>
            <button
              onClick={() => setActive(null)}
              className="mt-10 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-brand hover:text-brand-dark"
            >
              <span aria-hidden>←</span> All Categories
            </button>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((project) => (
                <div
                  key={project.image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal-light"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.slice(1)}`}
                    alt={project.title || project.tag}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.title && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5">
                      <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

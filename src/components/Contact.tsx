import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../site'

const inputClass =
  'w-full rounded border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder-charcoal/40 outline-none transition-colors focus:border-brand'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Delivered by FormSubmit.co (free, no key) to site.email.
    const formData = new FormData(e.currentTarget)
    formData.append('_subject', `New enquiry from the ${site.name} website`)
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-site grid gap-12 lg:grid-cols-2">
        <div>
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

        {status === 'sent' ? (
          <div className="flex items-center rounded-lg border border-brand/40 bg-gray-50 p-10">
            <p className="text-lg">
              Thank you for reaching out. A member of the {site.name} team will be in touch
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot: bots fill this hidden field, real people never see it. */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputClass} name="name" placeholder="Name *" required />
              <input
                className={inputClass}
                name="email"
                type="email"
                placeholder="Email *"
                required
              />
            </div>
            <input className={inputClass} name="phone" type="tel" placeholder="Phone" />
            <select className={inputClass} name="service" defaultValue="">
              <option value="" disabled>
                Select a service...
              </option>
              <option>Full Home Renovation</option>
              <option>Extension</option>
              <option>Kitchen or Bathroom</option>
              <option>Electrical or Plumbing</option>
              <option>Tiling or Flooring</option>
              <option>Central Heating</option>
              <option>Painting or Repairs</option>
              <option>Other</option>
            </select>
            <textarea className={inputClass} name="message" rows={4} placeholder="Message" />
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-brand">
                Sorry, something went wrong sending your message. Please call or WhatsApp us and we
                will sort it right away.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

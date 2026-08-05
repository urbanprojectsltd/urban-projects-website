import { useState } from 'react'

// TODO: adjust these once services are confirmed
const faqs = [
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes. We visit, look at the job properly and give you a clear written quote with no obligation and no hidden extras.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on the size of the job. We agree a realistic timeline before we start and we keep you updated if anything changes.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes, we carry full public liability insurance. We are happy to show you the paperwork before any work begins.',
  },
  {
    question: 'Do you handle planning and building permits?',
    answer:
      'We can guide you through planning and permits, and we work with trusted architects and engineers where needed.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We work across Cyprus. If you are not sure whether we reach you, just ask and we will let you know.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="rounded-lg border border-charcoal/10 bg-white">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left font-display font-bold"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <span className="ml-4 text-brand">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-5 leading-relaxed text-charcoal/70">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

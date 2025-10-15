import SectionHeading from './SectionHeading'

const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6">
      <SectionHeading
        eyebrow="Stay in Orbit"
        title="Let’s chart a collaboration"
        description="Whether you’re curating a kinetic runway or weaving sensors into city festivals, Appizzo opens portals for luminous partnerships."
        anchor="contact-heading"
      />
      <div className="mx-auto mt-16 grid max-w-4xl gap-8 rounded-3xl border border-glow/15 bg-night/80 p-8 backdrop-blur">
        <p className="text-sm text-glow/80">
          Email us at <a href="mailto:hello@appizzo.studio" className="text-accent underline">hello@appizzo.studio</a> for bespoke commissions, residencies, and cross-sensorial experiments.
        </p>
        <div className="grid gap-6 text-sm text-glow/70 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Studios</p>
            <p className="mt-2">Neon District, Helix Pier</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lagoon">Collaborations</p>
            <p className="mt-2">Please include moodboards & timeline</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Press</p>
            <p className="mt-2">press@appizzo.studio</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

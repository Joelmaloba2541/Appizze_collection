import { motion } from 'framer-motion'

type HeroProps = {
  status: {
    loading: boolean
    error: string | null
  }
  totalPieces: number
}

const Hero = ({ status, totalPieces }: HeroProps) => {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10 animate-pulse bg-aurora/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center">
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-glow md:text-6xl">
            Wearable stories beyond the spectrum.
          </h1>
          <p className="mt-6 text-lg text-glow/80 md:text-xl">
            Appizzo Collection curates garments that respond to light, motion, and curiosity. Each piece is a
            sensory portal crafted to ignite conversations in motion-heavy cities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-glow/70">
            <span className="rounded-full border border-accent/40 px-4 py-2 font-semibold text-accent">
              {status.loading ? 'Calibrating aura' : `${totalPieces} pieces live`}
            </span>
            {status.error ? (
              <span className="rounded-full border border-ember/60 px-4 py-2 font-semibold text-ember">
                {status.error}
              </span>
            ) : (
              <span className="rounded-full border border-lagoon/50 px-4 py-2 font-semibold text-lagoon">
                Synced with atelier
              </span>
            )}
          </div>
        </motion.div>
        <motion.div
          className="relative grid h-[22rem] w-full place-items-center md:w-1/3"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-accent/20 via-lagoon/25 to-ember/20 blur-3xl" />
          <motion.div
            className="relative h-72 w-56 overflow-hidden rounded-3xl border border-mist bg-surface shadow-xl"
            animate={{ rotate: [-4, 4, -4], y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          >
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d')] bg-cover bg-center" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

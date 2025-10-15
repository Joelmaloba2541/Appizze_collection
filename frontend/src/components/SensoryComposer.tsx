import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'

type Aura = {
  name: string
  gradient: string
  bloom: string
}

type Tactile = {
  name: string
  phrase: string
}

type Sound = {
  name: string
  cadence: string
  offset: number
}

type Composition = {
  aura: Aura
  texture: Tactile
  sound: Sound
  ritual: string
  portal: string
  incantation: string
  fieldNotes: string[]
  metrics: {
    lumens: number
    frequency: number
    intensity: number
    tempo: number
  }
}

const auricPalettes: Aura[] = [
  {
    name: 'Prism Pulse',
    gradient:
      'radial-gradient(circle at 15% 20%, rgba(255,106,213,0.55), rgba(255,255,255,0)), linear-gradient(135deg, rgba(75,179,253,0.65), rgba(255,150,113,0.45))',
    bloom: 'Iridescent slipstream humming with prism seeds.',
  },
  {
    name: 'Orbit Veil',
    gradient:
      'radial-gradient(circle at 80% 10%, rgba(165,110,255,0.5), rgba(255,255,255,0)), linear-gradient(135deg, rgba(38,70,83,0.65), rgba(244,162,97,0.45))',
    bloom: 'Satellite tones bending toward whispered horizons.',
  },
  {
    name: 'Limestone Dawn',
    gradient:
      'radial-gradient(circle at 30% 85%, rgba(255,214,165,0.6), rgba(255,255,255,0)), linear-gradient(135deg, rgba(141,209,255,0.55), rgba(255,196,113,0.4))',
    bloom: 'Sunrise dust shimmering across limestone alleys.',
  },
  {
    name: 'Nebula Lace',
    gradient:
      'radial-gradient(circle at 65% 40%, rgba(45,197,253,0.5), rgba(255,255,255,0)), linear-gradient(135deg, rgba(255,106,213,0.5), rgba(66,135,245,0.45))',
    bloom: 'Interstellar lacework catching spectral rain.',
  },
]

const tactileWeaves: Tactile[] = [
  {
    name: 'Velvet Data Mesh',
    phrase: 'Soft conductive fibers storing whispered tempos.',
  },
  {
    name: 'Aerogel Loom Drift',
    phrase: 'Weightless layers shifting with roofline winds.',
  },
  {
    name: 'Solar Knit Mirage',
    phrase: 'Thermochromatic knit translating sunlight into pigment.',
  },
  {
    name: 'Rippled Alloy Silk',
    phrase: 'Metallic threads archiving every fold of motion.',
  },
]

const soundDiagrams: Sound[] = [
  {
    name: 'Low Orbit Bossa',
    cadence: '92 bpm with gravity-defying offbeats',
    offset: 8,
  },
  {
    name: 'Magnetic Raga',
    cadence: '108 bpm layered with magnetic drone',
    offset: 14,
  },
  {
    name: 'Umbra Step Sequencer',
    cadence: '128 bpm strobe-step loops',
    offset: 22,
  },
  {
    name: 'Tidal Synth Bloom',
    cadence: '74 bpm analog tides spilling over delays',
    offset: 5,
  },
]

const ritualGestures = [
  'Trace seams counterclockwise thrice before sunrise',
  'Hold the hood to catch the first streetlight flicker',
  'Sync breaths with passing train echoes',
  'Fold sleeves toward the river before wearing',
]

const portalThresholds = [
  'Skybridge 19 in Neon District',
  'Midnight tram stop at Helix Pier',
  'Glasshouse atrium over Orbit Plaza',
  'Subterranean amphitheater below Block 47',
]

const incantations = [
  'Swear tenderness to the circuitry',
  'Promise the fabric a future memory',
  'Invite strangers to decode the shimmer',
  'Let the rhythm decide the next turn',
]

const pick = <T,>(array: T[], index: number) => array[((index % array.length) + array.length) % array.length]

const createComposition = (seed: number, intensity: number, tempo: number): Composition => {
  const aura = pick(auricPalettes, seed + Math.round(intensity / 18))
  const texture = pick(tactileWeaves, seed * 3 + Math.round(tempo / 22))
  const sound = pick(soundDiagrams, seed * 5 + Math.round((intensity + tempo) / 16))
  const ritual = pick(ritualGestures, seed * 7 + Math.round(intensity / 9) + Math.round(tempo / 11))
  const portal = pick(portalThresholds, seed * 11 + Math.round((intensity * tempo) / 45))
  const incantation = pick(incantations, seed * 13 + Math.round((tempo - intensity) / 7))
  const lumens = Math.round(intensity * 3.7 + seed * 4)
  const frequency = Math.round(tempo * 1.8 + intensity / 2 + sound.offset)
  const fieldNotes = [
    `${sound.cadence} braided with ${frequency}hz shimmer`,
    texture.phrase,
    `${incantation} at ${portal.toLowerCase()}`,
  ]
  return {
    aura,
    texture,
    sound,
    ritual,
    portal,
    incantation,
    fieldNotes,
    metrics: {
      lumens,
      frequency,
      intensity,
      tempo,
    },
  }
}

const SensoryComposer = () => {
  const [seed, setSeed] = useState(1)
  const [intensity, setIntensity] = useState(72)
  const [tempo, setTempo] = useState(96)

  const composition = useMemo(() => createComposition(seed, intensity, tempo), [seed, intensity, tempo])

  return (
    <section aria-labelledby="composer-heading" className="px-6">
      <SectionHeading
        eyebrow="Studio Playground"
        title="Compose a wearable sensation"
        description="Tune the light and rhythm sliders to weave a fresh Appizzo aura. Each iteration pairs fabric science with synesthetic storytelling."
        anchor="composer"
      />
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[1.25fr_1fr]">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-mist bg-surface"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          style={{ backgroundImage: composition.aura.gradient }}
        >
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />
          <div className="relative z-10 flex h-full flex-col justify-between p-8 text-glow">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-glow/70">
                {composition.aura.name}
              </span>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-glow">{composition.texture.name}</h3>
                <p className="text-base text-glow/70">{composition.aura.bloom}</p>
                <p className="text-sm font-semibold text-glow/80">{composition.sound.name}</p>
                <p className="text-sm text-glow/70">{composition.sound.cadence}</p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {composition.fieldNotes.map((note, index) => (
                <div key={index} className="rounded-2xl border border-mist bg-surface px-4 py-3 text-sm font-medium text-glow/80 shadow-sm">
                  {note}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3 text-sm text-glow/80">
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Portal</p>
                <p className="mt-1 font-semibold">{composition.portal}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Gesture</p>
                <p className="mt-1 font-semibold">{composition.ritual}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em]">Incantation</p>
                <p className="mt-1 font-semibold">{composition.incantation}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col justify-between gap-8 rounded-3xl border border-mist bg-surface p-6 shadow">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Light Intensity</p>
              <div className="mt-3 flex items-center gap-4">
                <input
                  aria-label="Light intensity"
                  type="range"
                  min={0}
                  max={100}
                  value={intensity}
                  onChange={(event) => setIntensity(Number(event.target.value))}
                  className="h-2 flex-1 appearance-none rounded-full bg-glow/20 accent-accent"
                />
                <span className="text-sm font-semibold text-glow">{composition.metrics.intensity}</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Rhythm Tempo</p>
              <div className="mt-3 flex items-center gap-4">
                <input
                  aria-label="Rhythm tempo"
                  type="range"
                  min={60}
                  max={160}
                  value={tempo}
                  onChange={(event) => setTempo(Number(event.target.value))}
                  className="h-2 flex-1 appearance-none rounded-full bg-glow/20 accent-ember"
                />
                <span className="text-sm font-semibold text-glow">{composition.metrics.tempo} bpm</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.3em] text-glow/60">
            <div className="rounded-2xl border border-mist bg-surface p-4 shadow-sm">
              <p>Resonance</p>
              <p className="mt-2 text-lg font-bold text-glow">{composition.metrics.frequency}hz</p>
            </div>
            <div className="rounded-2xl border border-mist bg-surface p-4 shadow-sm">
              <p>Lumens</p>
              <p className="mt-2 text-lg font-bold text-glow">{composition.metrics.lumens}</p>
            </div>
            <div className="rounded-2xl border border-mist bg-surface p-4 shadow-sm">
              <p>Intensity</p>
              <p className="mt-2 text-lg font-bold text-glow">{composition.metrics.intensity}</p>
            </div>
            <div className="rounded-2xl border border-mist bg-surface p-4 shadow-sm">
              <p>Tempo</p>
              <p className="mt-2 text-lg font-bold text-glow">{composition.metrics.tempo}</p>
            </div>
          </div>
          <motion.button
            type="button"
            onClick={() => setSeed((value) => value + 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-accent via-lagoon to-ember px-5 py-3 text-sm font-semibold text-surface shadow-lg shadow-lagoon/30"
          >
            Conjure New Pattern
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default SensoryComposer

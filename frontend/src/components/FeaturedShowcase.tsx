import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { CollectionItem } from '../types'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.7,
    },
  }),
}

type FeaturedShowcaseProps = {
  items: CollectionItem[]
  loading: boolean
}

const FeaturedShowcase = ({ items, loading }: FeaturedShowcaseProps) => {
  const skeletonItems = Array.from({ length: 2 }).map(() => null as CollectionItem | null)
  const displayItems: (CollectionItem | null)[] = loading ? skeletonItems : items

  return (
    <section aria-labelledby="featured" className="px-6">
      <SectionHeading
        eyebrow="Featured"
        title="Pieces that shift perspectives"
        description="Limited releases hand-picked by Appizzo, designed to mirror the energy of neon-tide nights."
        anchor="collection"
      />
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
        {displayItems.map((item, index) => {
          if (!item) {
            return (
              <motion.article
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-mist bg-surface shadow-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                variants={variants}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, rgba(255,106,213,0.4), rgba(75,179,253,0.4))',
                    }}
                  />
                </div>
                <div className="space-y-4 px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pending drop</p>
                  <h3 className="text-2xl font-semibold text-glow">Calibrating spectrum</h3>
                  <p className="text-sm text-glow/70">Appizzo is weaving light into the fabric. Stay tuned.</p>
                  <div className="flex items-center justify-between text-xs text-glow/60">
                    <span>----</span>
                    <span>SPECTRA</span>
                  </div>
                </div>
                <motion.span
                  className="absolute inset-x-6 -bottom-16 flex h-16 items-center justify-center rounded-3xl bg-gradient-to-r from-accent to-lagoon font-semibold text-surface shadow-lg shadow-accent/20"
                  initial={{ opacity: 0, y: 0 }}
                  whileHover={{ opacity: 1, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  Hover to preview kinetic glow
                </motion.span>
              </motion.article>
            )
          }

          return (
            <motion.article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-mist bg-surface shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              variants={variants}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image_url})` }}
                />
              </div>
              <div className="space-y-4 px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{item.category}</p>
                <h3 className="text-2xl font-semibold text-glow">{item.title}</h3>
                <p className="text-sm text-glow/70">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-glow/60">
                  <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  <span>LIMITED</span>
                </div>
              </div>
              <motion.span
                className="absolute inset-x-6 -bottom-16 flex h-16 items-center justify-center rounded-3xl bg-gradient-to-r from-accent to-lagoon font-semibold text-surface shadow-lg shadow-accent/20"
                initial={{ opacity: 0, y: 0 }}
                whileHover={{ opacity: 1, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                Hover to preview kinetic glow
              </motion.span>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedShowcase

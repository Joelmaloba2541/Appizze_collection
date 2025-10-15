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
  return (
    <section aria-labelledby="featured" className="px-6">
      <SectionHeading
        eyebrow="Featured"
        title="Pieces that shift perspectives"
        description="Limited releases hand-picked by Appizzo, designed to mirror the energy of neon-tide nights."
        anchor="collection"
      />
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
        {(loading ? Array.from({ length: 2 }) : items).map((item, index) => (
          <motion.article
            key={item?.id ?? index}
            className="group relative overflow-hidden rounded-3xl border border-glow/10 bg-night/70 shadow-xl shadow-accent/10 backdrop-blur"
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
                  backgroundImage: loading
                    ? 'linear-gradient(135deg, rgba(255,106,213,0.4), rgba(75,179,253,0.4))'
                    : `url(${item?.image_url})`,
                }}
              />
            </div>
            <div className="space-y-4 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {loading ? 'Pending drop' : item.category}
              </p>
              <h3 className="text-2xl font-semibold text-glow">
                {loading ? 'Calibrating spectrum' : item.title}
              </h3>
              <p className="text-sm text-glow/70">
                {loading
                  ? 'Appizzo is weaving light into the fabric. Stay tuned.'
                  : item.description}
              </p>
              <div className="flex items-center justify-between text-xs text-glow/60">
                <span>{loading ? '----' : new Date(item.created_at).toLocaleDateString()}</span>
                <span>{loading ? 'SPECTRA' : 'LIMITED'}</span>
              </div>
            </div>
            <motion.span
              className="absolute inset-x-6 -bottom-16 flex h-16 items-center justify-center rounded-3xl bg-gradient-to-r from-accent to-lagoon font-semibold text-night shadow-lg shadow-accent/30"
              initial={{ opacity: 0, y: 0 }}
              whileHover={{ opacity: 1, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Hover to preview kinetic glow
            </motion.span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedShowcase

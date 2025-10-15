import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { CollectionItem } from '../types'

const gridVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

type CollectionGalleryProps = {
  items: CollectionItem[]
  loading: boolean
}

const CollectionGallery = ({ items, loading }: CollectionGalleryProps) => {
  const skeletonItems = Array.from({ length: 6 }).map(() => null as CollectionItem | null)
  const displayItems: (CollectionItem | null)[] = loading ? skeletonItems : items

  return (
    <section aria-labelledby="collection-gallery" className="px-6">
      <SectionHeading
        eyebrow="The Archive"
        title="Discover kinetic textiles"
        description="A rolling archive of Appizzo pieces tuned to resonate with music halls, rooftop gardens, and midnight diners."
        anchor="collection-gallery"
      />
      <motion.div
        className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayItems.map((item, index) => {
          const isSkeleton = item == null
          const backgroundImage = isSkeleton
            ? 'linear-gradient(135deg, rgba(75,179,253,0.35), rgba(255,150,113,0.35))'
            : `url(${item.image_url})`
          const category = isSkeleton ? '—' : item.category
          const createdLabel = isSkeleton
            ? '00'
            : item.created_at
              ? new Date(item.created_at).getFullYear()
              : '—'
          const title = isSkeleton ? 'Pending resonance' : item.title
          const description = (() => {
            if (isSkeleton) {
              return 'Fabric sensors aligning with city pulse.'
            }
            const text = item.description
            return text.length > 120 ? `${text.substring(0, 120)}…` : text
          })()

          return (
            <article
              key={item?.id ?? index}
              className="group relative overflow-hidden rounded-2xl border border-glow/10 bg-night/70 backdrop-blur"
            >
              <div className="aspect-square overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  style={{ backgroundImage }}
                />
              </div>
              <div className="space-y-3 px-5 py-6">
                <div className="flex items-center justify-between text-xs text-glow/60">
                  <span>{category}</span>
                  <span>{createdLabel}</span>
                </div>
                <h3 className="text-xl font-semibold text-glow">{title}</h3>
                <p className="text-sm text-glow/70">{description}</p>
              </div>
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent via-lagoon to-ember"
                layoutId="collection-glow"
              />
            </article>
          )
        })}
      </motion.div>
    </section>
  )
}

export default CollectionGallery

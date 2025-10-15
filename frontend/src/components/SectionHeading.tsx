import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  anchor: string
}

const SectionHeading = ({ eyebrow, title, description, anchor }: SectionHeadingProps) => {
  return (
    <div id={anchor} className="mx-auto max-w-3xl text-center">
      <motion.p
        className="text-sm font-semibold uppercase tracking-[0.4em] text-accent"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-4 text-3xl font-bold text-glow md:text-4xl"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-base text-glow/70 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  )
}

export default SectionHeading

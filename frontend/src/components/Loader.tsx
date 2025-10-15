import { motion } from 'framer-motion'

type LoaderProps = {
  label?: string
}

const Loader = ({ label = 'Loading' }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl bg-night/80 px-8 py-6 text-center shadow-xl shadow-accent/40">
      <div className="flex items-center gap-3">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="h-3 w-3 rounded-full bg-gradient-to-br from-accent via-lagoon to-ember"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              delay: index * 0.15,
              duration: 0.9,
            }}
          />
        ))}
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-glow/80">{label}</p>
    </div>
  )
}

export default Loader

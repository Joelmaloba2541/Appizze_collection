import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { Milestone } from '../types'

type MilestoneTimelineProps = {
  milestones: Milestone[]
  loading: boolean
}

const MilestoneTimeline = ({ milestones, loading }: MilestoneTimelineProps) => {
  const skeletonMilestones: (Milestone | null)[] = Array.from({ length: 3 }).map(
    () => null as Milestone | null,
  )
  const displayMilestones: (Milestone | null)[] = loading ? skeletonMilestones : milestones

  return (
    <section id="milestones" aria-labelledby="milestones-heading" className="px-6">
      <SectionHeading
        eyebrow="History"
        title="Moments that rewired the atelier"
        description="A few luminous beats where Appizzo fused material science with dreamscapes."
        anchor="milestones-heading"
      />
      <div className="mx-auto mt-16 max-w-4xl border-l border-glow/20 pl-6">
        {displayMilestones.map((milestone, index) => {
          const isSkeleton = milestone == null
          const yearLabel = isSkeleton ? '—' : milestone.year
          const title = isSkeleton ? 'Synchronizing fabric memory' : milestone.title
          const summary = isSkeleton
            ? 'Story nodes aligning with archival skyline.'
            : milestone.summary
          const mood = isSkeleton ? 'Pending Mood' : milestone.mood

          return (
            <motion.article
              key={milestone?.id ?? index}
              className="relative pb-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="absolute -left-[34px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/60 bg-night text-xs text-accent">
                {yearLabel}
              </span>
              <h3 className="text-xl font-semibold text-glow">{title}</h3>
              <p className="mt-2 text-sm text-glow/70">{summary}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember">{mood}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default MilestoneTimeline

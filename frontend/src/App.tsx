import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SensoryComposer from './components/SensoryComposer'
import FeaturedShowcase from './components/FeaturedShowcase'
import CollectionGallery from './components/CollectionGallery'
import MilestoneTimeline from './components/MilestoneTimeline'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { fetchCollection, fetchFeatured, fetchMilestones, fetchTestimonials } from './api'
import { CollectionItem, Milestone, Testimonial } from './types'
import Loader from './components/Loader'

const App = () => {
  const [featured, setFeatured] = useState<CollectionItem[]>([])
  const [collection, setCollection] = useState<CollectionItem[]>([])
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const [featuredItems, collectionItems, milestoneItems, testimonialItems] = await Promise.all([
          fetchFeatured(),
          fetchCollection(),
          fetchMilestones(),
          fetchTestimonials(),
        ])
        if (!active) return
        setFeatured(featuredItems)
        setCollection(collectionItems)
        setMilestones(milestoneItems)
        setTestimonials(testimonialItems)
      } catch (err) {
        if (!active) return
        setError((err as Error).message)
      } finally {
        if (!active) return
        setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const status = useMemo(() => ({ loading, error }), [loading, error])

  return (
    <div id="top" className="min-h-screen bg-night/95 text-glow">
      <Navbar />
      <main className="space-y-32 pt-24">
        <Hero status={status} totalPieces={collection.length} />
        <SensoryComposer />
        <FeaturedShowcase items={featured} loading={loading} />
        <CollectionGallery items={collection} loading={loading} />
        <MilestoneTimeline milestones={milestones} loading={loading} />
        <TestimonialsCarousel testimonials={testimonials} loading={loading} />
        <ContactSection />
      </main>
      <Footer />
      {loading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm">
          <Loader label="Igniting inspiration" />
        </div>
      )}
      {error && !loading && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-ember/90 px-4 py-3 text-sm font-semibold text-night shadow-lg">
          {error}
        </div>
      )}
    </div>
  )
}

export default App

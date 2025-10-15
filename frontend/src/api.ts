import { CollectionItem, Milestone, Testimonial } from './types'

const API_BASE = '/api'

type ApiRoute = 'featured/' | 'items/' | 'milestones/' | 'testimonials/'

type Lifted<T> = Promise<T>

async function request<T>(route: ApiRoute): Lifted<T> {
  const response = await fetch(`${API_BASE}/${route}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}`)
  }
  return response.json() as Lifted<T>
}

export const fetchFeatured = () => request<CollectionItem[]>('featured/')
export const fetchCollection = () => request<CollectionItem[]>('items/')
export const fetchMilestones = () => request<Milestone[]>('milestones/')
export const fetchTestimonials = () => request<Testimonial[]>('testimonials/')

import { CollectionItem, Milestone, Testimonial } from './types'

const envBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '')
const API_BASE = envBase ?? '/api'

type ApiRoute = 'featured/' | 'items/' | 'milestones/' | 'testimonials/'

type Lifted<T> = Promise<T>

async function request<T>(route: ApiRoute): Lifted<T> {
  const separator = API_BASE.endsWith('/') ? '' : '/'
  const response = await fetch(`${API_BASE}${separator}${route}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}`)
  }
  return response.json() as Lifted<T>
}

export const fetchFeatured = () => request<CollectionItem[]>('featured/')
export const fetchCollection = () => request<CollectionItem[]>('items/')
export const fetchMilestones = () => request<Milestone[]>('milestones/')
export const fetchTestimonials = () => request<Testimonial[]>('testimonials/')

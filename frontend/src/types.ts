export type CollectionItem = {
  id: number
  title: string
  category: string
  description: string
  image_url: string
  featured: boolean
  created_at: string
}

export type Milestone = {
  id: number
  title: string
  year: number
  summary: string
  mood: string
}

export type Testimonial = {
  id: number
  name: string
  role: string
  message: string
  spotlight: boolean
}

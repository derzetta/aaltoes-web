export type ProjectStatus = 'active' | 'inactive' | 'archived'

export interface Project {
  name: string
  description: string
  status: ProjectStatus
  url?: string
  spinOffYear?: number
  category: 'brewing' | 'spinout'
} 

export interface Personnel { id: string; name: string; role: string; skills: string[]; allowedCountries: string[]; unavailableDates: string[]; workload: number; certifications?: Record<string, string>; }
export interface Project { id: string; name: string; customer: string; country: string; state: string; city: string; coordinates: [number, number]; category: string; quantity: number; status: 'planning' | 'ongoing' | 'completed' | 'on-hold' | 'delay'; assignedPersonnel: string[]; startDate: string; deadline: string; partNumber?: string; }
export const mockPersonnel: Personnel[] = [];
export const mockProjects: Project[] = [];

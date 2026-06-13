export type QuoteStatus = 'Pending' | 'Contacted' | 'Closed';
export type ProjectStatus = 'Completed' | 'In Progress' | 'Planning';
export type TestimonialStatus = 'Published' | 'Hidden';

export interface QuoteRequest {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  location: string;
  message: string;
  dateSubmitted: string;
  status: QuoteStatus;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  completionDate: string;
  status: ProjectStatus;
  images: string[];
  description: string;
  client: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  reviewText: string;
  rating: number;
  status: TestimonialStatus;
  dateAdded: string;
  initials: string;
  avatarColor: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  district: string;
  description: string;
  projectCount: number;
}

export interface ContactInfo {
  businessName: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  whatsapp: string;
  googleMapsEmbed: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface HomepageSettings {
  heroTitle: string;
  heroSubtitle: string;
  yearsExperience: string;
  projectsCompleted: string;
  skilledProfessionals: string;
  customerSatisfaction: string;
  whyChooseUsPoints: { title: string; description: string }[];
  ctaButtonText: string;
  ctaSubButtonText: string;
}

export interface AdminProfile {
  name: string;
  email: string;
  role: string;
  avatarUrl: string;
  lastLogin: string;
}

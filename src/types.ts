export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration?: string;
  recommendedFor?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  fallbackImage?: string;
  services: ServiceItem[];
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hair' | 'Styling' | 'Salon' | 'Beauty';
  image: string;
  fallbackImage?: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceMentioned?: string;
  verified: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

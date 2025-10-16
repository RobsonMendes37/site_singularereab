export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  teacher: {
    name: string;
    role: string;
    image: string;
  };
  details: {
    sits: number;
    lessons: number;
    hours: number;
  };
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

// BlogPost interface moved to blog.types.ts

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

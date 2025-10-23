// Types for future API integration

export interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  status?: 'pending' | 'read' | 'replied';
  createdAt?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

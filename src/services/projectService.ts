import { Project, ApiResponse } from '@/types';

// Projects service ready for backend integration
export const projectService = {
  async getProjects(): Promise<ApiResponse<Project[]>> {
    // Currently returns mock data - ready for API integration
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Plataforma de e-commerce completa com carrinho, pagamentos e painel administrativo.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
        image: '/placeholder.svg',
        github: 'https://github.com',
        demo: 'https://demo.com',
        featured: true,
      },
      {
        id: '2',
        title: 'Task Management App',
        description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.',
        tags: ['Next.js', 'Supabase', 'Framer Motion'],
        image: '/placeholder.svg',
        github: 'https://github.com',
        demo: 'https://demo.com',
        featured: true,
      },
      {
        id: '3',
        title: 'AI Content Generator',
        description: 'Ferramenta de geração de conteúdo utilizando IA com editor rico e exportação múltipla.',
        tags: ['React', 'OpenAI', 'TipTap'],
        image: '/placeholder.svg',
        github: 'https://github.com',
        demo: 'https://demo.com',
        featured: true,
      },
    ];

    return Promise.resolve({ data: mockProjects });
  },

  async getFeaturedProjects(): Promise<ApiResponse<Project[]>> {
    const response = await this.getProjects();
    const featured = response.data?.filter(p => p.featured) || [];
    return { data: featured };
  },
};

import { ContactMessage, ApiResponse } from '@/types';

// Contact service ready for backend integration
export const contactService = {
  async sendMessage(data: ContactMessage): Promise<ApiResponse<ContactMessage>> {
    // Currently simulated - ready for API integration
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { ...data, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
          message: 'Mensagem enviada com sucesso!',
        });
      }, 1000);
    });
  },
};

// Base API configuration for future backend integration

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    // Ready for future API integration
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    // Ready for future API integration
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },
};

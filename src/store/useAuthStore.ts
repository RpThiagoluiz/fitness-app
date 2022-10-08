import create from 'zustand';

export const useAuthStore = create((set) => ({
  auth: false,
  login: () => set({ auth: true }),
  logout: () => set({ auth: false }),
}));

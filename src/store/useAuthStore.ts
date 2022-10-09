import create from 'zustand';

interface AuthStore {
  auth: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  auth: false,
  login: async () => {
    console.log('AuthStore auth - login');
    set({ auth: true });
  },
  logout: () => set((_) => ({ auth: false })),
}));

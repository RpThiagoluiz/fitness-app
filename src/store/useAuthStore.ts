import create, { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

const store: StateCreator<
  AuthState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  AuthState
> = (set) => ({
  isLogged: false,
  login: () => set(() => ({ isLogged: true })),
  logout: () =>
    set({
      isLogged: false,
    }),
});
const storeName = 'AuthStore-FiT';

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(store, {
      name: storeName,
      getStorage: () => AsyncStorage,
    }),
    { name: storeName, enabled: __DEV__, trace: true }
  )
);

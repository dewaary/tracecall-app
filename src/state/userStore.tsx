import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkvStorage} from './storage';

interface userStore {
  user: Record<string, any> | null;
  setUser: (user: any) => void;
}

export const useUserStore = create<userStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: data => set({user: data}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);

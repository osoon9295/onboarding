import { create } from "zustand";

export type UserType = {
  userId: string;
  nickname: string;
  avatar: string;
};

interface UserStore {
  user: UserType | null;
  setUser: (newUser: UserType | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;

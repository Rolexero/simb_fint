import { create } from "zustand";

const useUserStore = create((set) => ({
  currentUser: null, // Initial state
  setCurrentUser: (user: any) => set({ currentUser: user }), // Action to set the user
}));

export default useUserStore;

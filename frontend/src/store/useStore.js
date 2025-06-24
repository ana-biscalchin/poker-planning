import create from 'zustand'

// simple store for demo purposes
export const useStore = create((set) => ({
  players: [],
  addPlayer: (name) =>
    set((state) => ({ players: [...state.players, name].slice(0, 10) })),
  reset: () => set({ players: [] }),
}))

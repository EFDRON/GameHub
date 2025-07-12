import { create } from "zustand";
import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/usePlatform";

interface GameQuery {
  genre?: number;
  platform?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genre: Genre) => void;
  setPlatformId: (platform: Platform) => void;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genre) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genre: genre.id },
    })),
  setPlatformId: (platform) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platform: platform.id },
    })),
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder },
    })),
}));
export default useGameQueryStore;

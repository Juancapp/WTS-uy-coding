import { create } from "zustand";
import { MoviesStoreType } from "./types";

export const useMoviesStore = create<MoviesStoreType>((set) => ({
  moviesData: [],
  setMoviesData: (moviesData) => set({ moviesData: moviesData }),
}));

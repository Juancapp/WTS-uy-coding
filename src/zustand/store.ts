import { create } from "zustand";
import { MoviesStoreType, PurchaseStoreType } from "./types";
import { PurchaseStateEnum } from "../components/sections/Purchase/types";

export const useMoviesStore = create<MoviesStoreType>((set) => ({
  moviesData: [],
  selectedMovie: {
    title: "",
    date: "",
    place: "",
  },
  setSelectedMovie: (selectedMovie) => set({ selectedMovie: selectedMovie }),
  setMoviesData: (moviesData) => set({ moviesData: moviesData }),
}));

export const usePurchaseStateStore = create<PurchaseStoreType>((set) => ({
  purchaseState: PurchaseStateEnum.MOVIE_FORM,
  setPurchaseState: (purchaseState) => set({ purchaseState: purchaseState }),
}));

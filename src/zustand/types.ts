import { MovieType } from "../types";

export interface MoviesStoreType {
  moviesData: MovieType[];
  setMoviesData: (moviesData: MovieType[]) => void;
}

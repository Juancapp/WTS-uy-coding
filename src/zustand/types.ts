import {
  PurchaseFormProps,
  PurchaseStateEnum,
} from "../components/sections/Purchase/types";
import { MovieType } from "../types";

export interface MoviesStoreType {
  moviesData: MovieType[];
  selectedMovie: PurchaseFormProps;
  setSelectedMovie: (selectedMovie: PurchaseFormProps) => void;
  setMoviesData: (moviesData: MovieType[]) => void;
}

export interface PurchaseStoreType {
  purchaseState: PurchaseStateEnum;
  setPurchaseState: (purchaseState: PurchaseStateEnum) => void;
}

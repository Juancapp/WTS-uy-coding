import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieType } from "../types";

export const useMovies = () => {
  return useQuery({
    queryFn: async () =>
      await axios.get<{ movies: MovieType[] }>(
        "https://raw.githubusercontent.com/wtuydev/test-json/main/films.json"
      ),
    queryKey: ["movies"],
    staleTime: Infinity,
  });
};

import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "./components/sections/Home";
import Billboard from "./components/sections/Billboard";
import { useMovies } from "./services/query";
import { useEffect } from "react";
import { useMoviesStore } from "./zustand/store";
import Purchase from "./components/sections/Purchase";
import Loading from "./components/layout/Loading";

function App() {
  const moviesQuery = useMovies();
  const { isFetching, isError, error } = moviesQuery;
  const setMoviesData = useMoviesStore((state) => state.setMoviesData);

  useEffect(() => {
    if (moviesQuery.isSuccess) {
      setMoviesData(moviesQuery?.data?.data?.movies);
    }
  }, [moviesQuery?.dataUpdatedAt]);

  if (isFetching || isError) {
    return (
      <Loading
        title={isFetching ? "Loading..." : "Error"}
        errorMessage={isError ? error.message : ""}
      />
    );
  }

  return (
    <div className="appContainer">
      <Navbar />
      <Home />
      <Billboard />
      <Purchase />
    </div>
  );
}

export default App;

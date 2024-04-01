/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Billboard from "./components/pages/Billboard";
import { useMovies } from "./services/query";
import { useEffect } from "react";
import { useMoviesStore } from "./zustand/store";
import Purchase from "./components/pages/Purchase";

function App() {
  const moviesQuery = useMovies();
  const setMoviesData = useMoviesStore((state) => state.setMoviesData);

  useEffect(() => {
    if (moviesQuery.isSuccess) {
      setMoviesData(moviesQuery?.data?.data?.movies);
    }
  }, [moviesQuery?.dataUpdatedAt]);

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

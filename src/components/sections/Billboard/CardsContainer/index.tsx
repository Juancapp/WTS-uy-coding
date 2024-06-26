import { MovieType } from "../../../../types";
import Card from "../Card";
import "./index.css";

function CardsContainer({ data }: { data: MovieType[] }) {
  return (
    <div className="cardsContainer">
      {data.map((movie) => {
        return <Card movieData={movie} key={movie.url} />;
      })}
    </div>
  );
}

export default CardsContainer;

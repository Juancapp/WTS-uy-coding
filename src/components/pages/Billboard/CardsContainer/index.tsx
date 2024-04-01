import { MovieType } from "../../../../types";
import Card from "../Card";
import "./index.css";

function CardsContainer({
  data,
  isSwiping,
}: {
  data: MovieType[];
  isSwiping: boolean;
}) {
  return (
    <div className="cardsContainer">
      {data.map((movie) => {
        return <Card movieData={movie} isSwiping={isSwiping} />;
      })}
    </div>
  );
}

export default CardsContainer;

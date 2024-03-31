import { MovieType } from "../../../../types";
import "./index.css";

function Card({ movieData }: { movieData: MovieType }) {
  return (
    <div className="billCardContainer">
      <h1>{movieData.title}</h1>
      <div
        className="cardImage"
        style={{
          backgroundImage: `url(${movieData.poster})`,
        }}
      />
      <p>Comprar ticket</p>
    </div>
  );
}

export default Card;

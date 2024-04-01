import { MovieType } from "../../../../types";
import {
  useMoviesStore,
  usePurchaseStateStore,
} from "../../../../zustand/store";
import "./index.css";
import { PurchaseStateEnum } from "../../Purchase/types";

function Card({
  movieData,
  isSwiping,
}: {
  movieData: MovieType;
  isSwiping: boolean;
}) {
  const { setSelectedMovie, selectedMovie } = useMoviesStore((state) => state);
  const { setPurchaseState } = usePurchaseStateStore((state) => state);

  const handleClick = () => {
    if (!isSwiping) {
      setPurchaseState(PurchaseStateEnum.MOVIE_FORM);
      setSelectedMovie({ ...selectedMovie, title: movieData.title });
      window.location.href = "#purchase";
    }
  };

  return (
    <div className="billCardContainer" onClick={handleClick}>
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

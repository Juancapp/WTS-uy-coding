import { useMoviesStore } from "../../../zustand/store";
import "./index.css";

function MovieTicket({
  text = false,
  title,
}: {
  text?: boolean;
  title: string;
}) {
  const { setSelectedMovie, selectedMovie } = useMoviesStore((state) => state);

  const handleClick = () => {
    if (!text) return;

    setSelectedMovie({ ...selectedMovie, title: title });
    window.location.href = "#purchase";
  };

  return (
    <div className="movieContainer" onClick={handleClick}>
      <img src="/images/movie_ticket.png" alt="movie ticket" />
      <div className="shadow"></div>
      {text && <p>Comprar ticket</p>}
    </div>
  );
}

export default MovieTicket;

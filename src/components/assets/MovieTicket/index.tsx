import "./index.css";

function MovieTicket({ text = false }: { text?: boolean }) {
  return (
    <div className="movieContainer">
      <img src="/images/movie_ticket.png" alt="movie ticket" />
      <div className="shadow"></div>
      {text && <p>Comprar ticket</p>}
    </div>
  );
}

export default MovieTicket;

import "./index.css";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="rating">
      <p>★</p>
      <span>
        {rating}
        <span>/10</span>
      </span>
      <span>IMDB</span>
    </div>
  );
}

export default Rating;

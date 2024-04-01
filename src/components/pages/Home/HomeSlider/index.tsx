import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import { Dispatch, SetStateAction, useEffect } from "react";
import MovieTicket from "../../../assets/MovieTicket";
import View from "../../../assets/View";
import { useMoviesStore } from "../../../../zustand/store";

function HomeSlider({
  setImgURL,
}: {
  setImgURL: Dispatch<SetStateAction<string>>;
}) {
  const moviesData = useMoviesStore((state) =>
    state.moviesData.filter((movie) => movie.featured)
  );

  const randomNumber =
    moviesData && Math.floor(Math.random() * moviesData?.length);

  useEffect(() => {
    const movie = moviesData && moviesData[0];

    if (movie?.images[randomNumber!]) {
      setImgURL(movie.images[randomNumber!]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesData?.length]);

  const settings = {
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_current: number, next: number) => {
      const movie = moviesData && moviesData[next];

      if (movie?.images[randomNumber!]) {
        setImgURL(movie?.images[randomNumber!]);
      }
    },
  };

  return (
    <Slider {...settings}>
      {moviesData?.map((movie) => {
        return (
          <div className="cardContainer">
            <Rating rating={movie.rating} />
            <div
              className="image"
              style={{
                backgroundImage: `url(${movie.poster})`,
              }}
            />
            <div className="movieAndBuyContainer">
              <div className="movieInfo">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
              <h1>{movie.title}</h1>
              <div className="buttonsContainer">
                <MovieTicket title={movie.title} text={true} />
                <View />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default HomeSlider;

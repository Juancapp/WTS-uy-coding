import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import MovieTicket from "../MovieTicket";
import View from "../View";
import { useMovies } from "../../../services/query";
import { useEffect } from "react";
import { useImgURLStore } from "../../../zustand/store";

function HomeSlider() {
  const moviesQuery = useMovies();
  const moviesData = moviesQuery?.data?.data?.movies.filter(
    (movie) => movie.featured
  );

  const setImgURL = useImgURLStore((state) => state.setImgURL);

  const randomNumber =
    moviesData && Math.floor(Math.random() * moviesData?.length);

  useEffect(() => {
    const movie = moviesData && moviesData[0];

    if (movie?.images[randomNumber!]) {
      setImgURL(movie.images[randomNumber!]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesQuery?.dataUpdatedAt]);

  const settings = {
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current: number) => {
      const movie = moviesData && moviesData[current];
      if (movie?.images[randomNumber!]) {
        setImgURL(movie?.images[randomNumber!]);
      }
    },
  };

  return (
    <div className="sliderContainer">
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
                  <MovieTicket text={true} />
                  <View />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlider;

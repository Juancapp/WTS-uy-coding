import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

  const [width, setWidth] = useState(window.innerWidth);

  const randomNumber =
    moviesData && Math.floor(Math.random() * moviesData?.length);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const movie = moviesData && moviesData[0];

    if (movie?.images[randomNumber!]) {
      setImgURL(movie.images[randomNumber!]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesData?.length]);

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: width < 768 ? 4000 : 7000,
    pauseOnHover: false,
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
          <div className="cardContainer" key={movie.url}>
            <Rating rating={movie.rating} key={movie.url} />
            <div
              className="image"
              style={{
                backgroundImage: `url(${movie.poster})`,
              }}
            />
            <div className="movieAndBuyContainer">
              <div className="movieInfo">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
              </div>
              <h1>{movie.title}</h1>
              <div className="buttonsContainer">
                <MovieTicket title={movie.title} text={true} />
                <View url={movie.url} />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default HomeSlider;

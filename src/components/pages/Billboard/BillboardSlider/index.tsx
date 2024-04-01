/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "react-slick";
import { MovieType } from "../../../../types";
import "./index.css";
import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer";
import { useMoviesStore } from "../../../../zustand/store";
import Card from "../Card";

function BillboardSlider() {
  const [width, setWidth] = useState(window.innerWidth);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const mobileSettings = {
    ...settings,
    className: "center",
    centerPadding: "90px",
    slidesToShow: 2,
    swipeToSlide: true,
  };

  const settingsToComponents = width < 768 ? mobileSettings : settings;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const moviesData = useMoviesStore((state) => state.moviesData);

  const [moviesArrays, setMoviesArrays] = useState<MovieType[][]>([]);

  useEffect(() => {
    const tempArrays = [];
    let tempArray: MovieType[] = [];

    if (moviesData) {
      for (let i = 0; i < moviesData?.length; i++) {
        tempArray.push(moviesData[i]);

        if ((i + 1) % 10 === 0 || i === moviesData.length - 1) {
          tempArrays.push(tempArray);
          tempArray = [];
        }
      }

      setMoviesArrays(tempArrays);
    }
  }, [moviesData?.length]);

  return (
    <Slider {...settingsToComponents}>
      {width > 768
        ? moviesArrays.map((moviesData) => {
            return <CardsContainer data={moviesData} />;
          })
        : moviesData?.map((movie) => {
            return (
              <div className="sliderCardContainer">
                <Card movieData={movie} />
              </div>
            );
          })}
    </Slider>
  );
}

export default BillboardSlider;

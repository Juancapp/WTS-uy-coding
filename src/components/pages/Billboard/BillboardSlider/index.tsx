import Slider from "react-slick";
import { MovieType } from "../../../../types";
import "./index.css";
import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer";
import { useMoviesStore } from "../../../../zustand/store";

function BillboardSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesData]);

  return (
    <Slider {...settings}>
      {moviesArrays.map((moviesData) => {
        return <CardsContainer data={moviesData} />;
      })}
    </Slider>
  );
}

export default BillboardSlider;

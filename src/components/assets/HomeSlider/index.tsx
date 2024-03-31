import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import MovieTicket from "../MovieTicket";
import View from "../View";

function HomeSlider() {
  const settings = {
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const style = {
    backgroundImage:
      "url('https://s.yimg.com/ny/api/res/1.2/KAcBiAjfBGsEsOhT0fbw7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzOTE7Y2Y9d2VicA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5')",
  };

  const style2 = {
    ...style,
    backgroundImage:
      "url('https://s.yimg.com/ny/api/res/1.2/2jMCrfKnzm47Cu2e11TuOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNzc7Y2Y9d2VicA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/842825d1a8f5526a10befa7c6c8f4756')",
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div className="cardContainer">
          <Rating rating={8} />
          <div className="image" style={style} />
          <div className="movieAndBuyContainer">
            <div className="movieInfo">
              <h2>John Wick 4</h2>
              <p>
                After the devastating events of Avengers: Infinity War (2018),
                the universe is in ruins. With the help of remaining allies, the
                Avengers assemble once more in order to reverse Thanos' actions
                and restore balance to the universe.
              </p>
            </div>
            <h1>John Wick 4</h1>
            <div className="buttonsContainer">
              <MovieTicket text={true} />
              <View />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <Rating rating={8} />
          <div className="image" style={style2} />
          <div className="movieAndBuyContainer">
            <div className="movieInfo">
              <h2>John Wick 4</h2>
              <p>
                After the devastating events of Avengers: Infinity War (2018),
                the universe is in ruins. With the help of remaining allies, the
                Avengers assemble once more in order to reverse Thanos' actions
                and restore balance to the universe.
              </p>
            </div>
            <h1>John Wick 4</h1>
            <div className="buttonsContainer">
              <MovieTicket text={true} />
              <View />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;

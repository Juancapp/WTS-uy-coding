import { useState } from "react";
import MovieTicket from "../../assets/MovieTicket";
import "./index.css";
import Button from "../../assets/Button";
import { ButtonVariantEnum } from "../../assets/Button/types";

function Navbar() {
  const [isFeaturedClicked, setIsFeaturedClicked] = useState(true);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(true);

  const handleFeaturedClick = () => {
    setIsFeaturedClicked(true);
    window.location.href = "#home";
  };

  const handleBillboardClick = () => {
    setIsFeaturedClicked(false);
    window.location.href = "#billboard";
  };

  return (
    <nav className="navContainer">
      <img src="/images/logo.png" alt="dream view" />
      <div className="navRightButtonsWrapper">
        <button
          className={`${
            isFeaturedHovered ? "selectedButton" : "nonSelectedButton"
          } basisButton`}
          onMouseEnter={() => setIsFeaturedHovered(true)}
          onMouseLeave={() => !isFeaturedClicked && setIsFeaturedHovered(false)}
          onClick={handleFeaturedClick}
        >
          Destacadas
        </button>
        <button
          className={`${
            !isFeaturedHovered ? "selectedButton" : "nonSelectedButton"
          } basisButton`}
          onMouseEnter={() => setIsFeaturedHovered(false)}
          onMouseLeave={() => isFeaturedClicked && setIsFeaturedHovered(true)}
          onClick={handleBillboardClick}
        >
          Cartelera
        </button>
        <Button
          variant={ButtonVariantEnum.PURPLE}
          onClick={() => (window.location.href = "#purchase")}
        >
          Comprar ticket
        </Button>
      </div>
      <div className="ticketWrapper">
        <MovieTicket />
      </div>
    </nav>
  );
}

export default Navbar;

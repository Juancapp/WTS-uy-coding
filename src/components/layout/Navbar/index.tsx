import { useState } from "react";
import MovieTicket from "../../assets/MovieTicket";
import "./index.css";
import Button from "../../assets/Button";
import { ButtonVariantEnum } from "../../assets/Button/types";
import { usePurchaseStateStore } from "../../../zustand/store";
import { PurchaseStateEnum } from "../../pages/Purchase/types";

function Navbar() {
  const { setPurchaseState } = usePurchaseStateStore((state) => state);

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

  const handlePurchaseClick = () => {
    window.location.href = "#purchase";
    setPurchaseState(PurchaseStateEnum.MOVIE_FORM);
  };

  const buttonOptions = [
    {
      text: "Destacadas",
      onMouseEnter: () => setIsFeaturedHovered(true),
      onMouseLeave: () => !isFeaturedClicked && setIsFeaturedHovered(false),
      onClick: handleFeaturedClick,
    },
    {
      text: "Cartelera",
      onMouseEnter: () => setIsFeaturedHovered(false),
      onMouseLeave: () => isFeaturedClicked && setIsFeaturedHovered(true),
      onClick: handleBillboardClick,
    },
  ];

  return (
    <nav className="navContainer">
      <img src="/images/logo.png" alt="dream view" />
      <div className="navRightButtonsWrapper">
        {buttonOptions.map((option) => {
          return (
            <button
              key={buttonOptions.indexOf(option)}
              className={`${
                isFeaturedHovered ? "selectedButton" : "nonSelectedButton"
              } basisButton`}
              onMouseEnter={option.onMouseEnter}
              onMouseLeave={option.onMouseLeave}
              onClick={option.onClick}
            >
              {option.text}
            </button>
          );
        })}
        <Button
          variant={ButtonVariantEnum.PURPLE}
          onClick={handlePurchaseClick}
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

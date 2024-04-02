import "./index.css";
import { PurchaseStateEnum } from "./types";
import { useMoviesStore, usePurchaseStateStore } from "../../../zustand/store";
import PurchaseForm from "./Forms/PurchaseForm";
import InformationForm from "./Forms/InformationForm";
import { useState } from "react";
import Successfully from "./Successfully";

function Purchase() {
  const { purchaseState } = usePurchaseStateStore((state) => state);
  const { date } = useMoviesStore((state) => state.selectedMovie);
  const [name, setName] = useState<string>();

  const subTitles = {
    [PurchaseStateEnum.MOVIE_FORM]: "Selecciona una función",
    [PurchaseStateEnum.PERSONAL_INFO_FORM]: "Completa tu información personal",
    [PurchaseStateEnum.PURCHASE_SUCCESSFULLY]: "Comprar ticket",
  };

  return (
    <section className="purchaseContainer" id="purchase">
      <div
        className={
          purchaseState === PurchaseStateEnum.PURCHASE_SUCCESSFULLY
            ? "successWrapper"
            : undefined
        }
      >
        <h1
          className={
            purchaseState === PurchaseStateEnum.PURCHASE_SUCCESSFULLY
              ? "successTitle"
              : undefined
          }
        >
          {purchaseState !== PurchaseStateEnum.PURCHASE_SUCCESSFULLY || !name
            ? "Comprar Ticket"
            : `¡Felicitaciones ${
                name?.charAt(0)?.toUpperCase() + name?.slice(1)
              }!`}
        </h1>
        <h2
          className={
            purchaseState === PurchaseStateEnum.PURCHASE_SUCCESSFULLY
              ? "successSubtitle"
              : undefined
          }
        >
          {subTitles[purchaseState]}
        </h2>
      </div>
      {purchaseState === PurchaseStateEnum.MOVIE_FORM && (
        <>
          <img className="bucketImg" src="./images/bucket.png" />
          <img className="popcornImg" src="./images/popcorn.png" />
          <img className="mobilePopcornImg" src="./images/mobilePopcorn.png" />
        </>
      )}
      {purchaseState === PurchaseStateEnum.MOVIE_FORM && <PurchaseForm />}
      {purchaseState === PurchaseStateEnum.PERSONAL_INFO_FORM && (
        <InformationForm setName={setName} />
      )}
      {purchaseState === PurchaseStateEnum.PURCHASE_SUCCESSFULLY && (
        <Successfully date={date} />
      )}
    </section>
  );
}

export default Purchase;

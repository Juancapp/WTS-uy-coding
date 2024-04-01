import { useEffect, useState } from "react";
import "./index.css";
import { PurchaseFormProps, PurchaseStateEnum } from "./types";
import PurchaseForm from "./PurchaseForm";

function Purchase() {
  const [purchaseState, setPurchaseState] = useState<PurchaseStateEnum>(
    PurchaseStateEnum.MOVIE_FORM
  );

  const [selectedMovie, setSelectedMovie] = useState<PurchaseFormProps>({
    title: "",
    date: "",
    place: "",
  });

  return (
    <section className="purchaseContainer">
      <div>
        <h1>Comprar Ticket</h1>
        <h2>Selecciona una función</h2>
      </div>

      {purchaseState === PurchaseStateEnum.MOVIE_FORM && (
        <>
          <img className="bucketImg" src="./images/bucket.png" />
          <img className="popcornImg" src="./images/popcorn.png" />
        </>
      )}
      {purchaseState === PurchaseStateEnum.MOVIE_FORM && (
        <PurchaseForm
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </section>
  );
}

export default Purchase;

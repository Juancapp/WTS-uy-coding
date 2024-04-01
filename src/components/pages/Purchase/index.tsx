import "./index.css";
import { PurchaseStateEnum } from "./types";
import { useMoviesStore, usePurchaseStateStore } from "../../../zustand/store";
import PurchaseForm from "./Forms/PurchaseForm";
import InformationForm from "./Forms/InformationForm";
import { useEffect, useState } from "react";

function Purchase() {
  const { purchaseState } = usePurchaseStateStore((state) => state);
  const { date } = useMoviesStore((state) => state.selectedMovie);
  const [name, setName] = useState<string>();

  useEffect(() => {
    console.log(date.slice(0, 10));

    console.log(date.slice(-5));
  }, [date]);

  return (
    <section className="purchaseContainer" id="purchase">
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
      {purchaseState === PurchaseStateEnum.MOVIE_FORM && <PurchaseForm />}
      {purchaseState === PurchaseStateEnum.PERSONAL_INFO_FORM && (
        <InformationForm setName={setName} />
      )}
    </section>
  );
}

export default Purchase;

import "./index.css";
import { PurchaseStateEnum } from "./types";
import PurchaseForm from "./PurchaseForm";
import { usePurchaseStateStore } from "../../../zustand/store";

function Purchase() {
  const { purchaseState } = usePurchaseStateStore((state) => state);

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
    </section>
  );
}

export default Purchase;

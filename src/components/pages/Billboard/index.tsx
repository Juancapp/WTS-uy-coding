import BillboardSlider from "./BillboardSlider";
import "./index.css";

function Billboard() {
  return (
    <section className="billContainer">
      <img src="./images/billboardPopCorn.png" className="billboardPopCorn" />
      <h1>En cartelera</h1>
      <BillboardSlider />
    </section>
  );
}

export default Billboard;

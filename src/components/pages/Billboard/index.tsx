import BillboardSlider from "./BillboardSlider";
import "./index.css";

function Billboard() {
  return (
    <section id="billboard" className="billContainer">
      <img src="./images/popcorn.png" className="billboardPopcorn" />
      <h1>En cartelera</h1>
      <BillboardSlider />
    </section>
  );
}

export default Billboard;

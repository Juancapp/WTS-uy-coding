import BillboardSlider from "./BillboardSlider";
import "./index.css";

function Billboard() {
  return (
    <div className="billContainer">
      <img src="./images/billboardPopCorn.png" className="billboardPopCorn" />
      <h1>En cartelera</h1>
      <BillboardSlider />
    </div>
  );
}

export default Billboard;

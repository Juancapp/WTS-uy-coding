import { useState } from "react";
import "./index.css";
import HomeSlider from "./HomeSlider";

function Home() {
  const [imgURL, setImgURL] = useState("");

  return (
    <section
      id="home"
      className="homeContainer"
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <HomeSlider setImgURL={setImgURL} />
    </section>
  );
}

export default Home;

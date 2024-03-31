import { useEffect, useState } from "react";
import "./index.css";
import HomeSlider from "./HomeSlider";

function Home() {
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {}, [imgURL]);

  return (
    <section
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

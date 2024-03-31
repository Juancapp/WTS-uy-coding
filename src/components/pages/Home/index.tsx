import { useEffect, useState } from "react";
import "./index.css";
import HomeSlider from "./HomeSlider";

function Home() {
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {}, [imgURL]);

  return (
    <div
      className="homeContainer"
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <HomeSlider setImgURL={setImgURL} />
    </div>
  );
}

export default Home;

import "./index.css";

function View({ url }: { url: string }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="viewContainer" onClick={handleClick}>
      <img src="/images/view.png" alt="view trailer" />
      <div className="shadow"></div>
      <p>Ver trailer</p>
    </div>
  );
}

export default View;

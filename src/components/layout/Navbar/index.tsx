import MovieTicket from "../../assets/MovieTicket";
import "./index.css";

function Navbar() {
  return (
    <div className="navContainer">
      <img src="/images/logo.png" alt="dream view" />
      <MovieTicket />
    </div>
  );
}

export default Navbar;

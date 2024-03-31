import MovieTicket from "../../assets/MovieTicket";
import "./index.css";

function Navbar() {
  return (
    <nav className="navContainer">
      <img src="/images/logo.png" alt="dream view" />
      <MovieTicket />
    </nav>
  );
}

export default Navbar;

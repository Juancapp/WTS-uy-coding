import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectToHome from "./components/redirect";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/billboard" element={<h1>Billboard</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

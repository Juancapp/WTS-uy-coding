import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectToHome from "./components/redirect";
import Navbar from "./components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path="/home" element={<h1>Hello</h1>} />
          <Route path="/billboard" element={<h1>Billboard</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

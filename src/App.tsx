import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectToHome from "./components/redirect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path="/home" element={<h1>Hola</h1>} />
          <Route path="/billboard" element={<h1>Billboard</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

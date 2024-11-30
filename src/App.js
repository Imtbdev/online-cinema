import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/films/:id" element={<FilmPage />} />
      <Route path="/page/:page" element={<MainPage />} />
    </Routes>
  );
}

export default App;

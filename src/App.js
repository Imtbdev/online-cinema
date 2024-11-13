import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FilmPage from "./pages/FilmPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/films/:id" element={<FilmPage />} />
    </Routes>
  );
}

export default App;

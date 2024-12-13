import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthenticationPage from "./pages/AuthenticationPage";
import FilmPage from "./pages/FilmPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/films/:id" element={<FilmPage />} />
      <Route path="/register" element={<AuthenticationPage />} />
      <Route path="/page/:number" element={<MainPage />} />
    </Routes>
  );
}

export default App;

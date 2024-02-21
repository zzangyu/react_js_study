import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Moives";
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MovieApp;

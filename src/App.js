import { Routes, Route } from "react-router-dom";
import TailwindCarousel from "./routes/TailwindCarousel";
import Home from "./routes/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="tailwind" element={<TailwindCarousel />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

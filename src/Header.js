import TailwindCarousel from "./routes/TailwindCarousel";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul className="flex flex-row gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tailwind">Tailwind</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;

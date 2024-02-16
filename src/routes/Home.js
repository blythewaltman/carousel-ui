import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tailwind">Tailwind</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <h1>
        This site services as a reference as a way to create carousels through
        different methods
      </h1>

      <Layout />
    </>
  );
}

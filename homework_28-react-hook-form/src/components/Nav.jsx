import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav class="flex flex-row pad">
      <Link class="basis-64" to="/home">
        Home
      </Link>
      <Link class="basis-64" to="/about">
        About
      </Link>
      <Link class="basis-64" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

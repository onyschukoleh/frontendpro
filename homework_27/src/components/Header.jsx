import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";
// import "../styles/Header.css";
export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <div>
          <h2>My React App</h2>
        </div>

        <nav>
          <Link className={`header ${theme}`} to="/">
            Головна
          </Link>
          <Link className={`header ${theme}`} to="/contacts">
            Контакти
          </Link>
          <Link className={`header ${theme}`} to="/about">
            Про мене
          </Link>
        </nav>
        <button className={`header ${theme}`} onClick={toggleTheme}>
          Змінити тему
        </button>
      </div>
    </header>
  );
};

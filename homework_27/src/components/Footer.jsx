import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <h5> © 2026 Front End Pro</h5>
      </div>
    </footer>
  );
};

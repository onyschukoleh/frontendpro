import { useState } from "react";

export function ChangeColor() {
  const [color, setColor] = useState("light");

  const toggleTheme = color === "light" ? "white" : "grey";

  return (
      <button style={{ backgroundColor: toggleTheme }} onClick={() => setColor(color === "light" ? "dark" : "light")}>
       {toggleTheme}
      </button>
  );
}

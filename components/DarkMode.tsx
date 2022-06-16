import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function DarkMode() {
   const [darkMode, setDarkMode] = useState<Boolean>(false);

  if (typeof window !== "undefined") {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  return (
    <button
      className="dark-mode_button"
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <div className="icon">
        <FaMoon />
      </div>
      <p className="dark-mode_text">Dark Mode</p>
    </button>
  );
}
export default DarkMode;

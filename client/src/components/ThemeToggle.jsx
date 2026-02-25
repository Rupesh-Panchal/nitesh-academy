import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </div>
  );
};

export default ThemeToggle;
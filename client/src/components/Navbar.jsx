import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [open]);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">Nitish Academy</div>

        <ul className="nav-links desktop">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setOpen(true)}
        >
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${open ? "show" : ""}`}>

        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        ></div>

        <div className="menu-panel">

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <ul className="menu-links">
            <li onClick={() => setOpen(false)}>Home</li>
            <li onClick={() => setOpen(false)}>Courses</li>
            <li onClick={() => setOpen(false)}>About</li>
            <li onClick={() => setOpen(false)}>Blogs</li>
            <li onClick={() => setOpen(false)}>Contact</li>
          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
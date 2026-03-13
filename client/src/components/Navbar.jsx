// import { useState, useEffect } from "react";
// import "../styles/Navbar.css";

// function Navbar() {

//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (open) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [open]);

//   return (
//     <nav className="navbar">

//       <div className="nav-container">

//         <div className="logo">Nitish Academy</div>

//         <ul className="nav-links desktop">
//           <li>Home</li>
//           <li>Courses</li>
//           <li>About</li>
//           <li>Blogs</li>
//           <li>Contact</li>
//         </ul>

//         <div
//           className="hamburger"
//           onClick={() => setOpen(true)}
//         >
//           ☰
//         </div>

//       </div>

//       {/* MOBILE MENU */}

//       <div className={`mobile-menu ${open ? "show" : ""}`}>

//         <div
//           className="menu-overlay"
//           onClick={() => setOpen(false)}
//         ></div>

//         <div className="menu-panel">

//           <button
//             className="close-btn"
//             onClick={() => setOpen(false)}
//           >
//             ✕
//           </button>

//           <ul className="menu-links">
//             <li onClick={() => setOpen(false)}>Home</li>
//             <li onClick={() => setOpen(false)}>Courses</li>
//             <li onClick={() => setOpen(false)}>About</li>
//             <li onClick={() => setOpen(false)}>Blogs</li>
//             <li onClick={() => setOpen(false)}>Contact</li>
//           </ul>

//         </div>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;



///////////////////////////////////////

import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <span>NITISH ACADEMY</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
            <button className="enroll-btn">Enroll Now</button>
          </div>

          {!menuOpen && (
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </nav>

      <div className={`menu-overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>

      <aside className={`mobile-drawer ${menuOpen ? "show" : ""}`}>
        <div className="drawer-top">
          <a href="#" className="drawer-logo" onClick={closeMenu}>
            <span>NITISH</span>
            <span>ACADEMY</span>
          </a>

          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="drawer-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#courses" onClick={closeMenu}>Courses</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#results" onClick={closeMenu}>Results</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="drawer-bottom">
          <button className="enroll-btn mobile-enroll-btn">Enroll Now</button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
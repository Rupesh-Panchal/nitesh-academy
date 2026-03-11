import "../styles/Footer.css";

const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>NITISH ACADEMY</h2>

          <p>
            Empowering students with expert guidance
            and proven results.
          </p>

        </div>

        <div className="footer-section">

          <h3>Navigation</h3>

          <p>Home</p>
          <p>Courses</p>
          <p>About</p>
          <p>Contact</p>

        </div>

        <div className="footer-section">

          <h3>Courses</h3>

          <p>SSC</p>
          <p>HSC</p>
          <p>JEE</p>
          <p>NEET</p>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>Mumbai</p>
          <p>+91 9876543210</p>
          <p>nitishacademy@gmail.com</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nitish Academy
      </div>

    </footer>
  );
};

export default Footer;
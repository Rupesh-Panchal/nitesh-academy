import "../styles/Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* ABOUT */}
                <div className="footer-section">
                    <h2 className="footer-logo">NITISH ACADEMY</h2>
                    <p className="footer-about">Empowering students with expert guidance, structured learning and proven results.</p>
                </div>
                {/* NAVIGATION */}
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <a href="#">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                {/* COURSES */}
                <div className="footer-section">
                    <h3>Courses</h3>
                    <a href="#">SSC</a>
                    <a href="#">HSC</a>
                    <a href="#">JEE</a>
                    <a href="#">NEET</a>
                </div>
                {/* CONTACT */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Mumbai, India</p>
                    <p>+91 9876543210</p>
                    <p>nitishacademy@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">© 2026 Nitish Academy • All Rights Reserved</div>
        </footer>
    );
};
export default Footer;
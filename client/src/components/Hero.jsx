import "../styles/Hero.css";
import heroImg from "../assets/hero.png";
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* LEFT CONTENT */}
                <div className="hero-left">
                    <p className="hero-subtitle">Best Coaching Institute</p>
                    <h1 className="hero-title">Build Your Future <br/>With <span>Nitish Academy</span></h1>
                    <p className="hero-desc">Classes for 8th – 12th, JEE, NEET, and competitive exams.Learn from expert teachers and achieve academic success.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Enroll Now</button>
                        <button className="btn-outline">View Courses</button>
                    </div>
                </div>
                {/* RIGHT IMAGE */}
                <div className="hero-right">
                    <img src={heroImg} alt="Students studying"/>
                </div>
            </div>
        </section>
    );
};
export default Hero;
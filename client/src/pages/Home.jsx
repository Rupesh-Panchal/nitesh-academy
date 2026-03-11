import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {

  return (
    <div>

      <Navbar />

      <section className="hero">

        <div className="container hero-grid">

          <div className="hero-text">

            <h1>
              Build Your Future With
              <span> Nitish Academy</span>
            </h1>

            <p>
              India's trusted coaching for SSC, HSC,
              JEE and NEET preparation.
              Learn from expert teachers and achieve success.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Enroll Now
              </button>

              <button className="secondary-btn">
                View Courses
              </button>

            </div>

          </div>

          <div className="hero-image">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="students"
            />

          </div>

        </div>

      </section>

      {/* COURSES */}

      <section className="courses container">

        <h2>Our Courses</h2>

        <div className="course-grid">

          <div className="course-card">
            <h3>SSC</h3>
            <p>Complete preparation for SSC board exams</p>
          </div>

          <div className="course-card">
            <h3>HSC</h3>
            <p>Science & Commerce coaching</p>
          </div>

          <div className="course-card">
            <h3>JEE</h3>
            <p>Advanced preparation for IIT</p>
          </div>

          <div className="course-card">
            <h3>NEET</h3>
            <p>Medical entrance coaching</p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Home;
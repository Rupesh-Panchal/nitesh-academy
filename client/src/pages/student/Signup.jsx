import React from "react";
import "../styles.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>User Signup</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
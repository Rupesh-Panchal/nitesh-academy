import { useNavigate } from "react-router-dom";
import "../styles/Topbar.css";

const Topbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="topbar">

      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="topbar-right">

        <div className="user-info">
          <span className="user-name">
            {user?.first_name} {user?.last_name}
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="avatar"
          />
        </div>

        <button className="logoutBtn" onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
};

export default Topbar;
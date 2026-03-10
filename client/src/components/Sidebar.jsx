// import { useNavigate } from "react-router-dom";
// import "../styles/Dashboard.css";

// const Sidebar = ({ role }) => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <div className="sidebar">
//       <h2 className="logo">Nitesh Academy</h2>

//       <ul>
//         <li onClick={() => navigate(`/${role}-dashboard`)}>
//           Dashboard
//         </li>

//         {role === "admin" && (
//           <li>Manage Users</li>
//         )}

//         <li onClick={logout} className="logout">
//           Logout
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Sidebar = ({ role }) => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <h2 className="logo">Nitish Academy</h2>

      <ul>

        <li onClick={() => navigate(`/${role}-dashboard`)}>
          Dashboard
        </li>

        {role === "admin" && (
          <li onClick={() => navigate("/manage-users")}>
            Manage Users
          </li>
        )}

        <li onClick={logout} className="logout">
          Logout
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
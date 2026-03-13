// // import Sidebar from "../../components/Sidebar";
// // import "../../styles/Dashboard.css";

// // const AdminDashboard = () => {
// //   const user = JSON.parse(localStorage.getItem("user"));

// //   return (
// //     <div className="dashboard-container">
// //       <Sidebar role="admin" />

// //       <div className="dashboard-content">
// //         <h1>Admin Dashboard 👑</h1>
// //         <p>Welcome, {user?.name}</p>

// //         <div className="card-grid">
// //           <div className="card">Total Students: 25</div>
// //           <div className="card">Total Admins: 3</div>
// //           <div className="card">System Active</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import "../styles/AdminDashboard.css";

// const AdminDashboard = () => {
//   return (
//     <div className="dashboardContainer">

//       <Sidebar />

//       <div className="dashboardMain">

//         <Topbar />

//         <div className="statsGrid">

//           <div className="statCard">
//             <h3>Total Users</h3>
//             <p>120</p>
//           </div>

//           <div className="statCard">
//             <h3>Total Courses</h3>
//             <p>8</p>
//           </div>

//           <div className="statCard">
//             <h3>Enrollments</h3>
//             <p>320</p>
//           </div>

//           <div className="statCard">
//             <h3>Revenue</h3>
//             <p>₹45,000</p>
//           </div>

//         </div>

//         <div className="tableSection">

//           <h2>Recent Users</h2>

//           <table>

//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Vivek Gupta</td>
//                 <td>vivek@email.com</td>
//                 <td>9876543210</td>
//               </tr>
//             </tbody>

//           </table>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;

/////////////////////////////////




import Sidebar from "./AdminSidebar";
import Topbar from "./AdminNavbar";

import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="dashboardContainer">

      {/* SIDEBAR */}
      <Sidebar role="admin" />

      <div className="dashboardMain">

        {/* TOP NAVBAR */}
        <Topbar />

        {/* WELCOME TEXT */}
        <h2 className="welcomeText">
          Welcome, {user?.first_name || "Admin"} 👑
        </h2>

        {/* STATS */}
        <div className="statsGrid">

          <div className="statCard usersCard">
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div className="statCard coursesCard">
            <h3>Total Courses</h3>
            <p>8</p>
          </div>

          <div className="statCard enrollCard">
            <h3>Enrollments</h3>
            <p>320</p>
          </div>

          <div className="statCard revenueCard">
            <h3>Revenue</h3>
            <p>₹45,000</p>
          </div>

        </div>

        {/* RECENT USERS TABLE */}

        <div className="tableSection">

          <div className="tableHeader">

            <h2>Recent Users</h2>

            <button className="viewAllBtn">
              View All
            </button>

          </div>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Vivek Gupta</td>
                <td>vivek@email.com</td>
                <td>9876543210</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default AdminDashboard;
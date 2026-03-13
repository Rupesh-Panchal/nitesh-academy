import { Link } from "react-router-dom"
import "../../styles/AdminSidebar.css"

const AdminSidebar = () => {

return (

<div className="admin-sidebar">

<h2 className="logo">Admin Panel</h2>

<nav>

<Link to="/admin/dashboard">Dashboard</Link>

<Link to="/admin/add-achiever">Add Achiever</Link>

<Link to="/admin/manage-achievers">Manage Achievers</Link>

<Link to="/">Back To Website</Link>

</nav>

</div>

)

}

export default AdminSidebar
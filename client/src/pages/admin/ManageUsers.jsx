import { useEffect,useState } from "react";
import api from "../../services/api";

const ManageUsers = ()=>{

const [users,setUsers] = useState([]);

useEffect(()=>{

api.get("/admin/users")
.then(res=>setUsers(res.data));

},[]);

const deleteUser = async(id)=>{

await api.delete(`/admin/users/${id}`);

setUsers(users.filter(u=>u.id!==id));

};

return(

<div>

<h2>Manage Users</h2>

<table>

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Role</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{users.map(u=>(

<tr key={u.id}>

<td>{u.id}</td>
<td>{u.first_name} {u.last_name}</td>
<td>{u.email}</td>
<td>{u.phone}</td>
<td>{u.role}</td>

<td>

<button onClick={()=>deleteUser(u.id)}>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

};

export default ManageUsers;
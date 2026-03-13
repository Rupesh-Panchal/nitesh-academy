import { useEffect, useState } from "react";
import axios from "axios";

const ManageFeatures = () => {

const [features,setFeatures] = useState([]);

const fetchFeatures = () => {

axios
.get("http://localhost:5000/api/features")
.then(res => setFeatures(res.data))
.catch(err => console.log(err));

};

useEffect(()=>{
fetchFeatures();
},[]);


const deleteFeature = async(id)=>{

if(!window.confirm("Delete this feature?")) return;

await axios.delete(
`http://localhost:5000/api/features/${id}`
);

fetchFeatures();

};


return(

<div style={{padding:"40px"}}>

<h2>Manage Features</h2>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>Icon</th>
<th>Title</th>
<th>Description</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{features.map(item=>(

<tr key={item.id}>

<td>

<img
src={`http://localhost:5000/uploads/icons/${item.icon}`}
width="40"
/>

</td>

<td>{item.title}</td>

<td>{item.description}</td>

<td>

<button
onClick={()=>deleteFeature(item.id)}
style={{
background:"red",
color:"white",
border:"none",
padding:"5px 10px"
}}
>
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

export default ManageFeatures;
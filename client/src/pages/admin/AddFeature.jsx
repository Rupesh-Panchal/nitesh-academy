import { useState } from "react";
import axios from "axios";

const AddFeature = () => {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [icon,setIcon] = useState(null);

const handleSubmit = async(e)=>{

e.preventDefault();

const data = new FormData();

data.append("title",title);
data.append("description",description);
data.append("icon",icon);

try{

await axios.post(
"http://localhost:5000/api/features/add",
data
);

alert("Feature Added");

setTitle("");
setDescription("");
setIcon(null);

}catch(err){

alert("Error");

}

};

return(

<div className="addFeature">

<h2>Add Feature</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Feature Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
placeholder="Feature Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="file"
accept="image/*"
onChange={(e)=>setIcon(e.target.files[0])}
/>

<button type="submit">
Add Feature
</button>

</form>

</div>

);

};

export default AddFeature;
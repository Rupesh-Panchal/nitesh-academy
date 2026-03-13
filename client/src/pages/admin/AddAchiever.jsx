// import { useState } from "react";
// import axios from "axios";
// import "../../styles/AddAchiever.css";

// import { useDropzone } from "react-dropzone";

// const {getRootProps,getInputProps} = useDropzone({
//   accept:"image/*",
//   onDrop:(acceptedFiles)=>{
//     setImage(acceptedFiles[0]);
//   }
// });

// const AddAchiever = () => {

//   const [form, setForm] = useState({
//     name: "",
//     score: "",
//     board: "",
//     section: "",
//     rank_text: "",
//     image: null
//   });

//   const [preview, setPreview] = useState(null);


//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value
//     });

//   };


//   const handleImage = (e) => {

//     const file = e.target.files[0];

//     setForm({
//       ...form,
//       image: file
//     });

//     setPreview(URL.createObjectURL(file));

//   };


//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     if (!form.name || !form.score || !form.board || !form.section || !form.rank_text || !form.image) {
//       alert("All fields required");
//       return;
//     }

//     try {

//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("score", form.score);
//       formData.append("board", form.board);
//       formData.append("section", form.section);
//       formData.append("rank_text", form.rank_text);
//       formData.append("image", form.image);

//       const res = await axios.post(
//         "http://localhost:5000/api/achievers/add",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       );

//       alert(res.data.message);

//       setForm({
//         name: "",
//         score: "",
//         board: "",
//         section: "",
//         rank_text: "",
//         image: null
//       });

//       setPreview(null);

//     } catch (error) {

//       console.log(error);
//       alert("Error adding achiever");

//     }

//   };


//   return (

//     <div className="addAchieverPage">

//       <h2>Add Top Achiever</h2>

//       <form onSubmit={handleSubmit} className="achieverForm">

//         <input
//           type="text"
//           name="name"
//           placeholder="Student Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="score"
//           placeholder="Score (Example: 99.8)"
//           value={form.score}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="board"
//           placeholder="Board (CBSE / SSC / ICSE)"
//           value={form.board}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="section"
//           placeholder="Class (Example: 10)"
//           value={form.section}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="rank_text"
//           placeholder="Rank (Example: AIR 1)"
//           value={form.rank_text}
//           onChange={handleChange}
//         />

//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           onChange={handleImage}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             className="previewImage"
//           />
//         )}

//         <button type="submit">
//           Add Achiever
//         </button>

//       </form>

//     </div>

//   );

// };

// export default AddAchiever;



import { useState } from "react";
import axios from "axios";
import "../../styles/AddAchiever.css";

const AddAchiever = () => {

  const [form,setForm] = useState({
    name:"",
    score:"",
    board:"",
    section:"",
    rank_text:""
  });

  const [image,setImage] = useState(null);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleImage = (e)=>{
    setImage(e.target.files[0]);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const data = new FormData();

    data.append("name",form.name);
    data.append("score",form.score);
    data.append("board",form.board);
    data.append("section",form.section);
    data.append("rank_text",form.rank_text);
    data.append("image",image);

    try{

      const res = await axios.post(
        "http://localhost:5000/api/achievers/add",
        data
      );

      alert(res.data.message);

      setForm({
        name:"",
        score:"",
        board:"",
        section:"",
        rank_text:""
      });

      setImage(null);

    }catch(err){
      console.log(err);
      alert("Error adding achiever");
    }

  };

  return(

    <div className="addAchieverPage">

      <h2>Add New Achiever</h2>

      <form onSubmit={handleSubmit} className="achieverForm">

        <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="score"
        placeholder="Score (eg: 99.8)"
        value={form.score}
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="board"
        placeholder="Board (SSC/CBSE)"
        value={form.board}
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="section"
        placeholder="Section"
        value={form.section}
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="rank_text"
        placeholder="Rank Text (eg: AIR 1)"
        value={form.rank_text}
        onChange={handleChange}
        required
        />

        <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        required
        />

        <button type="submit">
          Add Achiever
        </button>

      </form>

    </div>

  );

};

export default AddAchiever;
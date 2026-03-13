// import db from "../db.js";
import db from "../config/db.js";

export const getStats = (req,res)=>{

const query = `
SELECT
COUNT(*) AS totalUsers,
SUM(role='student') AS totalStudents,
SUM(role='admin') AS totalAdmins
FROM users
`;

db.query(query,(err,result)=>{
res.json(result[0]);
});

};


export const getUsers = (req,res)=>{

db.query("SELECT id,first_name,last_name,email,phone,role FROM users",
(err,result)=>{

res.json(result);

});

};


export const deleteUser = (req,res)=>{

const {id} = req.params;

db.query("DELETE FROM users WHERE id=?",[id],
(err)=>{

res.json({message:"User deleted"});

});

};
import express from "express";
import db from "../config/db.js";
import multer from "multer";

const router = express.Router();

/* ICON UPLOAD */

const storage = multer.diskStorage({

destination:(req,file,cb)=>{
cb(null,"uploads/icons/");
},

filename:(req,file,cb)=>{
cb(null,Date.now()+"-"+file.originalname);
}

});

const upload = multer({storage});


/* ADD FEATURE */

router.post("/add", upload.single("icon"), async (req,res)=>{

try{

const {title,description} = req.body;

const icon = req.file.filename;

await db.query(
"INSERT INTO features(title,description,icon) VALUES(?,?,?)",
[title,description,icon]
);

res.json({message:"Feature added successfully"});

}catch(err){

console.log(err);
res.status(500).json(err);

}

});


/* GET FEATURES */

router.get("/", async (req,res)=>{

try{

const [rows] = await db.query(
"SELECT * FROM features ORDER BY display_order ASC"
);

res.json(rows);

}catch(err){

res.status(500).json(err);

}

});


/* DELETE FEATURE */

router.delete("/:id", async (req,res)=>{

try{

await db.query(
"DELETE FROM features WHERE id=?",
[req.params.id]
);

res.json({message:"Feature deleted"});

}catch(err){

res.status(500).json(err);

}

});

export default router;
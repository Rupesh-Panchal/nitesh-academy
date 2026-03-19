import express from "express";
import db from "../config/db.js";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const upload = multer({storage});
router.post("/add", upload.single("image"), async (req,res)=>{  
    try{
        const {name,score,board,section,rank_text} = req.body;
        const image = req.file.filename;
        await db.query("INSERT INTO achievers(name,score,board,section,rank_text,image) VALUES (?,?,?,?,?,?)", [name,score,board,section,rank_text,image]);
        res.json({message:"Achiever added successfully"});
    } catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
    }
});

router.get("/", async (req,res)=>{
    try{
        const [rows] = await db.query("SELECT * FROM achievers ORDER BY display_order ASC");
        res.json(rows);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req,res)=>{
    try{
        await db.query("DELETE FROM achievers WHERE id=?", [req.params.id]);
        res.json({message:"Deleted Successfully"});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/reorder", async (req,res)=>{
    const {list} = req.body;
    try{
        for(let i=0;i<list.length;i++){
            await db.query("UPDATE achievers SET display_order=? WHERE id=?", [i,list[i]]);
        }
        res.json({message:"Order Updated"});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

export default router;
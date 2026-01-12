import express from 'express'
import {getalluser,getbyid,deletebyid,updatebyid,newdata}  from "../controller/usercontroller.js";

let user=express.Router()
user.get("/",getalluser)
user.delete("/:id",deletebyid)
user.put("/:id",updatebyid)
user.get("/:id",getbyid)
user.post("/",newdata)

export default user
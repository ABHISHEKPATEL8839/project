import express from 'express'
import {newdata, udatecategery, deletedata, getalldata, getbyid}  from "../controller/catecontroller.js";

let cate=express.Router()
cate.get("/",getalldata)
cate.get("/:id",getbyid)
cate.delete("/:id",deletedata)
cate.put("/:id",udatecategery)
cate.post("/",newdata)

export default cate
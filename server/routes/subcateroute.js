import express from 'express'
import  {newdata, udatecategery, deletedata, getalldata, getbyid} from "../controller/subcatecontroller.js";
let subcate=express.Router()
subcate.get("/",getalldata)
subcate.delete("/:id",deletedata)
subcate.put("/:id",udatecategery)
subcate.get("/:id",getbyid)
subcate.post("/",newdata)
export default subcate
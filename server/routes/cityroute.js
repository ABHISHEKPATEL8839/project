import express from 'express'
import {newdata, updatecategery, deletedata, getalldata, getbyid} from "../controller/citycontroller.js";

let app=express.Router()
app.get("/",getalldata)
app.delete("/:id",deletedata)
app.put("/:id",updatecategery)
app.get("/:id",getbyid)
app.post("/",newdata)

export default app

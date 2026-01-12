import express from 'express'
import route from "./routes/allroute.js";
import { port } from './config/conn.js';
import cors from 'cors'
let app=express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
app.use(route)
app.listen(port,()=>{
    console.log("server running to port------------",port)
})
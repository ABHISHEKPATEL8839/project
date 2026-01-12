import express from 'express'
import app from "./cityroute.js";
import subcate from './subcateroute.js';
import cate from './cateroute.js';
import user from './userroute.js';
import userauth from './UserAuthRoute.js'
let route=express.Router()
route.use("/api/v1/city",app)
route.use("/api/v1/user",user)
route.use("/api/v1/categery",cate)
route.use("/api/v1/scategery",subcate)
route.use("/api/v1/auth",userauth)
export default route;

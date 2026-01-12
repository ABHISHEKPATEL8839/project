import express from 'express'
import auth from '../controller/UerAuthController.js'

let user=express.Router()
user.post("/",auth)


export default user
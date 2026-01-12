import usermodel from "../model/usermodel.js";
let newdata = async(req, res)=>{
    let result = await usermodel.create(req.body);
    res.send({success: true, result});
}
let getalluser = async(req, res)=>{
    let result = await usermodel.find();
    res.send({success: true, result});
}
let getbyid= async(req, res)=>{
    let id = req.params.id;
    let result = await usermodel.find({_id : id });
    res.send({success: true, result});
}
let updatebyid = async(req, res)=>{
    let id = req.params.id;
    let result = await usermodel.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deletebyid = async(req, res)=>{
    let id = req.params.id;
    let result = await usermodel.deleteMany({_id : id});
    res.send({success: true, result});
}
export  {getalluser,getbyid,deletebyid,updatebyid,newdata}
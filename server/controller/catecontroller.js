import Cate from "../model/category.js"


let newdata = async(req, res)=>{
    let result = await Cate.create(req.body);
    res.send({success: true, result});
}
let getalldata = async(req, res)=>{
    let result = await Cate.find();
    res.send({success: true, result});
}
let getbyid= async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.find({_id : id });
    res.send({success: true, result});
}
let udatecategery = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let deletedata = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.deleteMany({_id : id});
    res.send({success: true, result});
}

export {newdata, udatecategery, deletedata, getalldata, getbyid};
import usermodel from "../model/usermodel.js";
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
let Auth = async(req, res)=>{
    // console.log(req.body);
    let {email, password} = req.body;
    
    let result = await usermodel.find({email : email});
    if(result.length > 0){
        
        if(result[0].password == sha1(password)){ 
           
            let userobj = { id : result[0]._id }
            let token = jwt.sign(userobj, "hello");
            res.send({success:true, name : result[0].name, token : token});
        }else{
                res.send({success:false, errType : 2});
            }
    }else{
        res.send({success:false, errType : 1})
    }

}

export default Auth


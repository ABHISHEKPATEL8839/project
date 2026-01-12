import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import API_URL from '../component/conn'
import axios from 'axios'
import * as YUP from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'

const Login = () => {

let [errMsg,setErrMsg]=useState("");




    
let LoginSchema = YUP.object({

   
    email : YUP.string().email("Incorrect Email Id").required("Insert Your Email Id"),
       password : YUP.string().required("Insert Password"),
   })
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("access_user")){
            navigate("/")
        }
    },[])


   

    


    let LoginFrm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formData)=>{
            console.log(formData)
            axios
            .post(`${API_URL}/auth`, formData)
            .then(response=>{
                // console.log(response.data.result);return;
                if(response.data.success==true){
                    // {success:true, name : "", token : ""}
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("access_user", response.data.token);
                    console.log(result.data)
                    toast("You are successful Logged In ....", {
                        onClose : ()=>navigate("/")
                    })
                    // navigate("/");
                }
                else{
                    if(response.data.errType==1){
                        // {success:false, errType=1}
                        setErrMsg("This Email Id and Password is Incorrect")
                    }if(response.data.errType==2){
                        // {success:false, errType=2}
                        setErrMsg("This Password is Incorrect")
                        
                        toast("You are successful Logged In ....", {
                        onClose : ()=>navigate("/")
                    })

                    }
                }
            })
        }
    })

  
  return (


<>

<section className="subscribe_section">
    <ToastContainer type="success" theme='dark'/>
               <div className="container-fuild">
                  <div className="box">
                     <div className="row">
                        <div className="col-md-6 offset-md-3">
                            

                           <div className="login_form" onSubmit={LoginFrm.handleSubmit}>
                              <div className="heading_container heading_center">
                                 <h3>LOGIN</h3>
                              </div>
                              <NavLink to="/signup" style={{ color: '#ad2710ff' }}>Allready have account </NavLink>
                              <form action="">
                                
                                            <div className='mt-4'>
                                               
                            <input type='text' name="email" onChange={LoginFrm.handleChange} className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} placeholder='Username/Email' />
                        
                                            </div>    
                                            <div className='mt-4'>
                                                <input type='password' name="password" onChange={LoginFrm.handleChange} className={'form-control ' + (LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                                           
                                            <br/>
                                            
                        </div>                      <p className='text-danger'>{errMsg}</p>
                                            <br/>
                                           
                              
                                  <button type='submit' className='btn btn-light'>LOGIN</button>
                                
                              </form>
                           </div>

                            
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            </>

  )
}

export default Login













// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import {useFormik} from 'formik'
// import LoginSchema from '../schema/LoginSchema'
// import {API_URL} from '../config/API'
// import axios from 'axios'

// import { ToastContainer, toast } from 'react-toastify'
// import { useEffect } from 'react'

// const Login = () => {
//     let navigate = useNavigate();
//     useEffect(()=>{
//         if(localStorage.getItem("access_user")){
//             navigate("/myprofile")
//         }
//     },[])


//     let [errMsg, setErrMsg] = useState("");

    


//     let LoginFrm = useFormik({
//         validationSchema : LoginSchema,
//         initialValues : {
//             email : "",
//             password : ""
//         },
//         onSubmit : (formData)=>{
//             // console.log(formData)
//             axios
//             .post(`${API_URL}/auth`, formData)
//             .then(response=>{
//                 // console.log(response.data);return;
//                 if(response.data.success==true){
//                     // {success:true, name : "", token : ""}
//                     localStorage.setItem("name", response.data.name);
//                     localStorage.setItem("access_user", response.data.token);
//                     toast("You are successful Logged In ....", {
//                         onClose : ()=>navigate("/")
//                     })
//                     // navigate("/");
//                 }
//                 else{
//                     if(response.data.errType==1){
//                         // {success:false, errType=1}
//                         setErrMsg("This Email Id and Password is Incorrect")
//                     }if(response.data.errType==2){
//                         // {success:false, errType=2}
//                         setErrMsg("This Password is Incorrect")

//                     }
//                 }
//             })
//         }
//     })

  












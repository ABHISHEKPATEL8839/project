import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../component/conn'
import { useFormik } from 'formik'
import * as YUP from 'yup'
let SignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().email("Incorrect Email Id").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password Should be same").required("Insert Re-Password"),
    contact : YUP.number().typeError("Only Number are accepted").min(1000000000, "Number Not Less Then 10").max(9999999999, "Number not more then 10").required("Insert Contact Number"),
    address : YUP.string().required("Insert Full Address"),
    gender : YUP.string().required("Select Your Gender"),
    city : YUP.string().required("Select Your City"),
})


const Signup = () => {
    let navigate = useNavigate();
  let [allCity, setAllCity] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/city`)
        .then(Response=>{
            // console.log(response.data);
            setAllCity(Response.data.result);
        })
    },[])
    let  SignupFrm = useFormik({
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            contact : "",
            city : "",
            address : "",
            gender : "",
            repassword : ""

        },
        onSubmit : (formData)=>{
            // console.log("***********", formData)
            // we have to post this "formData" by axios
            axios
            .post(`http://localhost:3000/api/v1/user`, formData)
            .then(response=>{
                console.log(response.data.result)
                navigate("/");
            })
        }
    })




  return (
    <>
      <section className="subscribe_section">
               <div className="container-fuild">
                  <div className="box">
                     <div className="row">
                        <div className="col-md-6 offset-md-3">
                            

                           <div className="login_form" onSubmit={SignupFrm.handleSubmit}>
                              <div className="heading_container heading_center">
                                 <h3>REGISTRATION</h3>
                              </div>
                              <NavLink to="/login" style={{ color: '#ad2710ff' }}>Allready have account </NavLink>
                              <form action="">
                                <div className='mt-4'>
                                                <input name='name' onChange={ SignupFrm.handleChange} type='text' className={'form-control ' + ( SignupFrm.errors.name &&  SignupFrm.touched.name ? 'is-invalid' : '')} placeholder='Full Name' />
                                                {
                                                     SignupFrm.errors.name &&  SignupFrm.touched.name
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.name}</small>
                                                    :
                                                    ''
                                                }
                                            </div> 
                                            <div className='mt-4'>
                                                <input name='email' onChange={ SignupFrm.handleChange} type='text' className={'form-control '+( SignupFrm.errors.email &&  SignupFrm.touched.email ? 'is-invalid' : '')} placeholder='Username/Email' />
                                                {
                                                     SignupFrm.errors.email &&  SignupFrm.touched.email
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.email}</small>
                                                    :
                                                    ''
                                                }
                                            </div>    
                                            <div className='mt-4'>
                                                <input name='password' onChange={ SignupFrm.handleChange} type='password' className={'form-control '+( SignupFrm.errors.password &&  SignupFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                                                {
                                                     SignupFrm.errors.password &&  SignupFrm.touched.password
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.password}</small>
                                                    :
                                                    ''
                                                }
                                            </div>    
                                            <div className='mt-4'>
                                                <input name='repassword' onChange={ SignupFrm.handleChange} type='password' className={'form-control '+( SignupFrm.errors.repassword &&  SignupFrm.touched.repassword ? 'is-invalid' : '')} placeholder='Re-Password' />
                                                {
                                                     SignupFrm.errors.repassword &&  SignupFrm.touched.repassword
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.repassword}</small>
                                                    :
                                                    ''
                                                }
                                            </div> 
                                            <div className='mt-4'>
                                                <input name='contact' onChange={ SignupFrm.handleChange} type='text' className={'form-control '+( SignupFrm.errors.contact &&  SignupFrm.touched.contact ? 'is-invalid' : '')} placeholder='Contact' />
                                                {
                                                     SignupFrm.errors.contact &&  SignupFrm.touched.contact
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.contact}</small>
                                                    :
                                                    ''
                                                }
                                            </div>  
                                            <div className='mt-4'>
                                               <select name='gender' onChange={ SignupFrm.handleChange} style={{width: "100%", border:'0', height:"30px"}} className={'form-control '+( SignupFrm.errors.gender &&  SignupFrm.touched.gender ? 'is-invalid' : '')} placeholder='select gender'>
                                                <option>
                                                    Male <input type='radio' value='male' onChange={ SignupFrm.handleChange}  name='gender'/> 
                                                    </option>
                                                <option>
                                                    
                                                    Female <input  type='radio' value='female' onChange={ SignupFrm.handleChange}  name='gender'/>
                                                    </option>
                                                    
                                                   
                                                </select><br/><br/>
                                            </div> 
                                             <div className='mt-4'>
                                                <textarea name='address' onChange={ SignupFrm.handleChange} className={'form-control '+( SignupFrm.errors.address &&  SignupFrm.touched.address ? 'is-invalid' : '')} placeholder='Address' ></textarea>
                                                {
                                                     SignupFrm.errors.address &&  SignupFrm.touched.address
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.address}</small>
                                                    :
                                                    ''
                                                }
                                            </div>    
                                            <div className='mt-4' >
                                                    <select name='city' onChange={SignupFrm.handleChange} className={'form-control '+(SignupFrm.errors.city && SignupFrm.touched.city ? 'is-invalid' : '')} >
                                <option>Select City</option>
                                {
                                    allCity.map (item=>{
                                        return(
                                            <option>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                                                {
                                                     SignupFrm.errors.city &&  SignupFrm.touched.city
                                                    ?
                                                    <small className='text-danger'>{ SignupFrm.errors.city}</small>
                                                    :
                                                    ''
                                                }
                                            </div> 
                                            <br/>
                                            
                                            <br/>
                                            
                              
                                  <button type='submit' className='btn btn-light'>Registration</button>
                                
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

export default Signup
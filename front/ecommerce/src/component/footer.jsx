import React from 'react'
import { NavLink } from 'react-router-dom'

const footer = () => {
  return (
    <>
    <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                   <div className="full">
                      <div className="logo_footer">
                        <NavLink to="#"><img width="210" src="images/logo.png" alt="#" /></NavLink>
                      </div>
                      <div className="information_f">
                        <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                        <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                        <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                      </div>
                   </div>
               </div>
               <div className="col-md-8">
                  <div className="row">
                  <div className="col-md-7">
                     <div className="row">
                        <div className="col-md-6">
                     <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                           <li><NavLink to="#">Home</NavLink></li>
                           <li><NavLink to="#">About</NavLink></li>
                           <li><NavLink to="#">Services</NavLink></li>
                           <li><NavLink to="#">Testimonial</NavLink></li>
                           <li><NavLink to="#">Blog</NavLink></li>
                           <li><NavLink to="#">Contact</NavLink></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                           <li><NavLink to="#">Account</NavLink></li>
                           <li><NavLink to="#">Checkout</NavLink></li>
                           <li><NavLink to="#">Login</NavLink></li>
                           <li><NavLink to="#">Register</NavLink></li>
                           <li><NavLink to="#">Shopping</NavLink></li>
                           <li><NavLink to="#">Widget</NavLink></li>
                        </ul>
                     </div>
                  </div>
                     </div>
                  </div>     
                  <div className="col-md-5">
                     <div className="widget_menu">
                        <h3>Newsletter</h3>
                        <div className="information_f">
                          <p>Subscribe by our newsletter and get update protidin.</p>
                        </div>
                        <div className="form_sub">
                           <form>
                              <fieldset>
                                 <div className="field">
                                    <input type="email" placeholder="Enter Your Mail" name="email" />
                                    <input type="submit" value="Subscribe" />
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </footer></>
  )
}

export default footer
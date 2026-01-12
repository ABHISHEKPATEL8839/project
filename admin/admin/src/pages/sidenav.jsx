import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="text-center sidebar-brand-wrapper d-flex align-items-center">
          <NavLink class="sidebar-brand brand-logo" to="index.html"><img src="assets/images/logo.svg" alt="logo" /></NavLink>
          <NavLink class="sidebar-brand brand-logo-mini pl-4 pt-3" to="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></NavLink>
        </div>
        <ul class="nav">
          <li class="nav-item nav-profile ">
            <NavLink to="#" class="nav-link">
              {/* <div class="nav-profile-image">
                <img src="assets/images/faces/face1.jpg" alt="profile" />
                <span class="login-status online"></span>
              </div> */}
              <div class="nav-profile-text d-flex flex-column pr-3">
                <span class="font-weight-medium mb-2"></span>
                <span class="font-weight-normal"></span>
              </div>
              <span class="badge badge-danger text-white ml-3 rounded "></span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/Dasbord">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </NavLink>
          </li>
           <li class="nav-item">
                  <NavLink class="nav-link" to="/Cate">cate</NavLink>
                </li>
          <li class="nav-item">
            <NavLink class="nav-link" data-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              <span class="menu-title">Basic UI Elements</span>
              <i class="menu-arrow"></i>
            </NavLink>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <NavLink class="nav-link" to="pages/ui-features/buttons.html">Buttons</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="pages/ui-features/dropdowns.html">Dropdowns</NavLink>
                </li>
               
              </ul>
            </div>
          </li>
          {/* <li class="nav-item">
            <NavLink class="nav-link" to="pages/icons/mdi.html">
              <i class="mdi mdi-contacts menu-icon"></i>
              <span class="menu-title">Icons</span>
            </NavLink>
          </li> */}
          {/* <li class="nav-item">
            <NavLink class="nav-link" to="pages/forms/basic_elements.html">
              <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              <span class="menu-title">Forms</span>
            </NavLink>
          </li> */}
          {/* <li class="nav-item">
            <NavLink class="nav-link" to="pages/charts/chartjs.html">
              <i class="mdi mdi-chart-bar menu-icon"></i>
              <span class="menu-title">Charts</span>
            </NavLink>
          </li> */}
          {/* <li class="nav-item">
            <NavLink class="nav-link" to="pages/tables/basic-table.html">
              <i class="mdi mdi-table-large menu-icon"></i>
              <span class="menu-title">Tables</span>
            </NavLink>
          </li> */}
          {/* <li class="nav-item">
            <span class="nav-link" to="#">
              <span class="menu-title">Docs</span>
            </span>
          </li> */}
          {/* <li class="nav-item">
            <NavLink class="nav-link" to="https://www.bootstrapdash.com/demo/breeze-free/documentation/documentation.html">
              <i class="mdi mdi-file-document-box menu-icon"></i>
              <span class="menu-title">Documentation</span>
            </NavLink>
          </li> */}
          <li class="nav-item sidebar-actions">
            <div class="nav-link">
              <div class="mt-4">
                {/* <div class="border-none">
                  <p class="text-black">Notification</p>
                </div> */}
                <ul class="mt-4 pl-0">
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
  )
}

export default Sidenav
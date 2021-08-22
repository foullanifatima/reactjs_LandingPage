import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css';



const Header=()=> {

        return ( 
  
          <>
          <nav class="navbar navbar-expand-lg navbar-fixed-top">
              <a class="navbar-brand" href="#">Logo</a>
              <button class="navbar-toggler glyphicon glyphicon-align-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                  <ul class="navbar-nav ">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Home </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
                  </li>
                 
                  </ul>
              </div>
  </nav>
          </>

    );
    
}
 
export default Header;
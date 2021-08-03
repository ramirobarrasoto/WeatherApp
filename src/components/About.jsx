import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./About.css"

export default function About() {
    return(       
        <div className="card_container">
        <div className="cardAbout"> 
      
       <div className="card-body"> 
           <p className="card-title">This app was built by Ramiro Barra Soto.</p>
        <p>See the repo <a href="https://github.com/ramirobarrasoto/WeatherApp" target = '_blank' rel='noopener noreferrer' >here</a> </p>
        <p>Follow me on social media!</p>
        <br />
        <a href="https://github.com/ramirobarrasoto" target = '_blank' rel='noopener noreferrer'className="link">
        <p>Github profile</p>
              <i class="fab fa-github-square"></i>
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/ramiro-barra-soto/" target = '_blank' rel='noopener noreferrer' className="link">
        <p>LinkedIn profile     </p>
       
        <i class="fab fa-linkedin"></i>
        </a>
        <br />
        <br />

        <h8>Special thanks to <a href="https://www.linkedin.com/in/lucila-rossi/" className="link">Lucila Rossi</a> for the background picture</h8>
       </div>
        </div> 
        </div>
    );

};
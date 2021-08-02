import React from 'react';
import "./About.css"

export default function About() {
    return(       
        <div className="card_container">
        <div className="card"> 
      
       <div className="card-body"> 
           <p className="card-title">This app was built by Ramiro Barra Soto.</p>
        <p>See the repo <a href="https://github.com/ramirobarrasoto/WeatherApp">here</a> </p>
        <p>Follow me on social media!</p>
        <br />
        <a href="https://github.com/ramirobarrasoto" className="link">
        <span>Github profile     </span>
        <img
              className='iconoClima'
              src="https://i.ibb.co/8MD0cY8/Ghub.png"
              width='80'
              height='80'
              alt=''
        />
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/ramiro-barra-soto/" className="link">
        <span>LinkedIn profile     </span>
        <img
              className='iconoClima'
              src="https://i.ibb.co/G2x5QRC/Lin.png"
              width='80'
              height='80'
              alt=''
        />
        </a>
        <br />
        <br />

        {/* <p>You can check my resume <a href="https://drive.google.com/file/d/1c7QAi3kJC0gj0Lv40xOvbYmeJ30p8co3/view?usp=sharing">here</a> </p> */}
       </div>
        </div> 
        </div>
    );

};
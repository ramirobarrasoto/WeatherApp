import React from "react";

export default function About() {

const github = "https://github.com/ramirobarrasoto"
const linkedIn="https://www.linkedin.com/in/ramiro-barra-soto"
  return (
    <div className="about">
    
      <h2>
        {" "}
        Esta página fue parte de una homework creada por Ramiro Barra Soto{" "}
      </h2>
      <h3>
        {" "}
        Puedes ver más información sobre mis proyectos en github 
        
        <a className="link"href={github}> ramirobarrasoto
        </a>
      </h3>
      <h3>
        {" "}
        y tambien contactarme a mi LinkedIn <a className="link" href={linkedIn}>ramiro-barra-soto
        </a>
      </h3>
    </div>
  );
}

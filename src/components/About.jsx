import React from "react";

export default function About() {

const link = "https://github.com/ramirobarrasoto"
  return (
    <div>
      <p>
        {" "}
        Esta página fue parte de una homework creada por Ramiro Barra Soto{" "}
      </p>
      <p>
        {" "}
        Puedes ver más información sobre mis proyectos en github <a href={link}>ramirobarrasoto
        </a>
      </p>
    </div>
  );
}

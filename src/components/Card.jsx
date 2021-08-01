import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className='card'>
      <div id='closeIcon' className='row'>
        <button onClick={onClose} className='btn btn-sm btn-danger'>
          X
        </button>
      </div>
      <div className='card-body'>
        <Link to={`/ciudad/${id}`} className='card-title' >
          {name}
        </Link>
        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <p>
              <b>Max</b>
            </p>
            <p>
              <b>{max}°</b>
            </p>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <p>
              <b>Min</b>
            </p>
            <p>
            <b>{min}°</b>
              </p>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <img
              className='iconoClima'
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width='80'
              height='80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

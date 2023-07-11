import React from "react";
import style from "./weatherMain.module.css";
function WeatherMain({ weather }) {
  return (
    <>
      <div className={style.nombres}>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
      </div>

      <div className={style.imgText}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128px"
            alt={`${weather?.current.condition.text}`}
          />
        </div>
        <div className={style.text}>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°</div>
        </div>
      </div>

      <div>
        <iframe className={style.iframe}
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default WeatherMain;

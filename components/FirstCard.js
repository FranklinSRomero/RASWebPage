import RangeInput from "./RangeInput";
import { useState } from "react";

 
export default function FirstCard() {

  const [time, setTime] = useState({
    days: 70,
    hours: 36,
    minutes: 23,
    seconds: 56

  })

  return (
    <section className="first-card container-first-card">
      <div className="first-card-cronometer first-card-item" >
        <h2>
          time remainig for <span className="first-card-cronometer-title">runibot</span>
        </h2>
        <div className="counter">
          <p>
            <span className="days"> {time.days} </span>  <b>:</b>  <span className="hours">{time.hours}</span> <b>:</b> <span className="minutes">{time.minutes}</span>  <b>:</b> <span className="seconds">{time.seconds}</span>  
          </p>
        </div>
        <div className="first-card-raiting">
            <span className="first-card-raiting-title">Audience Award for Best Proyect</span>
            <RangeInput/>
           <span className="first-card-raiting-text">Rate the best proyect</span>
        </div>
      </div>
      <div className="first-card-item first-card-rate-bars">
      
          <span className="first-card-rate-bar" style={{height: " 100%"}} data-height={"100%"}  data-proyect={"Seguidor"}></span>
          <span className="first-card-rate-bar" style={{height: " 50%"}} data-height={"50%"} data-proyect={"Minisumo"}></span>
          <span className="first-card-rate-bar" style={{height: " 70%"}} data-height={"70%"} data-proyect={"UAV"}></span>
          <span className="first-card-rate-bar" style={{height: " 85%"}} data-height={"85%"} data-proyect={"Sumo"}></span>
      </div>
      <div className="first-card-call-to-action first-card-item">
      <h2>
          SEND VOTE
          <b> RATE US 💛</b>
        </h2>
        <button className="btn-principal">Send Rate</button>
      </div>
    </section>
  );
}

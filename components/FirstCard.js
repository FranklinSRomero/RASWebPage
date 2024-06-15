import RangeInput from "./RangeInput";
import CountdownTimer from "./CountdownTimer";

 
export default function FirstCard() {

  return (
    <section className="first-card container-first-card">
      <div className="first-card-cronometer first-card-item" >
        <h2>
          time remainig for <span className="first-card-cronometer-title">New Year</span>
        </h2>
        <div className="counter">
          <CountdownTimer targetDate="2024-2-3" />
        </div>
        <div className="first-card-raiting">
            <span className="first-card-raiting-title">Audience Award for own Chapter</span>
            <RangeInput/>
           <span className="first-card-raiting-text">Rate the Chapter</span>
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

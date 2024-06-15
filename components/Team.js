import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useEffect } from "react";

export default function Team() {
  useEffect(() => {
    const slider = document.querySelector(".team-container-slider"),
      cards = document.querySelectorAll(".team-container-card"),
      prev = document.getElementById("slider-button-left"),
      next = document.getElementById("slider-button-right");

    next.addEventListener("click", () => slider.scrollLeft += slider.offsetWidth);
    prev.addEventListener("click", () => slider.scrollLeft -= slider.offsetWidth);

  }, []);

  return (
    <section className="team-container team" id="ourteam">
      <h2>
        KNOW
        <b> OUR TEAM</b>
      </h2>

      <BsFillArrowLeftCircleFill
        className="team-container-slider-back team-container-slider-arrow "
        id="slider-button-left"
      />

      {/* Contenedor carrusel */}
      <div className="team-container-slider" id="team-container-slider">
        {/* Carrusel */}
        <div
          className="team-container-slider-motion"
          id="team-container-slider-motion"
        >
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./yesid.jpg" alt="" />
            </div>
            <h5>Yesid Almanza</h5>
            <h6>Presidente</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./juan.jpg" alt="" />
            </div>
            <h5>Juan Alfonso</h5>
            <h6>Visepresidente</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./cristihan.jpg" alt="" />
            </div>
            <h5>Cristihan Meza</h5>
            <h6>Líder Seguidor</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./brayan.jpg" alt="" />
            </div>
            <h5>Brayan Joya</h5>
            <h6>Líder Minisumo</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./sebastian.jpeg" alt="" />
            </div>
            <h5>Sebastián Ortega</h5>
            <h6>Líder Micromouse</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./sergio.jpg" alt="" />
            </div>
            <h5>Sergio Mora</h5>
            <h6>Miembro Minisumo</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./esteban.jpg" alt="" />
            </div>
            <h5>Esteban Cortez</h5>
            <h6>Miembro Minisumo</h6>
          </div>
          <div className="team-container-card">
            <div className="team-container-card-img">
              <img src="./geronimo.jpg" alt="" />
            </div>
            <h5>Gerónimo Marín</h5>
            <h6>Miembro Minisumo</h6>
          </div> 
        </div>
      </div>

      <BsFillArrowRightCircleFill
        className="team-container-slider-next team-container-slider-arrow"
        id="slider-button-right"
  
      />
    </section>
  );
}

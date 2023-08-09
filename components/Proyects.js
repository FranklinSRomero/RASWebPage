import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Proyects() {
  return (
    <section className="proyects proyects-container" id="proyects">
      <h2>
        KNOW
        <b> OUR PROYECTS</b>
      </h2>
      {/* 
      <BsFillArrowLeftCircleFill
        className="proyects-container-slider-back proyects-container-slider-arrow "
        id="slider-button-left"
      /> */} 

      <div className="proyects-container-slider" id="proyects-container-slider">
        <div className="proyects-items-container">
          <div className="proyect-item">
            <img src="./chasis.png" alt="" />
            <div className="proyect-item-body">
            <h4>Minisumo Omicron</h4>
            <p>
              We bring robotics and automation to life with our passion for
              cutting-edge technology and creative innovation.
            </p>
            <button className="btn-principal">Ver proyecto</button>
            </div>
          </div>
          <div className="proyect-item">
            <img src="./seguidor.png" alt="" />
        
              <div className="proyect-item-body">
                <h4>Seguidor de línea</h4>
                <p>
                  With a focus on advanced programming, we lead the way towards
                  a smarter and more efficient future, and creative innovation.
                </p>

                <button className="btn-principal">Ver proyecto</button>
              </div>

          </div>
          <div className="proyect-item">
            <img src="./placa.png" alt="" />
            <div className="proyect-item-body">
              <h4>Zeta Board</h4>
              <p>
                Through our passion for precision technology, we lead the future
                of electronics with innovative and creative PCB designs.
              </p>
              <button className="btn-principal">Ver proyecto</button>
            </div>
          </div>
        </div>
      </div>

      {/* <BsFillArrowRightCircleFill
        className="proyects-container-slider-next proyects-container-slider-arrow"
        id="slider-button-right"
      /> */}
    </section>
  );
}

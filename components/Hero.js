import Typed from "react-typed";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-image container-hero-image">
      <img src="./hero_back.svg" alt="" className="blur-1 " />
      <div className="presentation-container">
        <div className="presentation-content">
          <h1>
            Bienvenido a RAS Uniandes una iniciativa de {" "} <br />
            <Typed
              strings={["Robótica", "Programación", "Diseño de PCBs"]}
              typeSpeed={75}
              backSpeed= {75}
              startDelay={50}
              loop
              style={{color: "var(--logo-star)"}}
            />
          </h1>

          <p className="main-description">
          
Experimenta el futuro de la tecnología y la robótica con nuestros proyectos innovadores.
          </p>
          <Link href="#proyects" scroll={false}><button className="btn-principal">Ver proyectos</button></Link>
          
        </div>
      </div>
    </section>
  );
}

import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <section className="about container-about" id="about">
      <img src="./logoras.png" alt="" className="about-img" />
      <div className="about-info">
        <h2>
          About Us
          <b>Who we are</b>
        </h2>
        <p>
          La iniciativa estudiantil Robotics and Automation Society (RAS)
          uniandes, es un capítulo IEEE de la universidad de Los Andes, que
          tiene como propósito el desarrolló de prototipos funcionales en el
          área de robótica implementado conceptos de automatización y control.
          Con el fin de aplicar conocimientos afines al área de ingeniería para
          el desarrollo de habilidades útiles en la industria. De igual forma,
          participamos y hacemos parte de una serie de competencias de robótica
          a nivel nacional como lo son: Runibot, Unrobot, JaBots, entre otras.
          Estas competencias promueven la competición y el trabajo en equipo; y
          generan habilidades esenciales para la formación de futuros
          profesionales.
        </p>
        <div className="about-social-network">
            <Link href="https://www.instagram.com/ras_uniandes/" target="_blank" ><FaInstagram className="about-social-network-item" /></Link>
            <Link href="https://github.com/RASuniandes/" target="_blank" ><FaGithub className="about-social-network-item" /></Link>
            <Link href="https://www.linkedin.com/company/rasuniandes" target="_blank" ><FaLinkedinIn className="about-social-network-item" /></Link>
            <Link href="https://www.youtube.com/@RasUniandes" target="_blank" ><FaYoutube className="about-social-network-item" /></Link>
        </div>
      </div>
    </section>
  );
}

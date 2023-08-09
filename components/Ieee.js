import Link from "next/link"

export default function Ieee() {
  return (
    <section className="ieee-info-container">
        <p className="explore-more">Explore + More</p> 
        <h2>Robotic Automation Society</h2>
        <p>Actualmente RAS uniandes se encuentra desarrollando 4 proyectos ligados a la creación e innovación electrónica, con los cuales se pretende llevarlos a una etapa de finalización prontamente. Los dos primeros son el MiniSumo y el Seguidor de Linea, los cuales son dispositivos diseñados para la robótica de competencias y con los cuales se pretenden ganar distintas competencias a nivel regional como lo son RuniBot y el Unrobot. Así mismo, actualmente nos encontramos trabajando en un proyecto de enjambres de Drones y en el desarrollo de un vehículo aéreo no tripulado (UAV).2. Hacemos parte de la rama estudiantil IEEE Uniandes.</p>
        {/* <p>RAS uniandes is currently developing 4 projects linked to electronic creation and innovation, with which it is intended to bring them to a completion stage soon. The first two are the MiniSumo and the Line Follower, which are designed for competition robotics and with which they are intended to win different competitions at the regional level such as RuniBot and Unrobot. Likewise, we are currently working on a drone swarm project and on the development of an unmanned aerial vehicle (UAV).2. We are part of the IEEE Uniandes student branch.</p> */}

        <Link href="http://ieeepre.uniandes.edu.co" target="_blank"><button> 
        Rama ieee Uniandes <img src="./arrow.svg" />
        </button></Link>
        
      
    </section>
  )
}

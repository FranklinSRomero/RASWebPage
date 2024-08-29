import Link from "next/link";

export default function Foot() {
  return (
    <footer className="footer-container"> 
      <div className="footer-items-container">
        <div className="footer-items-section">
          <h5>USEFULS LINKS</h5>
          <div className="footer-item"><Link href="./" scroll={false}>Home</Link></div>
          <div className="footer-item"><Link href="./#about" scroll={false}>About</Link></div>
          <div className="footer-item"><Link href="./#events" scroll={false}>Events</Link></div>
          <div className="footer-item"><Link href="./#Team" scroll={false}>Team</Link></div>
          <div className="footer-item"><Link href="./authuser">Login</Link></div>
        </div>
        <div className="footer-items-section">
          <h5>PROYECTS</h5>
          <div className="footer-item"><Link href="/proyects/minisumo">Minisumo</Link></div>
          <div className="footer-item"><Link href="/proyects/seguidor">Seguidor</Link></div>
          <div className="footer-item"><Link href="/proyects/uav">UAV</Link></div>
        </div>
        <div className="footer-items-section">
          <h5>CONTACT</h5>
          <div className="footer-item"><Link href="mailto:ras@uniandes.edu.co">Email</Link></div>
          <div className="footer-item"><Link href="#">LinkedIn</Link></div>
          <div className="footer-item"><Link href="https://www.instagram.com/ras_uniandes/" target="_blank">Instagram</Link></div>
          
        </div>
        <div className="footer-items-section">
          <h5>SUBCRIBE</h5>
          <p className="footer-item subscribe-text">
            Get the latest new and updates
          </p>
          <form action="#" className="form-subscribe">
            <div className="input-subscribe">
            <input type="email" placeholder="Your email address" />
            <img src="./paper-plane.svg" alt="" />
            </div>
          
          </form>
          
        </div>
        
      </div>
      <p className="copyright"> © 2022 Copyright by RAS uniandes - All Rights Reserved </p>
      <div className="makers made-by">
        <p>Made by Cristihan Meza and Brayan Joya</p> 
      </div>
      
    </footer>
  );
}

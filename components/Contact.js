import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { BsTelephoneFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiOfficeChairFill } from "react-icons/pi";
import {useState} from "react"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import Link from "next/link";


export default function Contact() {

  const [showModal, setShowModal] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

    // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  }

  const [showSending, setShowSending] = useState(false);

    // Función para cerrar el modal
  const closeSending = () => {
    setShowSending(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setDisableButton(true);
    setShowSending(true)
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };
  
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) { 
        setShowSending(false);
        setShowModal(true);
        // Restablecer formulario, manejar lógica adicional si es necesario
      } else {
        // Manejar errores
        setShowSending(false);
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }

   
    setDisableButton(false);
    
  };

  return (
    <section className="contact contact-container">
      <div className="contact-box">
        <div className="contact-side-icons">
          <div>
            <img src="./white-icon.svg" alt="" /> 
          </div>
          <div>
            <a href="#" className="come-up"><img src="./arrow-up.svg" alt="" /></a>
            
          </div>
        </div>
        <div className={`modal ${showModal ? 'show' : ''} sending`}>
          <div className="modal-container sended">
            Mensaje enviado con éxito!
            <div className="close-menu">
              <img src="./x-svgrepo-com.svg" alt="" onClick={closeModal} />
            </div>
          </div>
        </div>
        <div className={`modal ${showSending ? 'show' : ''} sended`}>
          <div className="modal-container">
            Enviando Mensaje...
            <div className="close-menu">
              <img src="./x-svgrepo-com.svg" alt="" onClick={closeSending} />
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form  onSubmit={handleSubmit} className="contact-form" id="contact">
            <h2> Contact Us</h2>
            <p>
              Feel Free to contact us any time. We will get bact to you as soon
              as we can!
            </p>
            <input type="text" placeholder="Name " id="Name" name="name" required/>
            <input type="email" placeholder="Email" id="Email" name="email" required/>
            <textarea name="message" id="Message" cols="10" rows="1" placeholder="Message" required>
              
            </textarea>
            <button id="contact_button" disabled={disableButton} className={disableButton?"disabled":"enabled"}>SEND</button>
          </form>
        </div>
        <input type="checkbox" name="activateInfo" id="activate-info"  />
        <label htmlFor="activate-info" className="show-info"><BsFillArrowLeftCircleFill/></label>
        <div className="contact-info-container">
          <h3>Info</h3>
          <div className="square"></div>
          <div className="contact-info-item">
            <HiOutlineMail className="icon-info-item" /> ras@uniandes.edu.co
          </div>
          <div className="contact-info-item">
            <BsTelephoneFill className="icon-info-item" /> 
            +57 3208145302
          </div>
          <div className="contact-info-item">
            <MdLocationOn className="icon-info-item" />
            Cra 1 E #19a-70, Bogotá
          </div>
          <div className="contact-info-item">
            <PiOfficeChairFill className="icon-info-item"/> Mario Laserna, ML-016 
          </div>
        </div>
        <div className="contact-side-info">
          <div className="contact-side-info-networks">   
            
            <Link href="https://www.instagram.com/ras_uniandes/" target="_blank" ><FaInstagram /></Link>
            <Link href="https://github.com/RASuniandes/" target="_blank" ><FaGithub /></Link>
            <Link href="https://www.linkedin.com/company/rasuniandes" target="_blank" ><FaLinkedinIn /></Link>
            <Link href="https://www.youtube.com/@RasUniandes" target="_blank" ><FaYoutube /></Link>
  
        </div>
        </div>
      </div>
    </section>
  );
}

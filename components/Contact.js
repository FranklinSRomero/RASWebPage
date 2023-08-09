import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import Link from "next/link";

export default function Contact() {
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
        <div className="contact-form-container">
          <form action="#" className="contact-form"  id="contact">
            <h2> Contact Us</h2>
            <p>
              Feel Free to contact us any time. We will get bact to you as soon
              as we can!
            </p>
            <input type="text" placeholder="Name " />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="10" rows="1" placeholder="Message">
              
            </textarea>
            <button>SEND</button>
          </form>
        </div>
        <input type="checkbox" name="activateInfo" id="activate-info"  />
        <label htmlFor="activate-info" className="show-info"><BsFillArrowLeftCircleFill/></label>
        <div className="contact-info-container">
          <h3>Info</h3>
          <div className="square"></div>
          <div className="contact-info-item">
            <HiOutlineMail className="icon-info-item" /> rasuniandes@gmail.com
          </div>
          <div className="contact-info-item">
            <BsTelephoneFill className="icon-info-item" /> 
            +57321894567
          </div>
          <div className="contact-info-item">
            <MdLocationOn className="icon-info-item" />
            calle 19 #jdjndnd
          </div>
          <div className="contact-info-item">
            <TbWorld className="icon-info-item" /> rasuniandes.com
          </div>
        </div>
        <div className="contact-side-info">
          <div className="contact-side-info-networks">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </section>
  );
}

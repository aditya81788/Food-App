import React from 'react'
import './Footer.css';
import InstagramIcon from "../Assets/insta_icon.png";
import WhatsAppicon from "../Assets/whatsapp_icon.png";
import Pinteresticon from "../Assets/pinterest_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className='socialMedia'>
<img src={InstagramIcon} alt="" className='wp'/>
<img src={WhatsAppicon} alt="" className='wp'/>
<img src={Pinteresticon} alt="" className='wp' />
      </div>
      <p> &copy; 2024 adityapizzeria.com</p>
    </div>
  )
}

export default Footer


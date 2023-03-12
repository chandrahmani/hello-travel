import { Envelope, InstagramLogo, LinkedinLogo, MapPin, Phone, WhatsappLogo } from 'phosphor-react';
import React from 'react';
import { Button, Input, Textarea } from 'react-carbonui';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Inforamation</h1>
          <p>pellentesque tempus. Suspendisse auctor ex id tristique pharetra.</p>

          <div className="number">
            <p>
              {' '}
              <Phone size={25} /> +917006036459/+919906755156
            </p>
          </div>

          <div className="adress">
            <p>
              <Envelope size={32} /> Hellotravelsindia@gmail.com
            </p>
          </div>

          <div>
            <p>
              <MapPin size={32} /> Head Office: Nowgam near railway station Srinagar Jammu &
              Kashmir190015 Sales Office: 1st Floor, Namgyal Complex, Behind Post Office, main
              Market, Leh – Ladakh 194101, UT ladakh (INDIA)
            </p>
          </div>
          <div className="icon-logo">
            <a href="#">
              <InstagramLogo size={32} />
            </a>
            <a href="#">
              <WhatsappLogo size={32} />
            </a>
            <a href="#">
              <LinkedinLogo size={32} />
            </a>
          </div>
        </div>

        <div className="form-wrap">
          <form className="form">
            <Input type="text" placeholder="name" scale="large" className="input" />
            <Input type="mail" placeholder="Gmail" scale="large" className="input" />
            <Input type="number" placeholder="number" scale="large" className="input" />
            <Textarea placeholder="Enter your message" scale="large" className="text-area" />
            <Button size="large" variant="primary" className="button">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

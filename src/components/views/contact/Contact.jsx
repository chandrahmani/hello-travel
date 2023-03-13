import { Envelope, InstagramLogo, LinkedinLogo, MapPin, Phone, WhatsappLogo } from 'phosphor-react';
import React from 'react';
import { Button, Input, Textarea } from 'react-carbonui';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="info-container">
          <div className="contact-info">
            <h1>Contact Information</h1>
            <p>pellentesque tempus. Suspendisse auctor ex id tristique pharetra.</p>
            <div className="number">
              <h3>
                <Phone size={25} /> +91 7006036459 / +91 9906755156
              </h3>
            </div>

            <div className="email-wrap">
              <h3>
                <Envelope size={32} />
                Hellotravelsindia@gmail.com
              </h3>
            </div>

            <div>
              <h3>
                <MapPin size={32} /> Head Office: Nowgam near railway station Srinagar Jammu &
                Kashmir 190015
              </h3>
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
              <Input type="text" placeholder="Name" fullWidth className="input" />
              <Input
                type="email"
                placeholder="example@email.com"
                fullWidth
                scale="large"
                className="input"
              />
              <Input
                type="number"
                placeholder="+91 0000000"
                fullWidth
                scale="large"
                className="input"
              />

              <div className="btn-wrap">
                <Button variant="primary" className="button" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

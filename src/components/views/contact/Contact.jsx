import {
  AddressBook,
  Envelope,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  WhatsappLogo
} from 'phosphor-react';
import React from 'react';
import { Button, Input, Textarea } from 'react-carbonui';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Contact US</h1>
      <p className="contact-txt-wrap">
        Praesent vestibulum tincidunt magna ut ultrices. Nullam id ultricies metus, quis sodales
        turpis. Integer tristique erat ut turpis tristique, vitae accumsan justo maximus.
        Suspendisse sit amet elementum felis. Aenean ut accumsan mi. Proin pretium laoreet magna in
        interdum. Donec quam diam, finibus a sapien pharetra, lobortis eleifend nunc. Mauris non
      </p>
      <div className="contact-container">
        <div className="info-container">
          <div className="contact-info">
            <h1>Contact Information</h1>
            <p>pellentesque tempus. Suspendisse auctor ex id tristique pharetra.</p>

            <div className="email-wrap">
              <div className="mob-number">
                <h3>
                  <Phone size={20} /> +91 7006036459 / +91 9906755156
                </h3>
              </div>
              <div>
                <h3>
                  <Envelope size={20} />
                  hellotravelsindia@gmail.com
                </h3>
              </div>

              <div>
                <h3>
                  <MapPin size={20} /> Head Office: Nowgam near railway station Srinagar Jammu &
                  Kashmir 190015
                </h3>
              </div>

              <div>
                <h3>
                  <AddressBook size={20} />
                  1st Floor, Namgyal Complex, Behind Post Office, main Market, Ladakh 194101, ladakh
                  (IND)
                </h3>
              </div>
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
                placeholder="Phone number"
                fullWidth
                scale="large"
                className="input"
              />

              <Textarea fullWidth className="text-area" placeholder="Write your message" />

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

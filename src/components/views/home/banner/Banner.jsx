import { Container } from '../../../core/styled';
import { Phone } from 'phosphor-react';
import './Banner.css';
import QueryForm from '../../../core/queryForm/QueryForm';

const Banner = () => {
  return (
    <>
      <main className="header-wrapper">
        <div className="header-info">
          <Container>
            <div className="flex">
              <div className="title-heading">
                <h1 className="txt">  
                  Nulla a massa ante. Fusce non diam magna <span className="txt-primary"> Curabitur pretium</span>{' '}
                  eu fermentum ullamcorper. Maur
                </h1>
                <div className="phone-number">
                  <a href="#">
                    <Phone size="32" /> : +917006036459
                  </a>
                </div>

                <div className="phone-number">
                  <a href="#">
                    <Phone size="32" /> : +917006036459
                  </a>
                </div>
              </div>

              <QueryForm />
            </div>
          </Container>
        </div>

        <div className="info-wrapper">
          <Container>
            <div className="info-container">
              <div className="txt-style">Best Price Guaranteed</div>

              <div className="txt-style">24/7 Customer Support</div>
              <div className="txt-style">100% Secure & Covid 19 safety</div>

              <div className="txt-style">4.9 Star Google review</div>

              <div className="txt-style">10+ Years of Travel Experience</div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Banner;

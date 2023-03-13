import { Container, Flex } from '../../../core/styled';
import { Phone } from 'phosphor-react';
import './Banner.css';

import QueryForm from '../../../core/queryForm/QueryForm';

const Banner = () => {
  return (
    <>
      <main className="header-wrapper">
        <div className="header-info">
          <Container>
            <Flex display="flex">
              <div className="title-heading">
                <h1 className="txt">
                  Nulla a massa ante. Fusce non diam magna{' '}
                  <span className="txt-primary"> Curabitur pretium</span> eu fermentum ullamcorper.
                  Maur
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
            </Flex>
          </Container>
        </div>

        <div className="info-wrapper">
          <Container>
            <Flex display="flex" justifyContent="center">
              <div className="txt-style">Best Price Guaranteed</div>
              <div className="txt-style">24/7 Customer Support</div>
              <div className="txt-style">100% Secure & Covid 19 safety</div>
              <div className="txt-style">4.9 Star Google review</div>
              <div className="txt-style">10+ Years of Travel Experience</div>
            </Flex>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Banner;

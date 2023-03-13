import { Container } from '../styled';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <Container>
            <div className="link-wrapper">
              <div className="number-wrap">
                <div className="policy">
                  <ul>
                    <li>
                      <a href="#">Terms</a> and <a href="#">conditions</a>
                    </li>
                    <li>
                      <a href="#"> Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <span className="number">
                  <a href="#">Mob: +91 7006036459</a>/<a href="#">+91 9906755156</a>
                </span>
              </div>
            </div>
            <div className="link-container">
              <div className="web-link">
                © 2023 Copyright: <a href="https://www.webtechpie.com/">webtechpie.com</a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};
export default Footer;

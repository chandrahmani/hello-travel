import { Link } from 'react-router-dom';
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
                      <a href="#">
                        <Link to="/termcondition">Terms & conditions</Link>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Link to="/privacypolicy">Privacy policy</Link>
                      </a>
                    </li>
                  </ul>
                </div>

                <span className="mob-number">
                  Mob:<a href="#"> +91 7006036459</a>/<a href="#">+91 9906755156</a>
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

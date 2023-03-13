import { Container } from '../styled';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <Container>
            <div className="link-wrapper">
              <div className="">
                <ul>
                  <li>Terms and conditions</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div className="number-wrap">
                <a href="#" className="number">
                  Mob: +917006036459 / +91990675515
                </a>
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

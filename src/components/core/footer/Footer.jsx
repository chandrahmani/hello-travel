import { Container } from '../../header/Styled';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <Container>
            <h1 className="footer-package">
              ustomize Your Holiday Package With Our Travel Experts
            </h1>
            <div className="link-wrapper">
              <div className="number-wrap">
                <a href="#" className="number">
                  Mob: +917006036459 / +91990675515
                </a>
              </div>
              <div className="link-container">
                <div className="web-link">
                  © 2023 Copyright: <a href="https://www.webtechpie.com/">webtechpie.com</a>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};
export default Footer;

import { Container } from "../style/Styled"

const Footer = () => {
    return (
        <>
            <div>
                <footer>
                    <Container>
                        <h1 className='footer-package'>ustomize Your Holiday Package With Our Travel Experts</h1>
                        <div className='link-wrapper'>
                            <div className='link-container'>
                                <div className='web-link'>
                                    <a href='https://www.webtechpie.com/'>webtechpie.com</a>
                                </div>
                            </div>
                            <div className='number-wrap'>
                                <a href='#' className='number'>
                                    Mob: +917006036459 / +91990675515
                                </a>
                            </div>
                        </div>
                    </Container>
                </footer>
            </div>
        </>
    )
}

export default Footer;
import { Container } from "../../../header/Styled";
import { useForm } from "react-hook-form";
import { Phone } from "phosphor-react";
import './Banner.css'
import Formquery from "../../../core/form-query/Formquery";

const Banner = () => {


    return (
        <>
            <main className="header-wrapper">
                <div className="header-info">
                    <Container>
                        <div className="flex">
                            <div className="title-heading">
                                <h1 className="txt">Best Travel Agents In Kashmir <span className="txt-primary"> UP TO 70% OFF </span> New Year & Christmas Sale 2023 Offers</h1>
                                <div className="phone-number">
                                    <a href="#">
                                        <Phone size="32" />    : +917006036459
                                    </a>
                                </div>

                                <div className="phone-number">
                                    <a href="#">
                                        <Phone size="32" />    : +917006036459
                                    </a>
                                </div>
                            </div>

                            <Formquery />
                        </div>
                    </Container>
                </div>

                <div className="info-wrapper">
                    <Container>
                        <div className="info-container">
                            <div className="txt-style">
                                Best Price Guaranteed
                            </div>

                            <div className="txt-style">
                                24/7 Customer Support
                            </div>
                            <div className="txt-style">
                                100% Secure & Covid 19 safety
                            </div>

                            <div className="txt-style">
                                4.9 Star
                                Google review
                            </div>

                            <div className="txt-style">
                                10+ Years of
                                Travel Experience
                            </div>
                        </div>
                    </Container>

                </div>
            </main>
        </>
    )
}

export default Banner;
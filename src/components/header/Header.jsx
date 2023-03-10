import { Phone } from "phosphor-react";
import { useForm } from "react-hook-form"
import TravelDtl from "../travelDtl/TravelDtl";
import "./Header.css"
import { Container } from "./Styled";
const Header = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <main className="header-wrapper">
                <div className="header-info">
                    <div className="header-flex">
                        <Container>
                            <div className="flex">
                                <div className="title-heading">
                                    <h1 className="txt">Best Travel Agents In Kashmir <span className="txt-primary"> UP TO 70% OFF </span> New Year & Christmas Sale 2023 Offers</h1>
                                    <p className="deals">Book customized Kashmir vacation packages with exciting deals & offers.</p>

                                    <div className="phn-num">
                                        <a href="#">
                                            <Phone size="32" />    : +917006036459
                                        </a>
                                    </div>

                                    <div className="phn-num">
                                        <a href="#">
                                            <Phone size="32" />    : +917006036459
                                        </a>
                                    </div>
                                </div>


                                <div className="form-wrapper">
                                    <form onSubmit={handleSubmit(onSubmit)} className="form-conatiner">

                                        <div className="img-align">
                                            <img src="https://kashmirtravelagent.com/images/kta-logo.png" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="enter name"
                                            {...register('name', { required: true })}
                                        />

                                        <input
                                            type="email"
                                            placeholder="enter your email"
                                            {...register('email', { required: true })}
                                        />

                                        {errors.email && errors.email.type === "required" && <span className="msg">
                                            This is required
                                        </span>}

                                        <input
                                            type="number"
                                            placeholder="enter your number"
                                            {...register('number', { required: true })}
                                        />

                                        <button type="submit" className="btn">Submit</button>
                                    </form>
                                    <div>

                                    </div>
                                </div>

                            </div>
                        </Container>
                    </div>

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

                <TravelDtl />
            </main>
        </>
    )
}
export default Header
import { useForm } from "react-hook-form"
import "./Header.css"
const Header = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {

    }


    return (
        <>
            <div className="conatiner">
                <div className="title-heading">
                    <h1 className="txt">Best Travel Agents In Kashmir <span className="txt-primary"> UP TO 70% OFF </span> New Year & Christmas Sale 2023 Offers</h1>
                    <p>Book customized Kashmir vacation packages with exciting deals & offers.</p>
                </div>

                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-conatiner">

                        <div>
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

                        {errors.email && errors.email.type === "required" && <span>
                            This1
                        </span>}

                        <input
                            type="number"
                            placeholder="enter your number"
                            {...register('number', { required: true })}
                        />

                        <input type="submit" />
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
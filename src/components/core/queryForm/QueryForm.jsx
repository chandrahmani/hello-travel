import { useForm } from 'react-hook-form';
import './QueryForm.css';

const QueryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="img-align">
            <img src="https://kashmirtravelagent.com/images/kta-logo.png" />
          </div>
          <input type="text" placeholder="enter name" {...register('name', { required: true })} />

          <input
            type="email"
            placeholder="enter your email"
            {...register('email', { required: true })}
          />

          {errors.email && errors.email.type === 'required' && (
            <span className="msg">This is required</span>
          )}

          <input
            type="number"
            placeholder="enter your number"
            {...register('number', { required: true })}
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default QueryForm;

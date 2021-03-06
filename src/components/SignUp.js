import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../store/actions';

// 🎒 Initial Values
const initialFormValues = {
  username: '',
  password: '',
  zipCode: ''
};

const SignUp = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      username: formValues.username,
      password: formValues.password,
      zipCode: formValues.zipCode
    };

    await props
      .registerUser(newUser)
      .then((res) => {
        console.log('registerUser in SignUp', res);
        push(`/${res.data.user.username}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <Link to='/'>
        <h1>TownSquare</h1>
      </Link>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formValues.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formValues.password}
          onChange={handleChange}
        />
        <input
          type='text'
          name='zipCode'
          placeholder='Zip Code'
          value={formValues.zipCode}
          onChange={handleChange}
        />
        <button className='btn'>Sign Up</button>
        <p>
          Have an account? <Link to='/login'>Log In</Link>
        </p>
      </form>
      <style jsx='true'>{`
        .container {
          height: 100vh;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          align-items: center;
          padding-top: min(5rem);
          padding-bottom: min(5rem);
        }

        form {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        input {
          margin-bottom: 0.5rem;
          width: 100%;
        }

        .btn {
          font-size: 1.8rem;
          border: 2px solid #000;
          border-radius: 25px;
          padding: 1rem 5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background: #000;
          color: #fcefde;
          width: 20rem;
        }
        .btn:hover {
          background: #444;
          border: 2px solid #444;
        }

        p {
          font-size: 1.4rem;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { registerUser, loginUser })(SignUp);

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
 
    <>

          <div className="signuploginCards card mx-auto">
                <h2 className="text-center mb-5 signuploginTitle">Signup</h2>
                <div className="card-body">

                  {data ? (
                    <p>
                      Success! You may now head{' '}
                      <Link to="/">back to the homepage.</Link>
                    </p>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="text-center">
                      
                      <h4 className="mt-3"> Email Address </h4>
                      <input
                        className="form-input pe-5"
                         placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>

                      <h4>Username</h4>
                      <input
                        className="form-input pe-5"
                        placeholder="Username"
                        name="username"
                        type="username"
                        value={formState.username}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>
                      <h4>Password</h4>
                      <input
                        className="form-input pe-5"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>
                      <button

                        className="btn-lg btn-block signupButton mt-4"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  )}

                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>

    </>

  );
};

export default Signup;

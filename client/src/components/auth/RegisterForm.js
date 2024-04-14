import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom'; 

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    userType: ''
  });
  const navigate = useNavigate(); 

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ variables: { ...formState } });
      if (response.data.signup.token) { 
        console.log('Registration successful', response.data.signup);
        navigate('/dashboard'); 
      }
    } catch (err) {
      console.error('Error registering:', err);
    }
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text" 
            className="form-control"
            name="username"
            placeholder="Enter your username"
            value={formState.username}
            onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            value={formState.password}
            onChange={(e) => setFormState({ ...formState, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            name="userType"
            value={formState.userType}
            onChange={(e) => setFormState({ ...formState, userType: e.target.value })}
          >
            <option value="">Select User Type</option>
            <option value="NURSE">Nurse</option>
            <option value="PATIENT">Patient</option>
          </select>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Register</button>
          <button type="button" className="btn btn-link" onClick={handleLoginClick}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

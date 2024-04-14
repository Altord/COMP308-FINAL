import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { login as saveToken } from '../../utils/auth'; 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (data?.login?.token && data.login.userType) {
      saveToken({
        token: data.login.token,
        userType: data.login.userType,
      });
      setTimeout(() => {
        window.location.href = `/${data.login.userType.toLowerCase()}-dashboard`;
      }, 10); 
    }
  }, [data, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ variables: { username, password } });
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };
  
  const handleRegisterClick = () => {
    navigate('/register'); 
  };

 

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text" 
            className="form-control"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="button" className="btn btn-link" onClick={handleRegisterClick}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import NurseDashboard from './pages/nurse/NurseDashboard';
import PatientDashboard from './pages/patient/PatientDashboard';
import { isLogged, getUserType, logout } from './utils/auth';
import ApolloProvider from './ApolloProvider';
import { Button } from 'react-bootstrap';

function App() {
  const [userType, setUserType] = useState(getUserType());
  const [loggedIn, setLoggedIn] = useState(isLogged());

  useEffect(() => {
    setUserType(getUserType());
    setLoggedIn(isLogged()); 
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    setUserType(null); 
  };
  
  const PrivateRoute = ({ children }) => {
    const isUserLogged = isLogged();
    return isUserLogged ? children : <Navigate to="/login" />;
  };

  const RedirectDashboard = () => {
    if (loggedIn) {
      return userType === 'NURSE' ? <Navigate replace to="/nurse-dashboard" /> : <Navigate replace to="/patient-dashboard" />;
    } else {
      return <Navigate replace to="/login" />;
    }
  };

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<RedirectDashboard />} />
          <Route path="/login" element={!loggedIn ? <LoginForm /> : <RedirectDashboard />} />
          <Route path="/register" element={!loggedIn ? <RegisterForm /> : <RedirectDashboard />} />
          <Route path="/nurse-dashboard" element={<PrivateRoute><NurseDashboard /></PrivateRoute>} />
          <Route path="/patient-dashboard" element={<PrivateRoute><PatientDashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate replace to={loggedIn ? `/${userType.toLowerCase()}-dashboard` : "/login"} />} />
        </Routes>
        {loggedIn && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '10px', borderTop: '1px solid #ccc' }}>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </div>
      )}
      </Router>

  );
}

export default App;

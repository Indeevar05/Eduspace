import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="page-container" style={{ paddingBottom: '30px' }}>
        <div style={{ marginTop: 'auto' }}>
          <h1 className="heading-title">Welcome to PopX</h1>
          <p className="sub-text">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        </div>
        
        <div className="bottom-button-container">
          <Button variant="primary" onClick={() => navigate('/signup')}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

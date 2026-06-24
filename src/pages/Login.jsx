import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please enter email and password.');
      return;
    }
    toast.success('Successfully logged in!');
    navigate('/profile');
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <h1 className="heading-title">Signin to your<br />PopX account</h1>
        <p className="sub-text">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="bottom-button-container">
            <Button variant="primary" disabled={!isFormValid} onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

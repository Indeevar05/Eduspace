import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Wand2, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please enter email and password.');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }
    toast.success('Successfully logged in!');
    navigate('/profile');
  };

  const handleAutoFill = () => {
    setFormData({
      email: 'Marry@Gmail.Com',
      password: 'password123'
    });
    toast('Form auto-filled!', { icon: '✨' });
  };

  const isFormValid = formData.email && formData.password;

  return (
    <>
      <div className="page-wrapper">
        <div className="page-container">
          <button 
            type="button"
            onClick={() => navigate('/')}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: '#1D2226', opacity: '0.7', fontWeight: '500', marginBottom: '15px', padding: 0, fontSize: '14px' }}
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <h1 className="heading-title">Signin to your<br />PopX account</h1>
          <p className="sub-text">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

          <button 
            type="button" 
            onClick={handleAutoFill}
            style={{ backgroundColor: '#f3e8ff', color: '#6C25FF', padding: '10px 14px', borderRadius: '6px', border: '1px dashed #6C25FF', fontSize: '13px', cursor: 'pointer', marginBottom: '20px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Wand2 size={16} />
            Click to AutoPopulate Test Data
          </button>

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
    </>
  );
};

export default Login;

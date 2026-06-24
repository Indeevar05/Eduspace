import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Wand2 } from 'lucide-react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import RadioGroup from '../components/RadioGroup';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      toast.error('Please fill all required fields.');
      return;
    }
    if (formData.fullName.length < 3) {
      toast.error('Full name must be at least 3 characters.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
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
    toast.success('Account created successfully!');
    navigate('/profile');
  };

  const handleAutoFill = () => {
    setFormData({
      fullName: 'Jane Smith',
      phone: '9876543210',
      email: 'jane.smith@popx.com',
      password: 'superSecretPassword',
      company: 'PopX Tech',
      isAgency: 'no'
    });
    toast('Form auto-filled!', { icon: '✨' });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-container">
          <h1 className="heading-title">Create your<br />PopX account</h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: '20px' }}>
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter full name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="Phone number"
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              label="Company name"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />
            
            <RadioGroup
              label="Are you an Agency?"
              name="isAgency"
              required
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' }
              ]}
              value={formData.isAgency}
              onChange={handleChange}
            />

            <div className="bottom-button-container">
              <Button variant="primary" onClick={handleSubmit}>
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Autofill Button outside the main container */}
      <button className="autofill-fab" onClick={handleAutoFill} title="Auto Fill Form">
        <Wand2 size={18} />
        Auto Fill
      </button>
    </>
  );
};

export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      toast.error('Please fill all required fields.');
      return;
    }
    toast.success('Account created successfully!');
    navigate('/profile');
  };

  return (
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
  );
};

export default Signup;

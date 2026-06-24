import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Camera } from 'lucide-react';
import './Profile.css';
import Button from '../components/Button';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logged out successfully.');
    navigate('/');
  };

  return (
    <div className="page-wrapper profile-wrapper-bg">
      <div className="page-container profile-container">
        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>
        
        <div className="profile-content">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img src="https://i.pravatar.cc/150?img=47" alt="User Avatar" className="avatar-img" />
              <button className="camera-btn" onClick={() => toast('Camera clicked!', { icon: '📸' })}>
                <Camera size={12} color="#FFF" />
              </button>
            </div>
            <div className="user-info">
              <h3 className="user-name">Marry Doe</h3>
              <p className="user-email">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <p className="bio-text">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          
          <div className="dashed-separator"></div>
        </div>

        <div className="profile-bottom" style={{ padding: '20px', marginTop: 'auto' }}>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

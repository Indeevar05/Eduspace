import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import './App.css'; // We'll add specific viewport styles here

function App() {
  const [viewport, setViewport] = useState('responsive'); // 'responsive', 'mobile', 'tablet'

  return (
    <BrowserRouter>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'Rubik, sans-serif',
            borderRadius: '8px',
            background: '#1D2226',
            color: '#fff',
            fontSize: '14px',
            padding: '12px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          },
        }}
      />
      
      {/* Viewport Selector Toolbar */}
      <div className="viewport-toolbar">
        <span className="viewport-label">View Mode:</span>
        <button 
          className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
          onClick={() => setViewport('mobile')}
          title="Mobile View (375px)"
        >
          <Smartphone size={16} /> Mobile
        </button>
        <button 
          className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
          onClick={() => setViewport('tablet')}
          title="Tablet View (768px)"
        >
          <Tablet size={16} /> Tablet
        </button>
        <button 
          className={`viewport-btn ${viewport === 'responsive' ? 'active' : ''}`}
          onClick={() => setViewport('responsive')}
          title="Responsive View (Full)"
        >
          <Monitor size={16} /> Responsive
        </button>
      </div>

      <div className={`viewport-container mode-${viewport}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

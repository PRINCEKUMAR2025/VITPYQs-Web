import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AppNotification() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // You can either navigate to a download page
    // navigate('/download');
    
    // Or scroll to the DownloadApp component
    const downloadSection = document.querySelector('.download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Hide the notification
    setVisible(false);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <div 
      className={`app-notification ${visible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <div className="notification-content">
        <div className="notification-icon">📱</div>
        <div className="notification-text">
          <strong>Now Available</strong>
          <p>Download our Android App</p>
        </div>
      </div>
      <button className="close-notification" onClick={handleClose}>×</button>
    </div>
  );
}

export default AppNotification;

import React from 'react';

function DownloadApp() {
  const handleDownload = () => {
    const apkUrl = "https://drive.google.com/file/d/11gzwOgHUZdB6BuIN9buVbeLeIyQ6xeNf/view?usp=sharing";
    window.open(apkUrl, '_blank');
  };

  return (
    <div className="download-app-card">
      <div className="download-app-content">
        <h3>Get our mobile app</h3>
        <p>Access question papers on the go!</p>
        <button onClick={handleDownload} className="download-button">
          Download for Android
        </button>
      </div>
      <div className="download-app-icon">
      </div>
    </div>
  );
}

export default DownloadApp;

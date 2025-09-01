import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from "firebase/database";
import { database } from "../firebase";
import { Link } from "react-router-dom";

function GalleryPage() {
  const [papers, setPapers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPapers, setFilteredPapers] = useState([]);

  useEffect(() => {
    const papersRef = ref(database, "uploads/");
    const unsubscribe = onValue(papersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Attach the Firebase key as id for each paper
        const papersData = Object.entries(data)
          .reverse()
          .map(([id, obj]) => ({ ...obj, id }));
        setPapers(papersData);
        setFilteredPapers(papersData);
      } else {
        setPapers([]);
        setFilteredPapers([]);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPapers(papers);
    } else {
      const filtered = papers.filter(paper =>
        paper.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPapers(filtered);
    }
  }, [searchTerm, papers]);

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = (url) => {
    window.open(url, '_blank');
  };

  // --- Upvote ---
  const handleUpvote = async (paperId, currentUpvotes = 0) => {
    const paperRef = ref(database, `uploads/${paperId}`);
    await update(paperRef, { upvotes: (currentUpvotes || 0) + 1 });
  };

  // --- Report ---
  const handleReport = async (paperId, currentReports = 0) => {
    const paperRef = ref(database, `uploads/${paperId}`);
    await update(paperRef, { reports: (currentReports || 0) + 1 });
    alert("Thank you for reporting. We'll review this paper soon.");
  };

  return (
    <div className="gallery-page">
      <h2>Question Papers</h2>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search papers by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        style={{
          padding: '10px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      
      <div className="papers-grid">
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper, index) => (
            <div key={index} className="paper-card">
              <div
                className="paper-image"
                onClick={() => handleOpenInNewTab(paper.imageUrl)}
                style={{
                  backgroundImage: `url(${paper.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="paper-overlay">
                  <span>Click to view</span>
                </div>
              </div>
              <div className="paper-info">
                <h3>{paper.name}</h3>
                <button
                  onClick={() => handleDownload(paper.imageUrl, paper.name)}
                  className="btn btn-download"
                >
                  Download
                </button>
                <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
                  <button
                    className="btn"
                    style={{ background: "#38a169" }}
                    onClick={() => handleUpvote(paper.id, paper.upvotes)}
                  >
                    👍 Upvote ({paper.upvotes || 0})
                  </button>
                  <button
                    className="btn"
                    style={{ background: "#e53e3e" }}
                    onClick={() => handleReport(paper.id, paper.reports)}
                  >
                    🚩 Report ({paper.reports || 0})
                  </button>
                </div>
                {/* Replace comment section with link to discussion page */}
                <div style={{ marginTop: 12 }}>
                  <Link 
                    to={`/discussion/${paper.id}`} 
                    className="btn"
                    style={{ background: "#4f46e5", display: "inline-block", textDecoration: "none" }}
                  >
                    View Discussion ({paper.comments ? Object.keys(paper.comments).length : 0})
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>
            {papers.length === 0 ? 'No papers available yet.' : 'No papers match your search.'}
          </p>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;

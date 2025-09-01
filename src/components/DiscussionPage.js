import React, { useState, useEffect } from 'react';
import { ref, onValue, push } from "firebase/database";
import { database, auth } from "../firebase";
import { useParams, Link } from "react-router-dom";

function DiscussionPage() {
  const { paperId } = useParams();
  const [paper, setPaper] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const paperRef = ref(database, `uploads/${paperId}`);
    const unsubscribe = onValue(paperRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPaper(data);
        setComments(data.comments ? Object.values(data.comments) : []);
      }
    });
    return () => unsubscribe();
  }, [paperId]);

  const handleAddComment = async () => {
    if (!commentInput.trim()) return;
    const user = auth.currentUser ? auth.currentUser.email : "Anonymous";
    const commentsRef = ref(database, `uploads/${paperId}/comments`);
    
    await push(commentsRef, {
      user,
      text: commentInput,
      timestamp: Date.now(),
    });
    setCommentInput("");
  };

  return (
    <div className="discussion-container">
      <div className="discussion-page">
        <div className="discussion-header">
          <Link to="/gallery" className="btn-back">
            <span className="back-arrow">←</span> Back to Papers
          </Link>
          
          {paper && (
            <div className="paper-header">
              <h2>{paper.name}</h2>
              <div className="paper-actions">
                <a 
                  href={paper.imageUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-paper-btn"
                >
                  View Paper
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="comments-container">
          <h3>Discussion ({comments.length})</h3>
          
          <div className="comment-input-container">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Write your comment..."
              className="comment-textarea"
            />
            <button 
              onClick={handleAddComment}
              className="post-comment-btn"
              disabled={!commentInput.trim()}
            >
              Post Comment
            </button>
          </div>
          
          <div className="comments-list">
            {comments.length > 0 ? (
              comments
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((comment, index) => (
                  <div key={index} className="comment-card">
                    <div className="comment-header">
                      <strong className="comment-user">{comment.user}</strong>
                      <span className="comment-time">{new Date(comment.timestamp).toLocaleString()}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))
            ) : (
              <div className="no-comments">
                <p>No comments yet. Be the first to start the discussion!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionPage;

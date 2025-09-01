import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Home from './components/Home';
import UploadPage from './components/UploadPage';
import GalleryPage from './components/GalleryPage';
import Login from './components/Login';
import Register from './components/Register';
import DiscussionPage from './components/DiscussionPage';
import QuizPage from './components/QuizPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
  <div className="header-content">
    <h1>VIT</h1>
    <nav>
      <ul>
        {user ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Papers</Link></li>
            <li><Link to="/quiz" className="quiz-nav-link">Quiz</Link></li>
            <li><Link to="/upload">Upload</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/quiz" className="quiz-nav-link">Quiz</Link></li>
          </>
        )}
      </ul>
    </nav>
  </div>
</header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/discussion/:paperId" element={<DiscussionPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route 
              path="/upload" 
              element={user ? <UploadPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/gallery" 
              element={user ? <GalleryPage /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <footer>
          <p>© 2025 VIT Question Paper Repository. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

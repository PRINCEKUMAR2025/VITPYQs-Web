import React, { useState } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, set } from "firebase/database";
import { storage, database, auth } from "../firebase";
import { v4 } from "uuid";

function UploadPage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [paperName, setPaperName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const uploadFile = async () => {
    if (imageUpload == null) return;
    setUploading(true);
    setUploadSuccess(false);
    setErrorMsg('');
    try {
      const ext = imageUpload.name.split('.').pop();
      const imageRef = storageRef(storage, `uploads/${paperName || "Paper"}_${v4()}.${ext}`);
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      await saveToDB(url);
      setUploading(false);
      setUploadSuccess(true);
      setPaperName("");
      setImageUpload(null);
    } catch (error) {
      setErrorMsg(error.message);
      setUploading(false);
    }
  };

  const saveToDB = async (imageUrl) => {
    const name = paperName || "Unnamed Paper";
    const uploadsRef = dbRef(database, 'uploads');
    const newUploadRef = push(uploadsRef);
    await set(newUploadRef, {
      imageUrl: imageUrl,
      name: name,
      uploadedBy: auth.currentUser ? auth.currentUser.uid : "anonymous",
      uploadedAt: Date.now()
    });
  };

  return (
    <div className="upload-page">
      <h2>Upload New Question Paper</h2>
      <div className="upload-form">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <input
          type="text"
          placeholder="Paper Name"
          value={paperName}
          onChange={(e) => setPaperName(e.target.value)}
        />
        <button onClick={uploadFile} disabled={!imageUpload || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {uploadSuccess && <p className="success-message">Upload successful!</p>}
      {errorMsg && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}

export default UploadPage;

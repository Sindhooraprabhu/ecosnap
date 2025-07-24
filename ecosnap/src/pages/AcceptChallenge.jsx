// AcceptChallenge.jsx
import React, { useState } from 'react';

function AcceptChallenge() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // form data to send to backend
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('username', 'User123'); // dynamic in real app

    try {
      const res = await fetch('http://localhost:5000/api/submit-challenge', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        setMessage("Challenge Submitted! 🎉 You've earned 50 EcoPoints!");
      } else {
        setMessage("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Submit Your Challenge</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Upload Picture:</label>
          <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Describe your work:</label>
          <textarea className="form-control" rows="4" onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Challenge</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default AcceptChallenge;

'use client';
import { useState } from 'react';

import { insertRecord } from '../lib/firestoreFunctions'; // Make sure your functions are correctly imported
export default function Page() {
  const [tableName, setTableName] = useState(''); // For storing the collection name
  const [file, setFile] = useState(null); // For storing the uploaded file
  const [message, setMessage] = useState(''); // For showing status messages

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tableName || !file) {
      setMessage('Please provide both a collection name and a JSON file.');
      return;
    }

    try {
      // Read the uploaded file
      const reader = new FileReader();
      reader.onload = async (event) => {
        const jsonData = JSON.parse(event.target.result); // Parse JSON
        // Insert JSON data into Firestore
        await insertRecord(tableName, jsonData);
        setMessage('Document successfully uploaded to Firestore!');
      };
      reader.readAsText(file);
    } catch (error) {
      console.error('Error inserting document:', error);
      setMessage('Error uploading document.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload JSON to Firestore</h1>

      <form onSubmit={handleSubmit}>
        {/* Collection Name Input */}
        <div>
          <label htmlFor="tableName">Collection Name:</label>
          <input
            type="text"
            id="tableName"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            placeholder="Enter Firestore collection name"
            required
          />
        </div>

        {/* File Upload Input */}
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="fileUpload">Upload JSON file:</label>
          <input
            type="file"
            id="fileUpload"
            accept=".json"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '10px' }}>
          <button type="submit">Upload</button>
        </div>
      </form>

      {/* Status Message */}
      {message && <p>{message}</p>}
    </div>
  );
}

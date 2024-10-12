import "./ZipUploader.css"; // Import the new CSS file

import React, { useState, ChangeEvent, FormEvent } from "react";

const ZipUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile); // Log the selected file object for debugging
    if (selectedFile) {
      console.log("File type:", selectedFile.type); // Check the file type
      if (
        selectedFile.type === "application/zip" ||
        selectedFile.type === "application/x-zip-compressed"
      ) {
        setFile(selectedFile);
        setError("");
      } else {
        setError("Please select a valid ZIP file.");
      }
    } else {
      setError("No file selected.");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // Add your upload logic here (e.g., send to a backend API)
      console.log("File ready to be uploaded:", file);
    }
  };

  return (
    <div className="zip-uploader">
      <h2>Upload a ZIP file</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".zip" onChange={handleFileChange} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={!file}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default ZipUploader;

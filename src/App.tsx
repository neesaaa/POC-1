import React from "react";
import ZipUploader from "./components/ZipUploader";
import "./styles/styles.css"; // Import the CSS file

const App: React.FC = () => {
  return (
    <div>
      <h1>File Upload App</h1>
      <ZipUploader />
    </div>
  );
};

export default App;

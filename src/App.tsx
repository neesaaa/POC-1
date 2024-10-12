import React from "react";
import ZipUploader from "./components/ZipUploader";
import logo from "./assets/test1-1.png";
import "./styles/styles.css"; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>File Upload App</h1>
      </div>
      <ZipUploader />
    </div>
  );
};

export default App;

import React from 'react';
import "./App.css"

function MyPortfolio() {
  return (
    <div>
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#portfolio">Portfolio</a>
      </div>

      <div className="header">
        <div className="row1">
          <img src="images/1.jpeg" alt="Profile" />
        </div>
        <div className="row2">
          <h2>Poorna Vaishnavi A D</h2>
          <p>
            Customer Experience Engineer, Intern
            <br />
            DevRev, Chennai
          </p>
        </div>
      </div>
      <br />
      <br />

      <h1>Projects</h1>
      <div className="main">
        <div className="row">
          <div className="col">
            <h3>Library Management System</h3>
            <img src="images/lib.jpeg" alt="Project" />
            <p>
              Platform for efficiently managing library resources, including
              books, documents, and user interactions.
            </p>
          </div>
          <div className="col">
            <h3>RFID Scanner</h3>
            <img src="images/rfid.jpeg" alt="Project" />
            <p>
              Enables quick and precise identification of objects or individuals
              using RFID tags.
            </p>
          </div>
          <div className="col">
            <h3>WIMAX Interleaver</h3>
            <img src="images/wimax.jpeg" alt="Project" />
            <p>
              Efficiently implement the address generation circuitry of the 2-D
              deinterleaver used in the WiMAX transceiver,
            </p>
          </div>
        </div>
      </div>
      <h1>About Me</h1>
      <div className="info">
        <div className="row">
          <div className="col">
            <h2>Personal Details</h2>
            <ul>
              <li>Name: Poorna Vaishnavi A D</li>
              <li>DOJ: 10/10/2002</li>
              <li>Location: Chennai</li>
              <li>Phone: 9894502517</li>
              <li>Mail ID: poornavaishnavi1010@gmail.com</li>
            </ul>
          </div>
          <div className="col2">
            <h2>Education/Skillsets</h2>
            <ul>
              <li>BE(ECE)</li>
              <li>DSA</li>
              <li>SQL</li>
              <li>Frontend</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;

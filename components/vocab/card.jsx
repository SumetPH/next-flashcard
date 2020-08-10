import React from "react";

export default function Card({ word, hint }) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title" style={{ fontSize: "22px" }}>
          {word}
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <p>{hint}</p>
          {/* {trans === id ? <p>Trans : {trans}</p> : null} */}
        </div>
      </div>
      <footer className="card-footer">
        <a
          href="#"
          className="card-footer-item"
          //   onClick={e => {
          //     e.preventDefault();
          //     tts(title);
          //   }}
        >
          Play
        </a>
        <a
          href="#"
          className="card-footer-item"
          //   onClick={e => transEvent(e, id)}
        >
          Trans
        </a>
        <a
          href="#"
          className="card-footer-item"
          //   onClick={e => {
          //     e.preventDefault();
          //     delEvent(id);
          //   }}
        >
          Delete
        </a>
      </footer>
    </div>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "3%",
        right: "5%",
        left: "5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: "0 30px",
      }}
    >
      <ul>
        <li>
          <h1 className="title has-text-light">Flashcard</h1>
          <h3 className="subtitle is-6 has-text-light">SumetPH</h3>
        </li>
      </ul>
      <ul>
        <li>
          <a className="has-text-white" href="/">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import { tts } from "../../lib/tts";
export default function Card({ item, deleteCard }) {
  const [transEvent, setTransEvent] = useState(false);
  return (
    <div className="column is-3 hvr-float-shadow">
      <div className="card" style={{ borderRadius: 18 }}>
        <div className="card-content">
          <div className="content has-text-centered">
            <p className="title is-1" style={{ fontSize: "26px" }}>
              {item.word}
            </p>
            <p>{item.hint}</p>
            {transEvent ? <p>Trans : {item.trans}</p> : null}
          </div>
        </div>
        <footer className="card-footer">
          <a
            href="#"
            className="card-footer-item has-text-black"
            onClick={e => {
              e.preventDefault();
              tts(item.word);
            }}
          >
            Play
          </a>
          <a
            href="#"
            className="card-footer-item has-text-black"
            onClick={e => {
              e.preventDefault();
              setTransEvent(true);
            }}
          >
            Trans
          </a>
          <a
            href="#"
            className="card-footer-item has-text-black"
            onClick={e => {
              e.preventDefault();
              deleteCard(item.id);
            }}
          >
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
}

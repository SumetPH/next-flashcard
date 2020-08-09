import React, { useContext } from "react";
import { useRouter } from "next/router";

import { AppContext } from "../../context";

export default function Navbar() {
  const { username } = useContext(AppContext);
  const router = useRouter();

  const Logout = () => {
    localStorage.removeItem("username");
    router.reload();
  };

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
          <span
            className="has-text-white"
            style={{ cursor: "pointer" }}
            onClick={Logout}
          >
            {username}
          </span>
        </li>
      </ul>
    </div>
  );
}

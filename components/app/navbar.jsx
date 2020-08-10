import React, { useContext } from "react";
import { useRouter } from "next/router";

import { AppContext } from "../../context";

export default function Navbar({ theme = "hsl(171, 100%, 41%)" }) {
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
        alignItems: "center"
      }}
    >
      <ul>
        <li>
          <a onClick={() => router.push("/")}>
            <h1 className="title has-text-light">Flashcard</h1>
            <h3 className="subtitle is-6 has-text-light">SumetPH</h3>
          </a>
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

import "../css/global.css";
import "../css/bulma.min.css";
import "../css/hover.min.css";

import Head from "next/head";
import { useEffect, useState } from "react";
import { AppContext } from "../context";
import Login from "../components/app/login";

import axios from "axios";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  });

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Head>
        <title>Flashcard</title>
        <link
          rel="shortcut icon"
          href="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/flashcards-png-icon.png?itok=R8D0VXup"
          type="image/x-icon"
        />
      </Head>
      {username === null ? <Login /> : <Component {...pageProps} />}
    </AppContext.Provider>
  );
}

export default MyApp;

import "../css/global.css";
import "../css/bulma.min.css";
import "../css/hover.min.css";

import Navbar from "../components/app/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

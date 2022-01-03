import { useEffect } from "react";
import styles from "../styles/globals.css";
import Header from "./components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header showHireButton={pageProps.showHireButton} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

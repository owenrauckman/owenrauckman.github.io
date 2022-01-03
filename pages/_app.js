import { useEffect } from "react";
import styles from "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header showHireButton={pageProps.showHireButton} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

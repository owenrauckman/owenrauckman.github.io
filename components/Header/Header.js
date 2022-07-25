import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";

function Header({ showHireButton = false, hireText = "", hireLink = "" }) {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  /* Disable scrolling when nav is open */
  useEffect(() => {
    if (navOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [navOpen]);

  /* Close nav on route change */
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setNavOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    /* Unsubscribe on unmount */
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Link href="/" onClick={() => setNavOpen(false)}>
          <a>
            <div className={styles.logo}>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Owen Rauckman logo</title>
                <path
                  d="M2.531 4.983 17.3 1.03 2.53 18.69v-8.664l11.184 8.664"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </Link>
        <div className={styles.right}>
          <Link href={hireLink || "#"}>
            <a
              className={`${styles.hireButton} ${
                navOpen || !showHireButton ? styles.hideHireButton : ""
              }`}
              target={hireText.includes("Owen") ? "_self" : "_blank"}
            >
              {hireText}
            </a>
          </Link>
          <div
            className={styles.hamburgerContainer}
            onClick={() => setNavOpen(!navOpen)}
          >
            <a href="#" className={styles.menuButton}>
              <div
                className={`${styles.menuIcon} ${
                  navOpen ? styles.isActive : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            className={styles.nav}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className={styles.navContainer}>
              <div>
                <div className={styles.navHeading}>Projects</div>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <Link href="/projects/tryna">
                      <a>Tryna</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/projects/fanthreesixty">
                      <a>FanThreeSixty</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/projects/ap-robotics">
                      <a>AP Robotics</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/projects/ag-future">
                      <a>Ag Future</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/projects/garmin">
                      <a>Garmin</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.navRight}>
                <div className={styles.navHeading}>Pages</div>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerContainer}>
              <Footer theme="dark" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

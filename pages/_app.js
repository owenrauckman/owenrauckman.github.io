import styles from "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import Script from "next/script";

import { useEffect } from "react";

const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      top: "10vh",
      scale: 0.9
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1
    }
    // exit: {
    //   opacity: 0,
    //   top: "0vh",
    //   scale: 1
    // }
  },
  transition: {
    duration: 0.4
  }
};

const fade = {
  name: "Fade",
  variants: {
    initial: {
      opacity: 0,
      top: "10vh",
      scale: 1
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1
    }
    // exit: {
    //   opacity: 0,
    //   top: "0vh",
    //   scale: 1
    // }
  },
  transition: {
    duration: 0.4
  }
};

function MyApp({ Component, pageProps, router }) {
  const animation = router.route === "/" ? slideUp : fade;

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag("config", "UA-51475352-1", {
        page_path: url
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="app-wrap">
      <Header
        showHireButton={pageProps.showHireButton}
        hireText={pageProps.hireText}
        hireLink={pageProps.hireLink}
      />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={true}>
          <m.div
            key={router.route}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
            onAnimationComplete={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <Component {...pageProps} key={router.route} />
            <Footer />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=UA-51475352-1"
      />
      <Script id="ga-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-51475352-1');
        `}
      </Script>
    </div>
  );
}

export default MyApp;

import styles from "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";

const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      top: "100vh",
      scale: 0.4
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1
    },
    exit: {
      opacity: 0,
      top: "100vh",
      scale: 0.4
    }
  },
  transition: {
    duration: 0.7
  }
};

const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 0.6
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      left: "-100%",
      scale: 0.6
    }
  },
  transition: {
    duration: 0.7
  }
};

function MyApp({ Component, pageProps, router }) {
  const animation = router.route === "/" ? slideUp : slideRight;
  return (
    <div className="app-wrap">
      <Header showHireButton={pageProps.showHireButton} />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={false}>
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
    </div>
  );
}

export default MyApp;

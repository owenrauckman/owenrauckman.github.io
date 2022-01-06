import { useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import sal from "sal.js";
import "sal.js/dist/sal.css";

function NextSection({ data }) {
  useEffect(() => {
    sal({ once: true, threshold: 0.5 }); // these are the defaults, but here for refernce
  }, []);

  return (
    <div className={styles.nextContainer}>
      <div className={styles.nextWrapper}>
        <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="500">
          <div className={styles.nextText}>Next Project</div>
          <Link href={data.next.link}>
            <a className={styles.linkWrapper}>
              <div className={styles.nextTitle}>{data.next.name}</div>
              <svg
                className={styles.nextArrow}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NextSection;

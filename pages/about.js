import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import owenAvi from "../public/owen-avi.png";
import aboutMap from "../public/about-map.png";

import styles from "../styles/About.module.scss";
import { aboutData } from "../data";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Tryna() {
  useEffect(() => {
    document
      .getElementById("js__about-container")
      .parentElement.parentElement.style.setProperty(
        "background",
        `linear-gradient(180deg, #EAEBEF 0%, #EAEBEF 50.26%, rgba(234, 235, 239, 0) 100%)`
      );
  }, []);

  useEffect(() => {
    sal({ once: true, threshold: 0.5 }); // these are the defaults, but here for refernce
  }, []);

  return (
    <div className={styles.hello}>
      <Head>
        <title>About | Owen Rauckman</title>
        <meta
          name="description"
          content="Hey there, I'm Owen. I design UIs, build web apps, write backend services, and anything in between"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main className={styles.aboutContainer} id="js__about-container">
        <div className={styles.grid}>
          <div
            className={styles.me}
            data-sal="zoom-in"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            <div className={styles.meImage}>
              <Image
                alt="avatar"
                src={owenAvi}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                className={styles.meImageNext}
              />
            </div>
            <div>
              <div className={styles.meName}>Owen Rauckman</div>
              <div className={styles.meTitle}>Software Architect</div>
            </div>
          </div>
          <div
            className={styles.location}
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-duration="500"
          >
            <div className={styles.locationMap}>
              <Image
                alt="map"
                src={aboutMap}
                layout="fill"
                objectFit="responsive"
                placeholder="blur"
                className={styles.locationMapNext}
              />
            </div>
            <div className={styles.locationTitle}>Kansas City, MO</div>
          </div>
          <div
            className={styles.contact}
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-duration="500"
          >
            <div className={styles.connectWrapper}>
              <a
                href="https://www.linkedin.com/in/owenrauckman/"
                target="blank"
                className={styles.connect}
              >
                <svg
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.connectIcon}
                >
                  <title>LinkedIn</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.077 7.154a2.078 2.078 0 1 0-.002-4.156 2.078 2.078 0 0 0 .002 4.156ZM3 21V8.539h4.154V21H3ZM9.924 8.539h3.83v1.963h.056c.533-.957 1.838-1.963 3.783-1.963 4.044 0 4.792 2.517 4.792 5.791V21H18.39v-5.912c0-1.41-.029-3.225-2.076-3.225-2.08 0-2.399 1.536-2.399 3.122V21H9.925V8.539Z"
                    fill="#000"
                  />
                </svg>
                <div className={styles.connectText}>LinkedIn</div>
              </a>
              <a
                href="mailto:owenrauckman@gmail.com?subject=Let's work together!"
                target="blank"
                className={styles.connect}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.emailIcon}
                >
                  <title>Email</title>
                  <path
                    strokeWidth="2"
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                    fill="#000"
                  />
                  <path strokeWidth="2" d="m22 6-10 7L2 6" />
                </svg>
                <div className={styles.connectText}>Email</div>
              </a>
            </div>
          </div>
          <div
            className={styles.hobbies}
            data-sal="zoom-in"
            data-sal-delay="700"
            data-sal-duration="500"
          >
            <div className={styles.hobbiesWrapper}>
              {aboutData.hobbies.map((hobby, index) => (
                <div key={index} className={styles.hobby}>
                  <div className={styles.hobbyEmoji}>{hobby.emoji}</div>
                  <div className={styles.hobbyText}>{hobby.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.service}
            data-sal="zoom-in"
            data-sal-delay="200"
            data-sal-duration="00"
          >
            <div className={styles.serviceCallout}>
              <div className={styles.serviceHeading}>10+</div>
              <div className={styles.serviceDescription}>Years/Exp</div>
            </div>
            <div className={styles.serviceCallout}>
              <div className={styles.serviceHeading}>20+</div>
              <div className={styles.serviceDescription}>Clients Served</div>
            </div>
          </div>
          <div
            className={styles.button}
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-duration="500"
          >
            <a
              className={styles.resumeButton}
              href="/owenRauckmanResume2023.pdf"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.resumeButtonIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="8 12 12 16 16 12" />
                <line x1="12" y1="8" x2="12" y2="16" />
              </svg>
              <div>Download Resume</div>
            </a>
          </div>
        </div>

        {/* Building Blocks */}
        <div>
          <div className={styles.buildingBlocksContainer}>
            <div className={styles.buildingBlocksContent}>
              <div className={styles.buildingBlocksHeading}>
                Building Blocks
              </div>
              <div className={styles.buildingBlocksDescription}>
                Here’s my digital toolset. I’m always learning new things.
              </div>
            </div>
            <img
              data-sal="zoom-in"
              data-sal-delay="0"
              data-sal-duration="1000"
              className={styles.buildingBlocksImage}
              src="/building-blocks.svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* Pass props to the main app.js, useful for conditional elements in our header */
export async function getStaticProps() {
  return {
    props: {
      showHireButton: true,
      hireText: "Hire Me",
      hireLink: "https://www.linkedin.com/in/owenrauckman/",
    },
  };
}

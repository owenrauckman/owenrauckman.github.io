import { useEffect } from "react";
import Head from "next/head";
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
          content="Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.aboutContainer} id="js__about-container">
        <div className={styles.grid}>
          <div
            className={styles.me}
            data-sal="zoom-in"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            <img src="/owen-avi.png" className={styles.meImage} />
            <div>
              <div className={styles.meName}>Owen Rauckman</div>
              <div className={styles.meTitle}>Lead Software Engineer</div>
            </div>
          </div>
          <div
            className={styles.location}
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-duration="500"
          >
            <img src="/about-map.png" className={styles.locationMap} />
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
                href="https://twitter.com/owenrauckman"
                target="blank"
                className={styles.connect}
              >
                <svg
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.connectIcon}
                >
                  <title>Twitter</title>

                  <path
                    d="M26 5.128a8.832 8.832 0 0 1-2.59.714 4.565 4.565 0 0 0 1.985-2.514c-.871.52-1.84.9-2.865 1.104A4.495 4.495 0 0 0 19.235 3c-2.492 0-4.51 2.034-4.51 4.543 0 .354.039.7.116 1.034-3.75-.191-7.076-2-9.301-4.75a4.571 4.571 0 0 0-.61 2.284c0 1.576.794 2.968 2.005 3.781a4.513 4.513 0 0 1-2.046-.566v.057a4.537 4.537 0 0 0 3.621 4.456 4.491 4.491 0 0 1-2.041.08c.576 1.803 2.242 3.119 4.215 3.157A9.012 9.012 0 0 1 4 18.958 12.7 12.7 0 0 0 10.92 21c8.299 0 12.84-6.927 12.84-12.933 0-.2-.003-.393-.012-.588a9.093 9.093 0 0 0 2.25-2.35L26 5.128Z"
                    fill="#000"
                  />
                </svg>
                <div className={styles.connectText}>Twitter</div>
              </a>
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
              href="/owenRauckmanResume2022.pdf"
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
      hireLink: "https://www.linkedin.com/in/owenrauckman/"
    }
  };
}

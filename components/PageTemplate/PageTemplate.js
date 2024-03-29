import { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import sal from "sal.js";
import "sal.js/dist/sal.css";

function PageTemplate({ data }) {
  /* Kind of janky, but setting the gradient on the parent parent element, since it doesn't appear we can edit it directly in nextJs */
  useEffect(() => {
    document
      .getElementById("js__project-container")
      .parentElement.parentElement.style.setProperty(
        "background",
        `linear-gradient(180deg, ${data.gradientStart} 0%, ${data.gradientStop}  100%)`
      );
  }, []);

  useEffect(() => {
    sal({ once: true, threshold: 0.5 }); // these are the defaults, but here for refernce
  }, []);

  return (
    <div className={styles.projectContainer} id="js__project-container">
      <div
        className={styles.projectHeroImage}
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="500"
      >
        <Image
          alt="hero image"
          src={data.heroImage}
          layout="responsive"
          objectFit="contain"
          placeholder="blur"
          className={styles.projectHeroImageNext}
        />
      </div>
      <h1
        className={styles.heading}
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="500"
      >
        {data.heading}
      </h1>
      <div
        className={styles.description}
        data-sal="fade"
        data-sal-delay="1000"
        data-sal-duration="500"
      >
        {data.description}
      </div>

      <div
        className={styles.calloutGrid}
        data-sal="fade"
        data-sal-delay="1000"
        data-sal-duration="1000"
      >
        {data.details.map((detail, index) => (
          <div key={index}>
            <div className={styles.calloutGridHeading}>{detail.title}</div>
            <div className={styles.calloutGridDescription}>
              {detail.description}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionGrid}>
        {data.sections.map((section, index) => (
          <div className={styles.sectionGridItem} key={index}>
            <div
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              <div className={styles.sectionGridHeading}>{section.title}</div>
              <div className={styles.sectionGridDescription}>
                {section.description}
              </div>
            </div>
            <div
              className={styles.sectionGridImage}
              data-sal="slide-left"
              data-sal-duration="1000"
            >
              <Image
                alt="section image"
                src={section.image}
                layout="responsive"
                objectFit="contain"
                placeholder="blur"
                className={styles.sectionGridImageNext}
              />
            </div>
          </div>
        ))}
      </div>

      <a
        href={data.buttonLink}
        target={data.buttonLink === "#" ? "" : "_blank"}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.buttonIcon}
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <div>{data.buttonText}</div>
      </a>
    </div>
  );
}

export default PageTemplate;

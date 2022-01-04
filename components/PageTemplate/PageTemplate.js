import { useEffect } from "react";
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
      <img
        className={styles.projectHeroImage}
        src={data.heroImage}
        alt="hero image"
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="500"
      />
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
        data-sal-duration="1000"
      >
        {data.description}
      </div>

      <div
        className={styles.calloutGrid}
        data-sal="fade"
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
            <img
              className={styles.sectionGridImage}
              src={section.image}
              alt="section image"
              data-sal="slide-left"
              data-sal-duration="1000"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageTemplate;

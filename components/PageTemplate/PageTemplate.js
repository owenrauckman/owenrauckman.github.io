import { useEffect } from "react";
import styles from "./styles.module.scss";

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

  return (
    <div className={styles.projectContainer} id="js__project-container">
      <img
        className={styles.projectHeroImage}
        src={data.heroImage}
        alt="hero image"
      />
      <h1 className={styles.heading}>{data.heading}</h1>
      <div className={styles.description}>{data.description}</div>

      <div className={styles.calloutGrid}>
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
            <div>
              <div className={styles.sectionGridHeading}>{section.title}</div>
              <div className={styles.sectionGridDescription}>
                {section.description}
              </div>
            </div>
            <img
              className={styles.sectionGridImage}
              src={section.image}
              alt="section image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageTemplate;

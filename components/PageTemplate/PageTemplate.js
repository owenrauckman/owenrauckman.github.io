import styles from "./styles.module.scss";

function PageTemplate({ data }) {
  return (
    <div>
      <div className={styles.projectContainer}>
        <img
          className={styles.projectHeroImage}
          src={data.heroImage}
          alt="hero image"
        />
      </div>
      <div
        className={styles.projectBackground}
        style={{
          background: `linear-gradient(180deg, ${data.gradientStart} 0%, ${data.gradientStop}  100%)`
        }}
      ></div>
    </div>
  );
}

export default PageTemplate;

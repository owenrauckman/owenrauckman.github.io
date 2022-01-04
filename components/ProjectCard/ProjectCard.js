import styles from "./styles.module.scss";

function ProjectCard({ showHireButton = false }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className={styles.right}>
        {showHireButton && <div className={styles.hireButton}>Hire me</div>}
        <div className={styles.hamburgerContainer}>
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#000" d="M0 0h18v2H0zM0 6h18v2H0zM0 12h18v2H0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

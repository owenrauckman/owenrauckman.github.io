import styles from "./styles.module.scss";

function Footer({ theme = "light" }) {
  return (
    <div className={styles.footer} data-theme={theme}>
      <div>©{new Date().getFullYear()} Owen Rauckman</div>
      <div className={styles.icons}>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/owenrauckman/"
          target="blank"
        >
          <svg
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.077 7.154a2.078 2.078 0 1 0-.002-4.156 2.078 2.078 0 0 0 .002 4.156ZM3 21V8.539h4.154V21H3ZM9.924 8.539h3.83v1.963h.056c.533-.957 1.838-1.963 3.783-1.963 4.044 0 4.792 2.517 4.792 5.791V21H18.39v-5.912c0-1.41-.029-3.225-2.076-3.225-2.08 0-2.399 1.536-2.399 3.122V21H9.925V8.539Z"
              fill="#000"
            />
          </svg>
        </a>
        <a
          className={styles.icon}
          href="mailto:owenrauckman@gmail.com?subject=Let's work together!"
          target="blank"
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
        </a>
      </div>
    </div>
  );
}

export default Footer;

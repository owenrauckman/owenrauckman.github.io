import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.footer}>
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
          href="https://twitter.com/owenrauckman"
          target="blank"
        >
          <svg
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter</title>

            <path
              d="M26 5.128a8.832 8.832 0 0 1-2.59.714 4.565 4.565 0 0 0 1.985-2.514c-.871.52-1.84.9-2.865 1.104A4.495 4.495 0 0 0 19.235 3c-2.492 0-4.51 2.034-4.51 4.543 0 .354.039.7.116 1.034-3.75-.191-7.076-2-9.301-4.75a4.571 4.571 0 0 0-.61 2.284c0 1.576.794 2.968 2.005 3.781a4.513 4.513 0 0 1-2.046-.566v.057a4.537 4.537 0 0 0 3.621 4.456 4.491 4.491 0 0 1-2.041.08c.576 1.803 2.242 3.119 4.215 3.157A9.012 9.012 0 0 1 4 18.958 12.7 12.7 0 0 0 10.92 21c8.299 0 12.84-6.927 12.84-12.933 0-.2-.003-.393-.012-.588a9.093 9.093 0 0 0 2.25-2.35L26 5.128Z"
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
          >
            <title>Email</title>
            <g
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                fill="#000"
              />
              <path d="m22 6-10 7L2 6" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;

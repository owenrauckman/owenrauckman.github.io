import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { homePageData } from "../data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Owen Rauckman</title>
        <meta
          name="description"
          content="Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.projectContainer}>
          {homePageData.map((project, index) => (
            <div
              key={index}
              style={{
                background: `linear-gradient(180deg, ${project.gradientStart} 0%, ${project.gradientStop}  100%)`
              }}
              className={styles.project}
            >
              <div className={styles.projectName}>{project.title}</div>
              <img className={styles.projectImage} src={project.image} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* Pass props to the main app.js, useful for conditional elements in our header */
export async function getStaticProps() {
  return {
    props: {
      showHireButton: true
    }
  };
}

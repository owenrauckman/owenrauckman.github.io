import Head from "next/head";
import Link from "next/link";
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
          content="Hey there, I'm Owen. I design UIs, build web apps, write backend services, and anything in between"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main>
        <div className={styles.projectContainer}>
          {homePageData.map((project, index) => (
            <Link href={project.link} key={index}>
              <a
                style={{
                  background: `linear-gradient(180deg, ${project.gradientStart} 0%, ${project.gradientStop}  100%)`
                }}
                className={styles.project}
                {...(project.link.startsWith("https")
                  ? { target: "_blank" }
                  : {})}
              >
                <div className={styles.projectContent}>
                  <div className={styles.projectName}>{project.title}</div>
                  <div className={styles.projectImage}>
                    <Image
                      alt="project image"
                      src={project.image}
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      className={styles.projectImageNext}
                    />
                  </div>
                </div>
              </a>
            </Link>
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
      showHireButton: true,
      hireText: "Meet Owen",
      hireLink: "/about"
    }
  };
}

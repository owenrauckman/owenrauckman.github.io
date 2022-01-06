import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Project.module.scss";
import { apRoboticsData } from "../../data";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import NextSection from "../../components/NextSection/NextSection";

export default function FanThreeSixty() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AP Robotics | Owen Rauckman</title>
        <meta
          name="description"
          content="An exploration of my work for AP Robotics"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main>
        <PageTemplate data={apRoboticsData} />
      </main>
      <NextSection data={apRoboticsData} />
    </div>
  );
}

/* Pass props to the main app.js, useful for conditional elements in our header */
export async function getStaticProps() {
  return {
    props: {
      showHireButton: false
    }
  };
}

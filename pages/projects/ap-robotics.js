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
          content="Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between."
        />
        <link rel="icon" href="/favicon.ico" />
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

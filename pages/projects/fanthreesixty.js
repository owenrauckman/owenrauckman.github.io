import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Project.module.scss";
import { fanThreeSixtyData } from "../../data";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import NextSection from "../../components/NextSection/NextSection";

export default function FanThreeSixty() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FanThreeSixty | Owen Rauckman</title>
        <meta
          name="description"
          content="An exploration of my work with FanThreeSixty"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main>
        <PageTemplate data={fanThreeSixtyData} />
      </main>
      <NextSection data={fanThreeSixtyData} />
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

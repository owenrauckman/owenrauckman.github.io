import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Project.module.scss";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import NextSection from "../../components/NextSection/NextSection";

import { agFutureData } from "../../data";

export default function Tryna() {
  return (
    <div className={styles.hello}>
      <Head>
        <title>Ag Future | Owen Rauckman</title>
        <meta
          name="description"
          content="An exploration of my work for Agriculture Future of America"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-meta.jpg" key="ogimage" />
      </Head>
      <main>
        <PageTemplate data={agFutureData} />
      </main>
      <NextSection data={agFutureData} />
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

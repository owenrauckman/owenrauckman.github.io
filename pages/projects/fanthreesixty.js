import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Project.module.scss";
import { fanThreeSixtyData } from "../../data";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

export default function FanThreeSixty() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Owen Rauckman | FanThreeSixty</title>
        <meta
          name="description"
          content="Hello, I'm Owen. I design UIs, build web apps, write backend services, and anything in between."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageTemplate data={fanThreeSixtyData} />
      </main>
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

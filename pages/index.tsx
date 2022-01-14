import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PvZ 2</title>
        <meta name="description" content="Plants Vs Zombies -2 documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-slate-900 h-screen w-full flex justify-center  items-center">
        <div
          className={`flex flex-col w-3/4 h-3/4 items-center justify-center ${styles.searchContainer}`}
        >
          <div className="relative w-full max-w-sm ">
            <Image
              src={"/assets/header_image.png"}
              layout="responsive"
              width={1434}
              height={667}
            />
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Home;

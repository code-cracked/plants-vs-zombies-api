import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import AboutCard from "../components/AboutCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PvZ 2</title>
        <meta name="description" content="Plants Vs Zombies -2 documentation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        className="bg-gray-50 dark:bg-slate-900 h-screen w-full flex justify-center flex-col items-center"
        id="home-search"
      >
        <div
          className={`flex flex-col w-3/4 h-3/4 items-center justify-center ${styles.searchContainer}`}
        >
          <div className={`relative w-full max-w-sm`}>
            <Image
              src={"/assets/header_image.png"}
              layout="responsive"
              width={1434}
              height={667}
              className={styles.img}
            />
          </div>
          <SearchBar />
        </div>
        <div className="bottom-4">
          <a href="#about" className="dark:text-slate-400 ">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="bg-gray-100 dark:bg-zinc-900 min-h-fit h-screen w-full "
        id="about"
      >
        <h2 className="text-center font-display font-medium text-3xl md:text-4xl lg:text-5xl lg:font-normal py-6">
          About us
        </h2>
        <div className=" flex items-center flex-col w-full justify-around h-5/6">
          <AboutCard
            title={"Ridiculously fast."}
            detail={
              "PvZ2 web-app was designed to help people navigate through large amounts of data with ease."
            }
            image={"/assets/ridiculously-fast.png"}
            color={"text-red-700"}
            border="hover:border-red-700 dark:hover:border-red-500 hover:shadow-sm hover:shadow-red-700"
          />
          <AboutCard
            title={"Clean UI."}
            detail={
              "Rating is a very important both for us (it motivates to develop new modules), and for future customers."
            }
            image={"/assets/clean-ui.png"}
            color={"text-yellow-500"}
            border="hover:border-yellow-700 dark:hover:border-yellow-500 hover:shadow-sm hover:shadow-yellow-700"
          />
          <AboutCard
            title={"Extremely resourceful."}
            detail={
              "We create useful and unique solutions in challenging situations. Help us build a strong network."
            }
            image={"/assets/extremely-resourceful.jpg"}
            color={"text-green-400"}
            border="hover:border-green-700 dark:hover:border-green-500 hover:shadow-sm hover:shadow-green-700"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
{
  /* sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-yellow-400 */
}

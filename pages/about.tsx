import { GitHub } from "@material-ui/icons";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta property="description" content="About PvZ2 API" />
      </Head>
      <div className="sticky top-0 h-14 bg-white dark:bg-black z-20 flex flex-row justify-between items-center px-4">
        <nav className="pl-4 bg-white dark:bg-black bg-opacity-80 flex flex-row justify-end h-full items-center ">
          <Link href={"/"}>
            <a className="h-full hover:bg-neutral-200 hover:dark:bg-slate-900 flex items-center px-8 hover:no-underline">
              Home
            </a>
          </Link>
        </nav>
      </div>
      <div className=" ml-36 mt-3">
        <h1 className="font-bold text-4xl">About</h1>
        <h3 className="font-semibold text-xl my-4 mx-7">What is this?</h3>
        <p className="mx-10">
          This website provides a RESTful{" "}
          <abbr title="Plants vs Zombies API">PVZ API </abbr> interface to
          highly detailed objects built from thousands of lines of data related
          to{" "}
          <a
            href="https://www.ea.com/games/plants-vs-zombies/plants-vs-zombies-2"
            target={"_blank"}
          >
            Plants vs Zombies-2
          </a>
          . We specifically cover the video game Plants vs Zombies-2. Using this
          website, you can consume information on plants,zombies and areas.
        </p>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">What is an API?</h3>
          <p className="mx-10 mt-4">
            An API (Application Programming Interface) is a contract that allow
            developers to interact with an application through a set of
            interfaces. In this case, the application is a database of thousands
            of Plants vs Zombies-related objects, and the interfaces are URL
            links.<br></br>
          </p>
          <p className="mx-10 mt-1">
            A RESTful API is an API that conforms to a set of loose conventions
            based on HTTP verbs, errors, and hyperlinks.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">
            Aren't there any <abbr title="Plants vs Zombies API">PVZ API</abbr>{" "}
            already?
          </h3>
          <p className="mx-10 mt-3">
            As far as we know there is no other API for Plants VS Zombies-2
            though there are some websites exist. We aim to provide a single
            source of data that any number of other websites can consume and
            use.
          </p>
          <p className="mx-10 mt-1">
            We updates often which prevents bugs and addition of new data about
            plants,zombies and areas after each update
          </p>
          <p className="mx-10 mt-1">
            Often, and especially when new Plants vs Zombies updates are
            released, those websites take weeks to update as people have to
            enter the same information in all those different places. This
            solves that problem. If all those sites consumed their data from
            here, they would have the exact same information that is updated at
            exactly the same time, with no errors between each website. The
            overall benefit is a better collaboration and consistency across all
            the different Pokémon websites and applications. It's good for all!
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">
            How much information is stored here?
          </h3>
          <p className="mx-10 mt-3">A lot</p>
          <p className="mx-10 mt-3">
            We currently have hundreds of individual items in our database,
            including:<br></br>
            <br></br>
            <h1 className="font-medium text-lg">Plants Data:</h1>
            <ul className="ml-7">
              <li>Names</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;

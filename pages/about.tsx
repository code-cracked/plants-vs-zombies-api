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
          <Link href={"/docs"}>
            <a className="h-full hover:bg-neutral-200 hover:dark:bg-slate-900 flex items-center px-8 hover:no-underline">
              Docs
            </a>
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-4xl mt-8 xl:p-10 lg:p-8 md:p-6 sm:p-3">
        <h1 className="font-bold text-4xl">About</h1>
        <h3 className="font-semibold text-xl my-4 ml-7">What is this?</h3>
        <p className="ml-10">
          This website provides a RESTful{" "}
          <abbr title="Plants vs Zombies API">PVZ API </abbr> interface to
          highly detailed objects built from thousands of lines of data related
          to{" "}
          <a
            href="https://www.ea.com/games/plants-vs-zombies/plants-vs-zombies-2"
            target={"_blank"}
            rel="noreferrer"
          >
            Plants vs Zombies-2
          </a>
          . We specifically cover the video game Plants vs Zombies-2. Using this
          website, you can consume information on plants,zombies and areas.
        </p>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">What is an API?</h3>
          <p className="ml-10 mt-4">
            An API (Application Programming Interface) is a contract that allow
            developers to interact with an application through a set of
            interfaces. In this case, the application is a database of thousands
            of Plants vs Zombies-related objects, and the interfaces are URL
            links.<br></br>
          </p>
          <p className="ml-10 mt-1">
            A RESTful API is an API that conforms to a set of loose conventions
            based on HTTP verbs, errors, and hyperlinks.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">
            Aren't there any <abbr title="Plants vs Zombies API">PVZ API</abbr>{" "}
            already?
          </h3>
          <p className="ml-10 mt-3">
            As far as we know there is no other API for Plants VS Zombies-2
            though there are some websites exist. We aim to provide a single
            source of data that any number of other websites can consume and
            use.
          </p>
          <p className="ml-10 mt-1">
            We update often which prevents bugs and addition of new data about
            plants,zombies and areas after each update
          </p>
          <p className="ml-10 mt-1">
            Often, and especially when new Plants vs Zombies-2 updates are
            released, some <abbr title="Plants Vs Zombies-2">PVZ </abbr>{" "}
            websites take weeks to update as people have to enter the same
            information in all those different places. This solves that problem.
            If all those sites consumed their data from here, they would have
            the exact same information that is updated at exactly the same time,
            with no errors between each website. The overall benefit is a better
            collaboration and consistency across all the different{" "}
            <abbr title="Plants Vs Zombies-2">PVZ </abbr> websites and
            applications. It's good for all!
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mt-14 ml-7">
            How much information is stored here?
          </h3>
          <p className="ml-10 mt-3">A lot</p>
          <p className="ml-10 mt-3">
            We currently have hundreds of individual items in our database,
            including:<br></br>
            <br></br>
            <h1 className="font-medium text-lg">Plants Data:</h1>
            <ul className="ml-7 list-disc">
              <li>Name</li>
              <li>Sun Cost</li>
              <li>Recharge</li>
              <li>Damage</li>
              <li>Range</li>
              <li>Family</li>
              <li>Description</li>
              <li>Image</li>
            </ul>
            <h1 className="font-medium text-lg mt-4">Zombies Data:</h1>
            <ul className="ml-7 list-disc">
              <li>Name</li>
              <li>Toughness</li>
              <li>Speed</li>
              <li>Stamina</li>
              <li>Description</li>
              <li>Image</li>
            </ul>
            <h1 className="font-medium text-lg mt-4">Areas Data:</h1>
            <ul className="ml-7 list-disc">
              <li>Name</li>
              <li>Levels</li>
              <li>Difficulty</li>
              <li>Image</li>
            </ul>
            <p className="mt-3">
              And that's just scratching the surface! To see all the different
              types of data we have, check out the docs.
            </p>
          </p>
        </div>
        <div className="mt-14   ml-7">
          <h1 className="font-semibold text-xl">The API is missing stuff!</h1>
          <p className="ml-3">
            We know! Feel free to contribute to open issues on{" "}
            <a
              href="https://github.com/code-cracked/plants-vs-zombies-api/issues/new"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="ml-3">
            Suggestions and contributions are welcome for sure. contact and chat
            with the developers in
            <a
              href="https://github.com/code-cracked/plants-vs-zombies-api"
              target={"_blank"}
              rel="noreferrer"
            >
              GITHUB
            </a>
          </p>
        </div>
        <div className="mt-14 ml-7">
          <h1 className="font-semibold text-xl">So who built this?</h1>
          <p className="ml-3">
            <abbr title="Plants vs Zombies API">PVZ API</abbr> was created
            together by
            <a
              href="https://github.com/daniel-jebarson"
              target={"_blank"}
              rel="noreferrer"
            >
              Daniel Jebarson
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/jessej-samuel"
              target={"_blank"}
              rel="noreferrer"
            >
              Jessej Samuel
            </a>{" "}
            as a weekend project but it quickly became more than a weekend's
            worth of work. In January of 2022 we made a release on{" "}
            <a
              href="https://github.com/code-cracked/plants-vs-zombies-api/releases/tag/1.0.0"
              target={"_blank"}
              rel="noreferrer"
            >
              V1
            </a>
            . Though majority of the frontend development was done by Jessej
            Samuel and the backend was done by Daniel Jebarson, both of us
            contributed to full stack development. We also thank{" "}
            <a
              href="https://github.com/ShrihariMohan"
              target={"_blank"}
              rel="noreferrer"
            >
              ShrihariMohan
            </a>{" "}
            for helping us in arrow keys up and down events to navigate the
            searched result .
          </p>
          <p className="ml-3 mt-3">
            We also have a{" "}
            <a
              href="https://github.com/code-cracked"
              target={"_blank"}
              rel="noreferrer"
            >
              GitHub organisation
            </a>{" "}
            for contributors that you are welcome to join! . To join the
            organisation you can send a message to{" "}
            <span className="py-1 px-2 rounded-full bg-gray-200 dark:bg-neutral-800">
              <span className="text-orange-400">Dani_Cyber</span>
              <span className="text-red-500 ">#3019</span>
            </span>{" "}
            or{" "}
            <span className="py-1 px-2 rounded-full bg-gray-200 dark:bg-neutral-800">
              <span className="text-orange-400">CodeRxJesseJ</span>
              <span className="text-red-500 ">#8889</span>
            </span>{" "}
            on{" "}
            <a href="https://discord.com/" target={"_blank"} rel="noreferrer">
              discord
            </a>
          </p>
        </div>
        <div className="mt-14 ml-7">
          <h1 className="font-semibold text-xl">
            Where did you get all of this data?
          </h1>
          <p className="ml-3 mt-3">
            We gathered the information on this site from various resources:
            <ul className="ml-9 list-disc mt-3">
              <li>
                We scraped data from{" "}
                <a
                  href="https://www.ea.com/games/plants-vs-zombies/plants-vs-zombies-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Plants vs Zombies-2 official{" "}
                </a>{" "}
                and{" "}
                <a
                  href="https://plantsvszombies.fandom.com/wiki/Main_Page"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Plants vs Zombies-2 fandom
                </a>{" "}
                website which are considered to be trustful. Keep in mind that
                this data might be subject to changes and to corrections.
              </li>
            </ul>
          </p>
        </div>
        <div className="mt-14 ml-7">
          <h1 className="font-semibold text-xl">
            What's the technology stack?
          </h1>
          <p className="ml-3 mt-3">
            Up until January, the API and website were built together in a
            single{" "}
            <a
              href="https://www.javascript.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              JavaScript
            </a>{" "}
            project using the{" "}
            <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
              Next JS
            </a>{" "}
            framework and made itself a database that sends data as its own use
            in rendering image. Next REST Framework was used to expose the data
            through a RESTful API.
          </p>
          <p className="ml-3 mt-3">
            {" "}
            The entire stack was deployed at{" "}
            <a href="https://vercel.com/" target={"_blank"} rel="noreferrer">
              Vercel
            </a>{" "}
            for free and the code lives in its own GITHUIB repository{" "}
            <a
              href="https://github.com/code-cracked/plants-vs-zombies-api"
              target={"_blank"}
              rel="noreferrer"
            >
              code-cracked/plants-vs-zombies-api
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};
export default About;

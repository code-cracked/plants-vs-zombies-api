import { GitHub } from "@material-ui/icons";
import type { NextPage } from "next";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Head from "next/head";

toast.configure();

const Docs: NextPage = () => {
  const notify = () => {
    toast.success("Copied!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2500,
      theme: "colored",
    });
  };
  return (
    <>
      <Head>
        <title>Docs</title>
        <meta property="description" content="Documentation for PvZ2 API" />
      </Head>
      <div className="sticky top-0 h-14 bg-white dark:bg-black z-20 flex flex-row justify-between items-center px-4">
        <header className="basis-full h-full items-center flex">
          Documentation
        </header>
        <nav className="px-4 bg-black bg-opacity-80 flex flex-row justify-end h-full items-center">
          <Link href={"/"}>
            <a className="h-full hover:bg-slate-900 flex items-center px-8 hover:no-underline">
              Home
            </a>
          </Link>
        </nav>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col bg-gray-100 dark:bg-neutral-900 md:min-w-fit md:w-1/4 w-full px-4 py-6">
          <ul className="sticky top-14 w-fit z-10">
            <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
              <a className="w-full" href="#information">
                Information
              </a>
            </li>
            <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
              <a className="w-full" href="#fair_use_policy">
                Fair Use Policy
              </a>
            </li>
            <li>
              <a href="#plants" className="hover:font-[600]">
                Endpoints
              </a>
              <ul className="pl-4">
                <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
                  <a className="w-full" href="#plants">
                    Plants
                  </a>
                </li>
                <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
                  <a className="w-full" href="#plant_info">
                    Plant Data
                  </a>
                </li>
                <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
                  <a className="w-full" href="#areas">
                    Areas
                  </a>
                </li>
                <li className="hover:border-l hover:font-[600] border-blue-600 hover:pl-2">
                  <a className="w-full" href="#area_info">
                    Area Data
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="md:w-3/4 px-4 w-full py-6 my-4">
          <div className="my py-4 border-b" id="information">
            <h1 className="font-semibold text-2xl my-4">Information</h1>
            <p>
              This is a consumption-only API only the HTTP GET method is
              available on resources.
            </p>
            <p className="my-2">
              No authentication is required to access this API, and all
              resources are fully open and available. Since the move to static
              hosting in
              <span className="italic"> January 2022</span>, rate limiting has
              been removed entirely, but we still encourage you to limit the
              frequency of requests to limit our hosting costs.
            </p>
          </div>
          <div className="my py-4 border-b" id="fair_use_policy">
            <h1 className="font-semibold text-2xl my-4">Fair Use Policy</h1>
            <p>
              <span className="font-bold">PvZ API</span> is free and open to
              use. It is also very popular. Because of this, we ask every
              developer to abide by our fair use policy. People not complying
              with the fair use policy will have their IP address permanently
              banned.
            </p>
            <p>
              <span className="font-bold">PvZ API</span> is primarily an
              educational tool, and we will not tolerate denial of service
              attacks divventing people from learning.
            </p>
            <h1 className="my-2">Rules:</h1>
            <ul className="px-4">
              <li className="list-disc list-inside ">
                Locally cache resources whenever you request them.
              </li>
              <li className="list-disc list-inside ">
                Be nice and friendly to your fellow PvZ API developers.
              </li>
            </ul>
          </div>
          <div className="my py-4 border-b" id="plants">
            <h1 className="font-semibold text-2xl my-4">
              Plants{" "}
              <span className="text-gray-700 dark:text-gray-400 font-light">
                (endpoint)
              </span>
            </h1>
            <p>
              Inorder to get the plants-names with the help of PVZ API use the
              below http-address
            </p>
            <div className="flex border flex-row max-w-lg my-4 rounded">
              <div className="p-1 w-full">
                <p className="dark:opacity-80">
                  https://pvz2-website.vercel.app/api/plants
                </p>
              </div>
              <div className="bg-gray-200">
                <CopyToClipboard
                  text="https://pvz2-website.vercel.app/api/plants"
                  onCopy={(e) => {
                    console.log("Copied!");
                    notify();
                  }}
                >
                  <button className="hover:scale-105  h-full p-1">📋</button>
                </CopyToClipboard>
              </div>
            </div>
            The above link returns a list of all plant's name in Plants vs
            Zombies
          </div>
          <div className="my py-4 border-b" id="plant_info">
            <h1 className="font-semibold text-2xl my-4">
              Plant Information{" "}
              <span className="text-gray-700 dark:text-gray-400 font-light">
                (endpoint)
              </span>
            </h1>
            <p>
              Inorder to get the specific plant-information with the help of PVZ
              API use the below http-address
            </p>
            <div className="flex border flex-row max-w-lg my-4 rounded">
              <div className="p-1 w-full">
                <p className="dark:opacity-80">
                  https://pvz2-website.vercel.app/api/plants/[
                  <span className="text-orange-500">plant_name</span>]
                </p>
              </div>
              <div className="bg-gray-200">
                <CopyToClipboard
                  text="https://pvz2-website.vercel.app/api/plants/[plant_name]"
                  onCopy={(e) => {
                    console.log("Copied!");
                    notify();
                  }}
                >
                  <button className="hover:scale-105  h-full p-1">📋</button>
                </CopyToClipboard>
              </div>
            </div>
            Replace{" "}
            <span className="rounded p-1 opacity-90 font-mono">plant_name</span>{" "}
            with{" "}
            <span className="rounded p-1 opacity-90 font-mono">
              Plant to be searched
            </span>{" "}
            . Then the above link returns a json file of information about the
            specific p
            <div>
              Example:{" "}
              <a href="https://pvz2-website.vercel.app/api/plants/Aloe">
                https://pvz2-website.vercel.app/api/plants/Aloe
              </a>
            </div>
          </div>
          <div className="my py-4 border-b" id="areas">
            <h1 className="font-semibold text-2xl my-4">
              Areas{" "}
              <span className="text-gray-700 dark:text-gray-400 font-light">
                (endpoint)
              </span>
            </h1>
            <p>
              Inorder to get the areas-names with the help of PVZ API use the
              below http-address
            </p>
            <div className="flex border flex-row max-w-lg my-4 rounded">
              <div className="p-1 w-full">
                <p className="dark:opacity-80">
                  https://pvz2-website.vercel.app/api/areas
                </p>
              </div>
              <div className="bg-gray-200">
                <CopyToClipboard
                  text="https://pvz2-website.vercel.app/api/areas"
                  onCopy={(e) => {
                    console.log("Copied!");
                    notify();
                  }}
                >
                  <button className="hover:scale-105  h-full p-1">📋</button>
                </CopyToClipboard>
              </div>
            </div>
            The above link returns a list of all area's name in Plants vs
            Zombies
          </div>
          <div className="my py-4 border-b" id="area_info">
            <h1 className="font-semibold text-2xl my-4">
              Area Information{" "}
              <span className="text-gray-700 dark:text-gray-400 font-light">
                (endpoint)
              </span>
            </h1>
            <p>
              Inorder to get the specific area-information with the help of PVZ
              API use the below http-address
            </p>
            <div className="flex border flex-row max-w-lg my-4 rounded">
              <div className="p-1 w-full">
                <p className="dark:opacity-80">
                  https://pvz2-website.vercel.app/api/areas/[
                  <span className="text-orange-500">area_name</span>]
                </p>
              </div>
              <div className="bg-gray-200">
                <CopyToClipboard
                  text="https://pvz2-website.vercel.app/api/areas/[area_name]"
                  onCopy={(e) => {
                    console.log("Copied!");
                    notify();
                  }}
                >
                  <button className="hover:scale-105  h-full p-1">📋</button>
                </CopyToClipboard>
              </div>
            </div>
            Replace{" "}
            <span className="rounded p-1 opacity-90 font-mono">area_name</span>{" "}
            with{" "}
            <span className="rounded p-1 opacity-90 font-mono">
              Area to be searched
            </span>{" "}
            . Then the above link returns a json file of information about the
            specific
            <div>
              Example:{" "}
              <a href="https://pvz2-website.vercel.app/api/areas/Player's%20House">
                https://pvz2-website.vercel.app/api/areas/Player's%20House
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-2xl my-4">Found bugs?</h1>
            <a
              href="https://github.com/code-cracked/pvz2_website/issues/new"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="bg-gray-300 dark:bg-[rgb(20,20,20)] rounded p-1 border border-neutral-500 text-black dark:text-white">
                Create an issue on GitHub!
                <GitHub className="mx-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Docs;

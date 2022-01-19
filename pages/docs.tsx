import type { NextPage } from "next";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Docs: NextPage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col bg-gray-100 dark:bg-neutral-900  md:w-1/4 w-full px-4 py-6">
        <ul>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
          <li className="hover:border-l border-blue-600 hover:pl-2">
            <a className="w-fit">Lorem ipsum, dolor</a>
          </li>
        </ul>
      </div>
      <div className="md:w-3/4 px-4 w-full py-6 my-4">
        <div className="l" id="information ">
          <h1 className="font-semibold text-2xl my-4">Information</h1>
          <p>
            This is a consumption-only API only the HTTP GET method is available
            on resources.
          </p>
          <p className="my-2">
            No authentication is required to access this API, and all resources
            are fully open and available. Since the move to static hosting in
            <span className="italic"> January 2022</span>, rate limiting has
            been removed entirely, but we still encourage you to limit the
            frequency of requests to limit our hosting costs.
          </p>
        </div>
        <div className="fair_use_policy">
          <h1 className="font-semibold text-2xl my-4">Fair Use Policy</h1>
          <p>
            <span className="font-bold">PvZ API</span> is free and open to use.
            It is also very popular. Because of this, we ask every developer to
            abide by our fair use policy. People not complying with the fair use
            policy will have their IP address permanently banned.
          </p>
          <p>
            <span className="font-bold">PvZ API</span> is primarily an
            educational tool, and we will not tolerate denial of service attacks
            divventing people from learning.
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
        <div id="plants">
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
          <div className="flex border flex-row max-w-lg my-4">
            <div className="p-1 w-full">
              <p>https://pvz2-website.vercel.app/api/plants</p>
            </div>
            <div className="bg-gray-200">
              <CopyToClipboard text="https://pvz2-website.vercel.app/api/plants">
                <button className="hover:scale-105  h-full p-1">📋</button>
              </CopyToClipboard>
            </div>
          </div>
          The above link returns a list of all plant's name in Plants vs Zombies
        </div>
        <div id="plant_info">
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
          <div className="flex border flex-row max-w-lg my-4">
            <div className="p-1 w-full">
              <p>https://pvz2-website.vercel.app/api/plants/[plant_name]</p>
            </div>
            <div className="bg-gray-200">
              <CopyToClipboard text="https://pvz2-website.vercel.app/api/plants/[plant_name]">
                <button className="hover:scale-105  h-full p-1">📋</button>
              </CopyToClipboard>
            </div>
          </div>
          Replace{" "}
          <b>
            <i>plant_name</i>
          </b>{" "}
          with{" "}
          <b>
            <i>Plant to be searched</i>
          </b>{" "}
          . Then the above link returns a json file of information about the
          specific p
          <div>
            Example:{" "}
            <a href="https://pvz2-website.vercel.app/api/plants/Aloe">
              https://pvz2-website.vercel.app/api/plants/Aloe
            </a>
          </div>
        </div>
        <div id="areas">
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
          <div className="flex border flex-row max-w-lg my-4">
            <div className="p-1 w-full">
              <p>https://pvz2-website.vercel.app/api/areas</p>
            </div>
            <div className="bg-gray-200">
              <CopyToClipboard text="https://pvz2-website.vercel.app/api/areas">
                <button className="hover:scale-105  h-full p-1">📋</button>
              </CopyToClipboard>
            </div>
          </div>
          The above link returns a list of all area's name in Plants vs Zombies
        </div>
        <div id="area_info">
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
          <div className="flex border flex-row max-w-lg my-4">
            <div className="p-1 w-full">
              <p>https://pvz2-website.vercel.app/api/areas/[area_name]</p>
            </div>
            <div className="bg-gray-200">
              <CopyToClipboard text="https://pvz2-website.vercel.app/api/areas/[area_name]">
                <button className="hover:scale-105  h-full p-1">📋</button>
              </CopyToClipboard>
            </div>
          </div>
          Replace{" "}
          <b>
            <i>plant_name</i>
          </b>{" "}
          with{" "}
          <b>
            <i>Plant to be searched</i>
          </b>{" "}
          . Then the above link returns a json file of information about the
          specific
          <div>
            Example: https://pvz2-website.vercel.app/api/areas/Player's%20House
          </div>
        </div>
      </div>
    </div>
  );
};
export default Docs;

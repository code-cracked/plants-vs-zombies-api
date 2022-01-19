import type { NextPage } from "next";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Api: NextPage = () => {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-black ml-2">
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
            preventing people from learning.
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
            PLANTS-NAMES{" "}
            <span className="text-gray-700 dark:text-gray-400 font-light">
              (endpoint)
            </span>
          </h1>
          <p>
            Inorder to get the plants-names with the help of PVZ API use the
            below http-address
          </p>
          <br></br>
          <div className="flex box-border">
            <h5>
              https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/plants
            </h5>
            <CopyToClipboard text="https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/plants">
              <button className="shadow-md   hover:shadow-md hover:animate-spin  h-6 w-6">
                📋
              </button>
            </CopyToClipboard>
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
          <br></br>
          <div className="flex box-border">
            <h5>
              https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/plants/[plant_name]
            </h5>
            <CopyToClipboard text="https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/plants/[plant_name]">
              <button className="shadow-md   hover:shadow-md hover:animate-spin  h-6 w-6">
                📋
              </button>
            </CopyToClipboard>
          </div>
          <br></br>
          Replace{" "}
          <b>
            <i>plant_name</i>
          </b>{" "}
          with{" "}
          <b>
            <i>Plant to be searched</i>
          </b>{" "}
          . Then the above link returns a json file of information about the
          specific plant .<br></br>
          <pre>
            Example:
            https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/plants/Aloe
          </pre>
        </div>
        <div id="areas">
          <h1 className="font-semibold text-2xl my-4">
            AREAS-NAMES{" "}
            <span className="text-gray-700 dark:text-gray-400 font-light">
              (endpoint)
            </span>
          </h1>
          <p>
            Inorder to get the areas-names with the help of PVZ API use the
            below http-address
          </p>
          <br></br>
          <div className="flex box-border">
            <h5>
              https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/areas
            </h5>
            <CopyToClipboard text="https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/areas">
              <button className="shadow-md   hover:shadow-md hover:animate-spin  h-6 w-6">
                📋
              </button>
            </CopyToClipboard>
          </div>
          <br></br>
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
          <br></br>
          <div className="flex box-border">
            <h5>
              https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/areas/[area_name]
            </h5>
            <CopyToClipboard text="https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/areas/[area_name]">
              <button className="shadow-md   hover:shadow-md hover:animate-spin  h-6 w-6">
                📋
              </button>
            </CopyToClipboard>
          </div>
          <br></br>
          Replace{" "}
          <b>
            <i>plant_name</i>
          </b>{" "}
          with{" "}
          <b>
            <i>Plant to be searched</i>
          </b>{" "}
          . Then the above link returns a json file of information about the
          specific area .<br></br>
          <pre>
            Example:
            https://pvz2-website-g0dr91qps-code-cracked.vercel.app/api/areas/Player's%20House
          </pre>
        </div>
      </div>
    </>
  );
};
export default Api;

import type { NextPage } from "next";
const Api: NextPage = () => {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-black">
        <div className="l" id="information">
          <h1 className="font-bold text-2xl my-4">Information</h1>
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
          <h1 className="font-bold text-2xl my-4">Fair Use Policy</h1>
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
        <div></div>
      </div>
    </>
  );
};
export default Api;

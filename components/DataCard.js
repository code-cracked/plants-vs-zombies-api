import { Component } from "react";
import Image from "next/image";

class DataCard extends Component {
  state = { data: null, imageLink: "/assets/areas/Pirate Seas.png" };

  componentDidMount() {
    this.setState({ data: this.props.data });

  }

  render() {
    return (
      <div className="flex flex-col  w-5/6 max-w-xl hover:scale-105 transition-all mt-4">
        <div className="flex flex-col w-full rounded-lg  sm:flex-row h-fit  justify-center">
          <div className="flex flex-col justify-center p-4 items-center bg-slate-300 dark:bg-neutral-900">
            <Image
              src={this.props.data[this.props.data.length - 1][1] || null}
              width={100}
              height={100}
              layout='intrinsic'
              alt={
                this.props.data[this.props.data.length - 1][1].split("/")[-1] ||
                null
              }
            />
          </div>
          <div className=" bg-slate-100 dark:bg-neutral-700 min-h-fit  rounded-b-lg w-full sm:rounded-none sm:rounded-r-lg  flex flex-1 py-1">
            <div className="items-start flex flex-wrap h-fit ml-2 mb-3 mt-3">
              {this.props.data.map((pair) => {
                if (pair[0].toLowerCase().startsWith("desc")) {
                  return (
                    <div className="w-fit flex m-1 h-fit rounded-md align-middle dark:text-black" key={pair[0]}>
                      <div className="rounded-l-md bg-green-500 flex items-center  px-2 py-2 text-xs">
                        {pair[0]}
                      </div>
                      <div className="rounded-r-md bg-green-400 py-2 px-2 text-xs">
                        {pair[1]}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    className="w-fit flex m-1 h-fit  dark:text-black"
                    key={pair[0]}
                  >
                    <div className="rounded-l-full flex items-center bg-green-500 px-2 py-2 text-xs">
                      {pair[0]}
                    </div>
                    <div className="rounded-r-full bg-green-400 py-2 px-2 text-xs">
                      {pair[1]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {this.props.data.forEach((pair) => {
          if (pair[0].toLowerCase() === "description") {
            return (
              <div className="rounded-lg bg-neutral-900 py-1 px-2">
                {pair[1]}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default DataCard;

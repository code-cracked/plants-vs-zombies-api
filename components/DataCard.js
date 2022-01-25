import { Component } from "react";
import Image from "next/image";

class DataCard extends Component {
  state = { data: null, imageLink: "/assets/areas/Pirate Seas.png" };

  componentDidMount() {
    console.log("Setting state!");
    this.setState({ data: this.props.data });
    console.log(this.props.data);
  }
  // componentDidUpdate() {
  //   //Get image link
  //   this.props.data.forEach((pair) => {
  //     if (pair[0].toLowerCase() === "image") {
  //       this.setState({ imageLink: pair[1] });
  //     }
  //   });
  // }
  render() {
    return (
      <div className="flex flex-col p-2 w-3/4 max-w-2xl">
        <div className="flex h-fit rounded-md  bg-green-500 dark:bg-neutral-900 justify-center">
          <div className="bg-transparent w-36 mx-1 flex flex-col justify-center p-4 items-center">
            <Image
              src={this.props.data[this.props.data.length - 1][1] || null}
              width={200}
              height={200}
              layout="intrinsic"
              className="w-36"
              alt={
                this.props.data[this.props.data.length - 1][1].split("/")[-1] ||
                null
              }
            />
          </div>
          <div className="bg-green-400 dark:bg-neutral-700 min-h-fit  w-full rounded-r-md flex flex-1 py-1">
            <div className="items-start flex flex-wrap h-fit">
              {this.props.data.map((pair) => {
                if (pair[0].toLowerCase().startsWith("desc")) {
                  return (
                    <div className="w-fit flex m-1 h-fit rounded-md dark:text-black">
                      <div className="rounded-l-md bg-neutral-400 dark:bg-green-500 px-2 py-1 text-xs">
                        {pair[0]}
                      </div>
                      <div className="rounded-r-md bg-neutral-300 dark:bg-green-400 py-1 px-2 text-xs">
                        {pair[1]}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    className="w-fit flex m-1 h-fit rounded-full dark:text-black"
                    key={pair[0]}
                  >
                    <div className="rounded-l-full bg-neutral-400 dark:bg-green-500 px-2 py-1 text-xs">
                      {pair[0]}
                    </div>
                    <div className="rounded-r-full bg-neutral-300 dark:bg-green-400 py-1 px-2 text-xs">
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

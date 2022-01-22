import React from "react";

import plants from "../data/plants_name.json";
import zombies from "../data/zombies_name.json";
import areas from "../data/areas_name.json";

const autoCompleteTags = [...plants.names, ...zombies.names, ...areas.names];
let hits: string[] = [];

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event: { preventDefault: () => void }) => {
    // event.preventDefault();
  };
  render = () => {
    return (
      <>
        <form
          onSubmit={(e) => this.onFormSubmit(e)}
          className="bg-transparent h-fit sm:max-w-lg w-full p-2 px-5 "
          action={`http://localhost:3000/api/plants/${this.state.term}`}
        >
          <input
            title="Search"
            type="search"
            className="bg-inherit border border-slate-400 dark:border-slate-700 w-full text-sm p-2 hover:shadow-md shadow-black rounded-full h-11 px-5 outline-none focus-visible:dark:bg-slate-700 hover:dark:bg-slate-700 transition sm:max-w-lg"
            autoComplete="True"
            value={this.state.term}
            placeholder="🔍 Search Here"
            onChange={(e) => {
              let filled = false;
              hits = [];
              autoCompleteTags.forEach((tag) => {
                if (
                  tag.toLowerCase().startsWith(e.target.value.toLowerCase()) &&
                  !filled
                ) {
                  hits.push(tag);
                  if (hits.length === 3) {
                    filled = true;
                  }
                }
              });
              this.setState({ term: e.target.value });
            }}
          />
        </form>
        <div className="w-full h-fit">
          {hits.map((val, index) => {
            console.log(hits);
            return <div key={index}>{val}</div>;
          })}
        </div>
      </>
    );
  };
}

export default SearchBar;

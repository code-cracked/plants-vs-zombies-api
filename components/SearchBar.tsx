import React from "react";

import plants from "../data/plants_name.json";
import zombies from "../data/zombies_name.json";
import areas from "../data/areas_name.json";


const autoCompleteTags = [...plants.names, ...zombies.names, ...areas.names];
let hits: string[] = [];
import Router from "next/router";

class SearchBar extends React.Component {

  state = { term: "", last_hit: "" };

  sendProps = () => {
    let return_data = this.link_fetch(this.state.term);
    var need_url: string = return_data[0];
    var thing_type: string = return_data[1];
    var search_term: string = this.state.last_hit;
    Router.push({
      pathname: "/search",
      query: { search_term, need_url, thing_type },
    });
  };

  isCharacterALetter(char: string) {
    return /[a-zA-Z]/.test(char[0]);
  }

  onFormSubmit = (event: { preventDefault: () => void }) => {
    if (this.state.term == "") {
      event.preventDefault();
      return;
    }

    if (this.state.term.startsWith("q") || this.state.term.startsWith("x")) {
      event.preventDefault();
      return;
    } else {
      if (!this.isCharacterALetter(this.state.term[0])) {
        event.preventDefault();
        return;
      }
    }
    this.sendProps();
    event.preventDefault();
  };

  link_fetch(data: string) {
    var type = "";
    if (hits.length === 0) {
      data = this.state.last_hit;
    } else {
      data = hits[0];
    }
    const base_url = `./api/`;
    var re_link: string = "";

    plants.names.forEach((element) => {
      if (data == element) {
        re_link = `${base_url}plants/${data}`;
        type = "plants";
      }
    });
    zombies.names.forEach((element) => {
      if (data == element) {
        re_link = `${base_url}zombies/${data}`;
        type = "zombies";
      }
    });
    areas.names.forEach((element) => {
      if (data == element) {
        re_link = `${base_url}areas/${data}`;
        type = "areas";
      }
    });

    return [re_link, type];
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let filled = false;
    const term = e.target.value
    hits = [];
    autoCompleteTags.forEach((tag) => {
      if (
        tag.toLowerCase().startsWith(term.toLowerCase()) &&
        !filled
      ) {
        hits.push(tag);
        if (hits.length === 3) {
          filled = true;
        }
      }
    });
    if (hits.length != 0) {
      this.setState({ last_hit: hits[0] });
    }
    if (term.length === 0) {
      hits = [];
    }
    this.setState({ term });
  }

  handleOnClickOnSelectedItem = (e: React.MouseEvent<HTMLDivElement>, val: string) => {
    this.setState({ term: val, last_hit: val });
    this.onFormSubmit(e)
    hits = [];
  }


  render = () => {
    return (
      <>
        <form
          onSubmit={(e) => this.onFormSubmit(e)}
          className="bg-transparent h-fit sm:max-w-lg w-full p-2 px-5 "
        >
          <input
            title="Search"
            type="search"
            className={`bg-inherit border border-neutral-400 dark:border-neutral-800 w-full text-sm p-2 hover:shadow-md shadow-black  h-11 px-5 outline-none focus-visible:dark:bg-neutral-800 hover:dark:bg-neutral-800 transition sm:max-w-lg  ${hits.length > 0 ? "rounded-t-3xl rounded-b-none" : "rounded-full"
              }`}
            autoComplete="True"
            value={this.state.term}
            placeholder="🔍 Search Here"
            onChange={this.handleOnChange}
          />
          <div className=" border-neutral-400 dark:border-neutral-800 ">
            {hits.map((val, index) => {
              return (
                <div
                  className="cursor-pointer bg-inherit  w-full text-sm p-2  min-h-fit h-11 px-5 outline-none focus-visible:dark:bg-neutral-800 hover:dark:bg-neutral-800 transition sm:max-w-lg border-l border-r border-inherit last:border-b last:rounded-b-3xl hover:bg-neutral-200"
                  key={val}
                  onClick={(e) => this.handleOnClickOnSelectedItem(e, val)}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </form>
      </>
    );
  };
}

export default SearchBar;

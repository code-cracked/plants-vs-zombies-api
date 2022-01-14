import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  render = () => {
    return (
      <input
        title="Search"
        type="search"
        className="bg-inherit border border-slate-300 w-full text-sm p-2 hover:shadow-md shadow-black rounded-full h-11 px-5 outline-none focus-visible:dark:bg-slate-700 hover:dark:bg-slate-700 sm:max-w-lg"
        autoComplete="True"
        value={this.state.term}
        placeholder="🔍 Search Here"
        onChange={(e) => this.setState({ term: e.target.value })}
      />
    );
  };
}

export default SearchBar;

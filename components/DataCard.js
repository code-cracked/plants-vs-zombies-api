import { Component } from "react";
class DataCard extends Component {
  state = { data: null };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    return (
      <div className="grid grid-rows-2 min-h-fit max-h-96">
        <div className="bg-cyan-200 h-16 w-16"></div>
        <div className="bg-red-300 h-16 w-16"></div>
      </div>
    );
  }
}

export default DataCard;

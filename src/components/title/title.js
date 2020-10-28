import React from "react";
import "./title.css";

class Title extends React.Component {
  state = {
    title: "Write Your StopWatch Title",
    isInput: false,
  };

  editHandler() {
    this.setState({
      ...this.state,
      isInput: true,
    });
  }

  changeInput(event) {
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  }

  keypressHandler(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false,
      });
    }
  }

  blurHandler() {
    this.setState({
      ...this.state,
      isInput: false,
    });
  }

  render() {
    let output = null;

    if (this.state.isInput) {
      output = (
        <div className="Title d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            value={this.state.title}
            onChange={(event) => this.changeInput(event)}
            onKeyPress={(event) => this.keypressHandler(event)}
            onBlur={() => this.blurHandler()}
          />
        </div>
      );
    } else {
      output = (
        <div className="d-flex justify-content-center Title">
          <h1 className="display-5">{this.state.title}</h1>
          <span onClick={() => this.editHandler()} className="ml-5 edit-icon">
            <i className="fas fa-edit"></i>
          </span>
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default Title;

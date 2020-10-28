import React from "react";

class Controller extends React.Component {
  state = {
    start: true,
    pause: false,
    lap: false,
    reset: false,
  };

  startHandler() {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true,
    });

    this.props.start();
  }

  pauseHandler() {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: true,
    });

    this.props.pause();
  }

  lapHandler() {
    this.props.lap();
  }

  resetHandler() {
    this.setState({
      start: true,
      pause: false,
      lap: false,
      reset: false,
    });

    this.props.reset();
  }

  getController() {
    let output = null;

    if (this.state.start && !this.state.reset) {
      output = (
        <div>
          <button
            className="btn btn-success btn-lg px-5 mr-5"
            onClick={() => this.startHandler()}
          >
            Start
          </button>
        </div>
      );
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div>
          <button
            className="btn btn-primary btn-lg px-5 mr-5"
            onClick={() => this.pauseHandler()}
          >
            Pause
          </button>
          <button
            className="btn btn-warning btn-lg px-5 mr-5"
            onClick={() => this.lapHandler()}
          >
            Lap
          </button>
        </div>
      );
    } else if (this.state.start && this.state.reset) {
      output = (
        <div>
          <button
            className="btn btn-success btn-lg px-5 mr-5"
            onClick={() => this.startHandler()}
          >
            Start
          </button>
          <button
            className="btn btn-danger btn-lg px-5 mr-5"
            onClick={() => this.resetHandler()}
          >
            Reset
          </button>
        </div>
      );
    }

    return output;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.getController()}
      </div>
    );
  }
}

export default Controller;

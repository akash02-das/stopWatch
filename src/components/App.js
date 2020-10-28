import React from "react";
import "./App.css";

import Title from "./title/title";
import CountDown from "./countDown/countDown";
import Controller from "./controller/controller";
import Laps from "./laps/laps";

class App extends React.Component {
  state = {
    time: {
      min: 0,
      sec: 0,
      mil: 0,
    },
    laps: [],
  };

  getStart() {
    this.intervalId = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mil = this.state.time.mil;

      if (mil >= 100) {
        sec = sec + 1;
        mil = 0;
      }

      if (sec >= 60) {
        min = min + 1;
        sec = 0;
      }

      this.setState({
        time: {
          min,
          sec,
          mil: mil + 1,
        },
      });
    }, 10);
  }

  getPause() {
    clearInterval(this.intervalId);
  }

  getLap() {
    let time = {
      ...this.state.time,
    };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps],
    });
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mil: 0,
      },
      laps: [],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <Title />
              <CountDown time={this.state.time} />
              <Controller
                start={() => this.getStart()}
                pause={() => this.getPause()}
                lap={() => this.getLap()}
                reset={() => this.getReset()}
              />
              <Laps laps={this.state.laps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

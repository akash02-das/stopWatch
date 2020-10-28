import React from "react";

const Laps = (props) => {
  return (
    <div className="d-flex justify-content-center my-5">
      <ul className="list-group list-group-flush">
        {props.laps.map((lap, index) => {
          return (
            <li
              key={index}
              className="list-group-item"
              style={{ fontSize: "24px" }}
            >
              <span className="text-dark"> Minutes: </span>
              <span className="text-success">{lap.min}</span>
              <span className="text-dark"> Seconds: </span>
              <span className="text-primary">{lap.sec}</span>
              <span className="text-dark"> Mili: </span>
              <span className="text-danger">{lap.mil}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Laps;

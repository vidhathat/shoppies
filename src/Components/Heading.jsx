import React from "react";
import logo from "../assets/logo.png";

const Heading = (props) => {
  return (
    <div>
      <img src={logo} alt='Shoppies' />
      {/* <h1>{props.heading}</h1> */}
    </div>
  );
};

export default Heading;

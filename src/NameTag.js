// import the react library to write JSX
import React from "react";

const NameTag = (props) => (
  <div className="name-tag">
    <h3 className="title">HELLO</h3>
    <p className="subtitle">my name is</p>
    <h2 className="name">{props.name}</h2>
  </div>
);

/* export our functional component definition to be 
imported then rendered within another module */
export default NameTag;

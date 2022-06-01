import React from "react";

const Heading = ({ children, level, ...props }) =>
  React.createElement(`h${level}`, props, children);

export default Heading;

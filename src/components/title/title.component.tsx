import React from "react";

import "./title.styles.css";

const Title = ({ title }: { title: string }) => {
  return <div className="title">{title}</div>;
};

export default Title;

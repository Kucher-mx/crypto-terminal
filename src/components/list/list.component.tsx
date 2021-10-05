import React from "react";
import ListItem from "../listItem/listItem.component";

import "./list.styles.css";

type Props = {
  items: any[];
  type: string;
  color: {
    text: string;
  };
};

const List = ({ items, type, color }: Props) => {
  return (
    <div className="list">
      {items.map((item, idx) => (
        <ListItem data={item} type={type} color={color} idx={idx} />
      ))}
    </div>
  );
};

export default List;

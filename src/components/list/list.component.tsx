import React from "react";
import ListItem from "../listItem/listItem.component";

import "./list.styles.css";

type Props = {
  items: any[];
  type: string;
};

const List = ({ items, type }: Props) => {
  return (
    <div className="list">
      {items.map((item) => (
        <ListItem data={item} type={type} />
      ))}
    </div>
  );
};

export default List;

import React from "react";
import ListItem from "../listItem/listItem.component";

import "./list.styles.css";

type Props = {
  items: any[];
  type: string;
  color: {
    text: string;
  };
  sizeType?: string;
};

const List = ({ items, type, color, sizeType }: Props) => {
  return (
    <div className="list">
      {items.map((item, idx) => (
        <ListItem
          data={item}
          type={type}
          color={color}
          idx={idx}
          key={idx}
          sizeType={sizeType}
        />
      ))}
    </div>
  );
};

export default List;

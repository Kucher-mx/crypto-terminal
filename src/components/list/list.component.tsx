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
  sizeFilter?: null | number;
};

const List = ({ items, type, color, sizeType, sizeFilter }: Props) => {
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
          sizeFilter={sizeFilter}
        />
      ))}
    </div>
  );
};

export default List;

import React from "react";
import ListItemPart from "./listItemPart.component";

type Props = {
  data: any;
  idx: number;
  color: {
    text: string;
  };
};

const OBListItem = ({ data, idx, color }: Props) => {
  return (
    <div
      className="list-item-3"
      style={{
        background: idx % 2 !== 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <ListItemPart title={Number(data[0]).toFixed(2)} textColor={color.text} />
      <ListItemPart title={Number(data[1]).toFixed(3)} textColor={"#B6B9C0"} />
      <ListItemPart
        title={(data[0] * data[1])?.toFixed(2)}
        textColor={"#B6B9C0"}
      />
    </div>
  );
};

export default OBListItem;

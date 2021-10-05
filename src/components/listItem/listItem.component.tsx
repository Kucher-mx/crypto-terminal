import React from "react";
import ListItemPart from "./listItemPart.component";

import "./listItem.styles.css";

type Props = {
  data: any;
  type: string;
  color: {
    text: string;
  };
  idx: number;
};

const ListItem = ({ data, type, color, idx }: Props) => {
  let renderEl;
  if (type === "trades") {
    renderEl = null;
    // (
    //   <div className="list-item-4">
    //     <ListItemPart title={data.m ? "buy" : "sale"} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.p} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.q} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.T.toString()} textColor={"#c01c7c"} />
    //   </div>
    // );
  } else if (type === "coins") {
    renderEl = null;
    // (
    //   <div className="list-item-4-e">
    //     <ListItemPart title={data.symbol} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.priceChange} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.priceChangePercent} textColor={"#c01c7c"} />
    //     <ListItemPart title={data.lastPrice} textColor={"#c01c7c"} />
    //   </div>
    // );
  } else if (type === "orderbook") {
    renderEl = (
      <div
        className="list-item-3"
        style={{
          background:
            idx % 2 !== 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
      >
        <ListItemPart
          title={Number(data[0]).toFixed(4)}
          textColor={color.text}
        />
        <ListItemPart
          title={Number(data[1]).toFixed(3)}
          textColor={"#B6B9C0"}
        />
        <ListItemPart
          title={(data[0] * data[1])?.toFixed(5)}
          textColor={"#B6B9C0"}
        />
      </div>
    );
  }
  return <>{renderEl}</>;
};

export default ListItem;

import React from "react";
import ListItemPart from "./listItemPart.component";

import "./listItem.styles.css";

type Props = {
  data: any;
  type: string;
};

const ListItem = ({ data, type }: Props) => {
  let renderEl;
  if (type === "trades") {
    renderEl = (
      <div className="list-item-4">
        <ListItemPart title={data.m ? "buy" : "sale"} textColor={"#c01c7c"} />
        <ListItemPart title={data.p} textColor={"#c01c7c"} />
        <ListItemPart title={data.q} textColor={"#c01c7c"} />
        <ListItemPart title={data.T.toString()} textColor={"#c01c7c"} />
      </div>
    );
  } else if (type === "coins") {
    renderEl = (
      <div className="list-item-4-e">
        <ListItemPart title={data.symbol} textColor={"#c01c7c"} />
        <ListItemPart title={data.priceChange} textColor={"#c01c7c"} />
        <ListItemPart title={data.priceChangePercent} textColor={"#c01c7c"} />
        <ListItemPart title={data.lastPrice} textColor={"#c01c7c"} />
      </div>
    );
  } else if (type === "orderbook") {
    renderEl = (
      <div className="list-item-3">
        <ListItemPart title={data[0]} textColor={"#c01c7c"} />
        <ListItemPart title={data[1]} textColor={"#c01c7c"} />
        <ListItemPart
          title={(data[0] * data[1]).toString()}
          textColor={"#c01c7c"}
        />
      </div>
    );
  }
  return <>{renderEl}</>;
};

export default ListItem;

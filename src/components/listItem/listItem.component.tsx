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
  const options: {
    month: "short";
    day: "numeric";
    hour: "numeric";
    minute: "numeric";
    second: "numeric";
    hour12: false;
  } = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formatDate = new Intl.DateTimeFormat("en-US", options);

  let renderEl;
  if (type === "trades") {
    const textColor = data.isBuyerMaker ? "#5ABD2B" : "#EF5350";

    renderEl = (
      <div
        className="list-item-4"
        style={{
          background:
            idx % 2 !== 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
      >
        {/* <ListItemPart title={data.m ? "buy" : "sale"} textColor={textColor} />
        <ListItemPart title={Number(data.p).toFixed(3)} textColor={textColor} />
        <ListItemPart title={Number(data.q).toFixed(6)} textColor={textColor} />
        <ListItemPart title={formatDate.format(data.T)} textColor={textColor} /> */}
        <ListItemPart
          title={data.isBuyerMaker ? "buy" : "sale"}
          textColor={textColor}
        />
        <ListItemPart
          title={Number(data.price).toFixed(3)}
          textColor={textColor}
        />
        <ListItemPart
          title={Number(data.qty).toFixed(6)}
          textColor={textColor}
        />
        <ListItemPart
          title={formatDate.format(data.time)}
          textColor={textColor}
        />
      </div>
    );
  } else if (type === "coins") {
    const textColor = data.priceChange > 0 ? "#5ABD2B" : "#EF5350";
    renderEl = (
      <div className="list-item-4-e">
        <ListItemPart title={data.symbol} textColor={"#D3D3D3"} />
        <ListItemPart title={data.priceChange} textColor={textColor} />
        <ListItemPart title={data.priceChangePercent} textColor={"#D3D3D3"} />
        <ListItemPart title={data.lastPrice} textColor={textColor} />
      </div>
    );
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

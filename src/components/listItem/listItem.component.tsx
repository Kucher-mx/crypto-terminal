import React from "react";

import "./listItem.styles.css";
import CoinsListItem from "./coins-listItem.component";
import OBListItem from "./orderbook-listItem.component";
import TradesListItem from "./trades-listItem.component";

type Props = {
  data: any;
  type: string;
  color: {
    text: string;
  };
  idx: number;
  sizeType?: string;
  sizeFilter?: number | null;
};

const ListItem = ({ data, type, color, idx, sizeType, sizeFilter }: Props) => {
  if (type === "trades") {
    return (
      <TradesListItem
        data={data}
        idx={idx}
        color={color}
        sizeType={sizeType}
        sizeFilter={sizeFilter}
      />
    );
  } else if (type === "coins") {
    return <CoinsListItem data={data} />;
  } else {
    return <OBListItem data={data} idx={idx} color={color} />;
  }
};

export default ListItem;

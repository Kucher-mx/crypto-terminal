import React from "react";
import { DataFormatOptions } from "../../consts/consts";
import ListItemPart from "./listItemPart.component";

type Props = {
  data: any;
  idx: number;
  color: {
    text: string;
  };
  sizeType?: string;
};

const TradesListItem = ({ data, idx, sizeType }: Props) => {
  const textColor = data.m ? "#5ABD2B" : "#EF5350";
  const formatDate = new Intl.DateTimeFormat("en-US", DataFormatOptions);
  const size =
    sizeType === "COIN"
      ? Number(data.q).toFixed(6)
      : Number(data.q * data.p).toFixed(2);

  return (
    <div
      className="list-item-4"
      style={{
        background: idx % 2 !== 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <ListItemPart title={data.m ? "buy" : "sale"} textColor={textColor} />
      <ListItemPart title={Number(data.p).toFixed(2)} textColor={textColor} />
      <ListItemPart title={size} textColor={textColor} />
      <ListItemPart title={formatDate.format(data.T)} textColor={textColor} />
    </div>
  );
};

export default TradesListItem;

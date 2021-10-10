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

  return (
    <div
      className="list-item-4"
      style={{
        background: idx % 2 !== 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
      }}
    >
      <ListItemPart title={data.m ? "buy" : "sale"} textColor={textColor} />
      <ListItemPart title={Number(data.p).toFixed(3)} textColor={textColor} />
      <ListItemPart
        title={
          sizeType === "COIN"
            ? Number(data.q).toFixed(6)
            : Number(data.q).toFixed(6) + "qt"
        }
        textColor={textColor}
      />
      <ListItemPart title={formatDate.format(data.T)} textColor={textColor} />
      {/* <ListItemPart
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
        /> */}
    </div>
  );
};

export default TradesListItem;

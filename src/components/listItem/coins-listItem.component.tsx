import React from "react";
import ListItemPart from "./listItemPart.component";

type Props = {
  data: any;
};

const CoinsListItem = ({ data }: Props) => {
  const textColor = data.p > 0 ? "#5ABD2B" : "#EF5350";
  return (
    <div className="list-item-4-e">
      <ListItemPart title={data.s} textColor={"#D3D3D3"} />
      <ListItemPart title={data.P} textColor={textColor} />
      <ListItemPart title={data.q} textColor={"#D3D3D3"} />
      <ListItemPart title={data.c} textColor={textColor} />
    </div>
  );
};

export default CoinsListItem;

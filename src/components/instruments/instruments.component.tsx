import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";

import "./instruments.styles.css";

const Instruments = () => {
  const coinsData = useSelector((state: StateType) => state.coins);
  return (
    <div className="instruments">
      <div className="list-item-4-e">
        <ListItemPart title={"Instrument"} textColor={"#000"} />
        <ListItemPart title={"24h %"} textColor={"#000"} />
        <ListItemPart title={"24h vol."} textColor={"#000"} />
        <ListItemPart title={"price"} textColor={"#000"} />
      </div>
      {/* <List items={coinsData} type="coins" /> */}
    </div>
  );
};

export default Instruments;

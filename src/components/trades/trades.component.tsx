import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);

  return (
    <div className="trades">
      <div className="trades-controls"></div>
      <div className="list-item-4">
        <ListItemPart title={"Side"} textColor={"#000"} />
        <ListItemPart title={"Price"} textColor={"#000"} />
        <ListItemPart title={"Size(USD)"} textColor={"#000"} />
        <ListItemPart title={"Date Time"} textColor={"#000"} />
      </div>
      <List items={tradesData} type="trades" />
    </div>
  );
};

export default Trades;

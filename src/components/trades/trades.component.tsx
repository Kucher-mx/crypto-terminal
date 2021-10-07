import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);

  return (
    <div className="trades">
      <Title title="Trades" />
      <div className="trades-controls"></div>
      <div className="list-item-4">
        <ListItemPart title={"Side"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Price"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Size(USD)"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Date Time"} textColor={"#B6B9C0"} />
      </div>
      <div className="list-wrapper">
        <List
          items={tradesData}
          type="trades"
          color={{
            text: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Trades;

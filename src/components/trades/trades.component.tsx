import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);
  const [selectState, setSelectState] = useState({ select: "COIN" });

  return (
    <div className="trades">
      <Title title="Trades" />
      <div className="trades-controls">
        <select
          className="trades-select"
          name="select"
          onChange={(e) => setSelectState({ select: e.target.value })}
        >
          <option value="COIN">COIN</option>
          <option value="USDT">USDT</option>
        </select>
      </div>
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
          sizeType={selectState.select}
          color={{
            text: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Trades;

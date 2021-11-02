import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);
  const [selectState, setSelectState] = useState<{
    select: "COIN" | "USDT";
    filterPrice: null | number;
  }>({
    select: "COIN",
    filterPrice: null,
  });

  const filteredItems = tradesData.filter((item) => {
    const size =
      selectState.select === "COIN"
        ? Number(item.q).toFixed(6)
        : Number(+item.q * +item.p).toFixed(2);
    return selectState.filterPrice ? +size >= selectState.filterPrice : true;
  });

  return (
    <div className="trades">
      <div className="trades-header">
        <Title title="Trades" />
        <div className="trades-controls">
          <div className="filter-price">
            {"Size >="}
            <input
              type="number"
              name="size"
              id="size"
              min={0}
              onChange={(e) =>
                setSelectState({ ...selectState, filterPrice: +e.target.value })
              }
            />
          </div>
          <select
            className="trades-select"
            name="select"
            onChange={(e) =>
              setSelectState({
                ...selectState,
                select: e.target.value as "COIN" | "USDT",
              })
            }
          >
            <option value="COIN">COIN</option>
            <option value="USDT">USDT</option>
          </select>
        </div>
      </div>
      <div className="list-item-4">
        <ListItemPart title={"Side"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Price"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Size(USD)"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Date Time"} textColor={"#B6B9C0"} />
      </div>
      <div className="list-wrapper">
        <List
          items={filteredItems}
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

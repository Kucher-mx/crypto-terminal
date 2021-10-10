import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);
  const [selectState, setSelectState] = useState({ select: "COIN" });

  const maxSize = useMemo(
    () =>
      tradesData.length
        ? Math.max(
            ...tradesData.map((item) => {
              return selectState.select === "COIN"
                ? Number(item.q)
                : Number(item.q + 0.1);
            })
          ) + 0.1
        : 0.1,
    [tradesData]
  );

  const [filterValues, setFilterValues] = useState({
    min: 0,
    max: maxSize,
  });

  const filteredData = useMemo(
    () =>
      tradesData.filter((item) => {
        if (selectState.select === "COIN") {
          return +item.q > filterValues.min && +item.q < filterValues.max;
        } else {
          return true;
        }
      }),
    [tradesData, filterValues]
  );

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFilterValues({
      ...filterValues,
      [name]: +value,
    });
  };

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
        {/* <section className="range-slider">
          <div className="range-title">size</div>
          <span className="rangeValues min">{filterValues.min}</span>
          <input
            name="min"
            value={filterValues.min}
            min="0"
            max={maxSize - 0.01}
            step="0.01"
            type="range"
            onChange={onChangeHandler}
          />
          <input
            name="max"
            value={filterValues.max}
            min="0"
            max={maxSize}
            step="0.01"
            type="range"
            onChange={onChangeHandler}
          />
          <span className="rangeValues max">{filterValues.max}</span>
        </section> */}
      </div>
      <div className="list-item-4">
        <ListItemPart title={"Side"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Price"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Size(USD)"} textColor={"#B6B9C0"} />
        <ListItemPart title={"Date Time"} textColor={"#B6B9C0"} />
      </div>
      <div className="list-wrapper">
        <List
          items={filteredData}
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

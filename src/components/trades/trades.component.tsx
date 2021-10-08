import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./trades.styles.css";

const Trades = () => {
  const tradesData = useSelector((state: StateType) => state.trades);
  const maxPrice = useMemo(
    () =>
      tradesData.length
        ? Math.max(...tradesData.map((item) => Number(item.price)))
        : 0,
    [tradesData]
  );

  const minPrice = useMemo(() => (maxPrice / 100) * 50, [maxPrice]);

  const [filterValues, setFilterValues] = useState({
    min: minPrice,
    max: maxPrice,
  });

  const filteredData = useMemo(
    () =>
      tradesData.filter(
        (item) =>
          +item.price > filterValues.min && +item.price < filterValues.max
      ),
    [tradesData, filterValues]
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <section className="range-slider">
          <span className="rangeValues min">{filterValues.min}</span>
          <input
            name="min"
            value={filterValues.min}
            min="0"
            max={maxPrice - 1}
            step="0.5"
            type="range"
            onChange={onChangeHandler}
          />
          <input
            name="max"
            value={filterValues.max}
            min="0"
            max={maxPrice}
            step="0.5"
            type="range"
            onChange={onChangeHandler}
          />
          <span className="rangeValues max">{filterValues.max}</span>
        </section>
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
          color={{
            text: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default Trades;

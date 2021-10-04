import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";

import "./orderbook.styles.css";

const OrderBook = () => {
  const orderBookData = useSelector((state: StateType) => state.orderBook);
  const { a, b } = orderBookData;

  return (
    <div className="orderbook">
      <div className="orderbook-controls"></div>
      <div className="list-item-3">
        <ListItemPart title={"price"} textColor={"#000"} />
        <ListItemPart title={"size"} textColor={"#000"} />
        <ListItemPart title={"total"} textColor={"#000"} />
      </div>
      <List items={a.slice(0, 9)} type="orderbook" />
      <div className="list-item-3">
        <ListItemPart title={"smth"} textColor={"#000"} />
        <ListItemPart title={"smth"} textColor={"#000"} />
        <ListItemPart title={"smth"} textColor={"#000"} />
      </div>
      <List items={b.slice(0, 9)} type="orderbook" />
    </div>
  );
};

export default OrderBook;

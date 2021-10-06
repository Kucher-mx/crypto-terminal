import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Loader from "react-loader-spinner";

import "./orderbook.styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const OrderBook = () => {
  const orderBookData = useSelector((state: StateType) => state.orderBook);
  const { a, b } = orderBookData;

  return (
    <div className="orderbook">
      {orderBookData.a.length ? (
        <>
          <div className="orderbook-controls"></div>
          <div className="list-item-3">
            <ListItemPart title={"price"} textColor={"#B6B9C0"} />
            <ListItemPart title={"size"} textColor={"#B6B9C0"} />
            <ListItemPart title={"total"} textColor={"#B6B9C0"} />
          </div>
          <List
            items={a.filter((item) => Number(item[1]) !== 0).slice(0, 5)}
            type="orderbook"
            color={{ text: "#EF5350" }}
          />
          <div className="orderbook-summary">
            <div className="orderbook-summary-wrapper">
              <div className="main">Index: 42345.042</div>
              <div className="secondary">Mark: 42245.4234</div>
            </div>
          </div>
          <List
            items={b.filter((item) => Number(item[1]) !== 0).slice(0, 5)}
            type="orderbook"
            color={{ text: "#5ABD2B" }}
          />
        </>
      ) : (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
    </div>
  );
};

export default OrderBook;

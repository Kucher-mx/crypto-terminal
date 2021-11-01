import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";

const MartPrice = () => {
  const markPriceClose = useSelector(
    (state: StateType) => state.candleStick[state.candleStick.length - 1]?.Close
  );

  console.log();

  return <div className="main">{markPriceClose || ""}</div>;
};

export default MartPrice;

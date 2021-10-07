import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../types/redux.types";
import List from "../list/list.component";
import ListItemPart from "../listItem/listItemPart.component";
import Title from "../title/title.component";

import "./instruments.styles.css";

const Instruments = () => {
  const coinsData = useSelector((state: StateType) => state.coins);

  return (
    <div className="instruments">
      <Title title="Instruments" />
      <div className="list-item-4-e instruments-list-header">
        <ListItemPart title={"Instrument"} textColor={"#B6B9C0"} />
        <ListItemPart title={"24h %"} textColor={"#B6B9C0"} />
        <ListItemPart title={"24h vol."} textColor={"#B6B9C0"} />
        <ListItemPart title={"price"} textColor={"#B6B9C0"} />
      </div>
      <div className="instruments-wrapper">
        <List
          items={coinsData}
          type="coins"
          color={{
            text: "#000",
          }}
        />
      </div>
    </div>
  );
};

export default Instruments;

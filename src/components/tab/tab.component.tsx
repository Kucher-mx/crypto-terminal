import React from "react";

import "./tab.style.css";

type Props = {
  title: string;
  tabType: boolean;
  current: boolean;
  onClickHandler: (tab: boolean) => void;
};

const Tab = (props: Props) => {
  const { title, onClickHandler, tabType, current } = props;
  const classes = ["tab"];
  if ((current && tabType) || (!current && !tabType)) {
    classes.push("reg-active");
  }

  return (
    <div className={classes.join(" ")} onClick={(e) => onClickHandler(tabType)}>
      {title}
    </div>
  );
};

export default Tab;

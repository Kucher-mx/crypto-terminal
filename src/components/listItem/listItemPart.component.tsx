import React from "react";

type Props = {
  title: string | number;
  textColor: string;
  backColor?: string;
};

const ListItemPart = ({ title, textColor, backColor }: Props) => {
  return (
    <div
      className="list-item-part"
      style={{ color: textColor, background: backColor }}
    >
      {title}
    </div>
  );
};

export default ListItemPart;

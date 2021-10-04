import React from "react";

type Props = {
  title: string;
  textColor: string;
};

const ListItemPart = ({ title, textColor }: Props) => {
  return (
    <div className="list-item-part" style={{ color: textColor }}>
      {title}
    </div>
  );
};

export default ListItemPart;

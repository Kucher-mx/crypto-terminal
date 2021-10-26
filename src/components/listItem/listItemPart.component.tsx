import React from "react";

type Props = {
  title: string | number;
  textColor: string;
  backColor?: string;
  fieldName?: string;
  onClickHandler?: (e: React.MouseEvent) => void;
};

const ListItemPart = ({
  title,
  textColor,
  backColor,
  fieldName,
  onClickHandler,
}: Props) => {
  return (
    <div
      className="list-item-part"
      id={fieldName}
      style={{ color: textColor, background: backColor }}
      onClick={onClickHandler}
    >
      {title}
    </div>
  );
};

export default ListItemPart;

import React from "react";

import "./input.styles.css";

type Props = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <div className="input-control">
      <input {...props} />
    </div>
  );
};

export default Input;

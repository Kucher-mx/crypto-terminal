import React from "react";

import "./input.styles.css";
import { ReactComponent as UserIcon } from "./assets/akar-icons_person.svg";
import { ReactComponent as PasswordIcon } from "./assets/carbon_password.svg";

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
      <div className="input-icon">
        {props.name === "email" ? <UserIcon /> : <PasswordIcon />}
      </div>
    </div>
  );
};

export default Input;

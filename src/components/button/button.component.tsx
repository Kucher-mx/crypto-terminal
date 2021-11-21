import React from 'react';

import './button.styles.css';

type ButtonProps = {
  children?: string;
  onClick: (e: React.MouseEvent<any>) => void;
  customClass?: string;
};

const ButtonCustom = (props: ButtonProps) => {
  return (
    <button
      className={`button ${props.customClass ? props.customClass : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonCustom;

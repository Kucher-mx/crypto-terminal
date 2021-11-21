import React from 'react';

import './input.styles.css';

type IOProps = {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: string;
};

const InputOrder = ({ placeholder, value, name, onChange, children }: IOProps) => {
  return (
    <div className="input-order">
      <input type="text" placeholder={placeholder} value={value} name={name} onChange={onChange} />
      <div className="input-label">{children}</div>
    </div>
  );
};

export default InputOrder;

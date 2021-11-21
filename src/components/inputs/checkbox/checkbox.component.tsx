import React from 'react';

type CheckboxPropsType = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element | string;
  value: boolean;
};

const CheckboxCustom = ({ children, value, name, id, onChange }: CheckboxPropsType) => {
  return (
    <div className="checkbox">
      <input type="checkbox" name={name} id={id} onChange={onChange} checked={value} />
      {children}
    </div>
  );
};

export default CheckboxCustom;

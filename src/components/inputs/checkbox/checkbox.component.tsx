import React from 'react';

type CheckboxPropsType = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element | string;
  value: boolean;
  customClass?: string;
};

const CheckboxCustom = ({
  children,
  value,
  name,
  id,
  onChange,
  customClass = '',
}: CheckboxPropsType) => {
  return (
    <div className={`checkbox ${customClass}`}>
      <input type="checkbox" name={name} id={id} onChange={onChange} checked={value} />
      {children}
    </div>
  );
};

export default CheckboxCustom;

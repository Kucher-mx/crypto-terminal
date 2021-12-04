import React from 'react';

type SliderPropsType = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  options: string[];
  customClass?: string;
};

const Switch = ({ value, name, id, onChange, options, customClass = '' }: SliderPropsType) => {
  return (
    <div className={`switch-wrapper ${customClass}`}>
      <label className={`switch`}>
        <input type="checkbox" name={name} id={id} onChange={onChange} checked={value} />
        <span className="slider round"></span>
      </label>
      {value ? options[0] : options[1]}
    </div>
  );
};

export default Switch;

import React from 'react';

type SliderPropsType = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  options: string[];
};

const Switch = ({ value, name, id, onChange, options }: SliderPropsType) => {
  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input type="checkbox" name={name} id={id} onChange={onChange} checked={value} />
        <span className="slider round"></span>
      </label>
      {value ? options[1] : options[0]}
    </div>
  );
};

export default Switch;

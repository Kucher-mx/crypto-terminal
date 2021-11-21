import React from 'react';

import './select.styles.css';

type CustomSelectProps = {
  options: { value: string; title: string }[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const SelectCustom = ({ options, name, onChange, value }: CustomSelectProps) => {
  return (
    <div className="select-custom">
      <select name={name} onChange={onChange} value={value}>
        {options.map(option => {
          const { value, title } = option;
          return (
            <option className="option" value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCustom;

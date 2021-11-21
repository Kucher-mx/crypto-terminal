import React from 'react';

type RangePropsType = {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  min: string;
  max: string;
  classCustom?: string;
  labelSymbol?: string;
};

const RangeCustom = ({
  classCustom,
  labelSymbol,
  name,
  id,
  onChange,
  value,
  min,
  max,
}: RangePropsType) => {
  return (
    <div className={`range ${classCustom ? classCustom : ''} `}>
      <input
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        onChange={onChange}
        value={value || 0}
      />
      {labelSymbol ? <div className="range-value">{`${value}${labelSymbol}`}</div> : null}
    </div>
  );
};

export default RangeCustom;

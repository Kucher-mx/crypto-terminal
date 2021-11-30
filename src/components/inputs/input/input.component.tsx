import React from 'react';

import './input.styles.css';
import { ReactComponent as UserIcon } from './assets/akar-icons_person.svg';
import { ReactComponent as PasswordIcon } from './assets/carbon_password.svg';

type Props = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  icon?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: JSX.Element | string;
};

const Input = (props: Props) => {
  const { icon = false } = props;
  const styles = icon
    ? {
        padding: '3px 10px',
        paddingLeft: '75px',
      }
    : { padding: '3px 10px' };
  return (
    <div className="input-control">
      <div className="input-text">{props?.label}</div>
      <input style={styles} {...props} />
      {icon && (
        <div className="input-icon">{props.name === 'email' ? <UserIcon /> : <PasswordIcon />}</div>
      )}
    </div>
  );
};

export default Input;

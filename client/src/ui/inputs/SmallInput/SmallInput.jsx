import React from 'react';

import cl from './SmallInput.module.css';

export default function SmallInput({value, onChange, placeholder, ...props}) {
  return (
    <input 
      type="text"
      className={cl.SmallInput}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

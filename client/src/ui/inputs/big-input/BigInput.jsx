import React from 'react';
import cl from './BigInput.module.css';

export default function BigInput({label, placeholder, value, onChange, type = 'text', ...props}) {
  return (
    <div className={cl.InputDiv} {...props}>
      <label className={cl.InputLabel} htmlFor="" >{label}</label>
      <input type={type} className={cl.InputLogin} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

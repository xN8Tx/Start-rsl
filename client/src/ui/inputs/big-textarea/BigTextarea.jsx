import React from 'react';
import cl from './BigTextarea.module.css';

export default function BigTextarea({label, placeholder, value, onChange, type, ...props}) {
  return (
    <div className={cl.InputDiv} {...props}>
      <label className={cl.InputLabel} htmlFor="" >{label}</label>
      <textarea className={cl.InputLogin} value={value} onChange={onChange}> </textarea>
    </div>
  );
}

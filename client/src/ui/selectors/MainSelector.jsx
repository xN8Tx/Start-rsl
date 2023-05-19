import React from 'react';

import cl from './MainSelector.module.css';

export default function MainSelector({name, title, options, firstValue, ...props}) {
  return (
    <select name={name} className={cl.MainSelector} {...props}>
      <option value={firstValue}>{title}</option>
      {options.map((option, i) => (
        <option key={i} value={option.value}>{option.name}</option>          
      ))}  
    </select>
  );
}

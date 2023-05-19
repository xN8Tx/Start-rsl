import React from 'react';
import cl from './HeadingThird.module.css';

export default function HeadingThird({children,...props}) {
  return (
    <h4 className={cl.HeadingThird} {...props}>
      {children}
    </h4>
  );
} 

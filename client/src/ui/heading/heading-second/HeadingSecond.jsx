import React from 'react';
import cl from './HeadingSecond.module.css';

export default function HeadingSecond({children, ...props}) {
  return (
    <h3 className={cl.HeadingSecond} {...props}>
      {children}
    </h3>
  );
} 

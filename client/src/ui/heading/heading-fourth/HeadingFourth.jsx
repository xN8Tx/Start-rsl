import React from 'react';
import cl from './HeadingFourth.module.css';

export default function HeadingFourth({children, ...props}) {
  return (
    <h4 className={cl.HeadingFourth} {...props}>
      {children}
    </h4>
  );
} 

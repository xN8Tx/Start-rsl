import React from 'react';
import cl from './TextSecond.module.css';

export default function TextSecond({children, ...props}) {
  return (
    <p className={cl.TxtSecond} {...props}>
      {children}
    </p>
  );
}

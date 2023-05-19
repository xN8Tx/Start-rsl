import React from 'react';
import cl from './TextMain.module.css';

export default function TextMain({children, ...props}) {
  return (
    <p className={cl.TextMain} {...props}>
      {children}
    </p>
  );
}

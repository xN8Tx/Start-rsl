import React from 'react';

import classes from './MyButton.module.css';

export default function MyButton({children, ...props}) {
  return (
    <button className={classes.MyButton} {...props}>
      {children}
    </button>
  );
}

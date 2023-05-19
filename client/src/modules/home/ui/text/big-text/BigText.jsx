import React from 'react';

import cl from './BigText.module.css';

export default function BigText({children, ...props}) {
  return (
    <p className={cl.BigText} {...props}>
      {children}
    </p>
  );
}

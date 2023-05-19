import React from 'react';

import cl from './TextSmall.module.css';

export default function TextSmall({children, ...props}) {
  return (
    <p className={cl.TextSmall} {...props}>{children}</p>
  );
}

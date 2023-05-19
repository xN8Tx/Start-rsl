import React from 'react';
import { Link } from 'react-router-dom';
import cl from './LinkMain.module.css';

export default function LinkMain({to, children, ...props}) {
  return (
    <Link to={to} className={cl.LinkMain} {...props}>
      {children}
    </Link>
  );
}

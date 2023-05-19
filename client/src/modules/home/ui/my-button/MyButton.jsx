import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MyButton.module.css';

export default function MyButton({to, children, ...props}) {
  return (
    <Link to={to} className={cl.MyButton} {...props}>
      {children}
    </Link>
  );
}

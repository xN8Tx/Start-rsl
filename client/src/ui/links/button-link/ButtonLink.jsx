import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ButtonLink.module.css';

export default function ButtonLink({to, children, ...props}) {
  return (
    <Link to={to} className={classes.ButtonLink} {...props}>
      {children}
    </Link>
  );
}

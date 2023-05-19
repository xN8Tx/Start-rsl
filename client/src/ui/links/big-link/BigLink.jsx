import React from 'react';

import { Link } from 'react-router-dom';

import cl from './BigLink.module.css';

export default function BigLink({to, children, ...props}) {
  return (
    <Link className={cl.BigLink} to={to}>{children}</Link>
  );
}

import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import './CustomLink.css';

export default function CustomLink({children, to}) {
  const match = useMatch(to);
  
  return (
    <Link to={to} className={ match?.pathname ? 'custom-link active' : 'custom-link' }>
      {children}
    </Link>
  );
}

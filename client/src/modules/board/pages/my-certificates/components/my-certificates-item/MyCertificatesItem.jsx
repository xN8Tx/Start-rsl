import React from 'react';

import LazyImg from '../../../../../../ui/img/LazyImg';

import './MyCertificatesItem.css';

export default function MyCertificatesItem({to, certificate}) {
  return (
    <a href={to} target="_blank" rel="noreferrer" className="myCertificate-item">
      <LazyImg 
        src={certificate} 
        alt="certificate"
      />
    </a>
  );
}

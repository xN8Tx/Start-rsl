import React from 'react';

export default function LoadingSvg({...props}) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 25L50 12.5" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 87.5L50 79.1667" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M79.1666 50L87.5 50" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 50L25 50" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M73.5702 26.4297L76.5165 23.4834" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.4835 76.5164L29.3761 70.6238" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70.6239 70.624L76.5165 76.5166" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.4835 23.4836L32.3224 32.3225" stroke="#892EE0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

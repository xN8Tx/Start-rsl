import React, { useRef, useState } from 'react';

import useOnScreen from '../../hooks/useOnScreen';

import cl from './LazyImg.module.css';

export default function LazyImg({src, alt, className, ...props}) {
  const [loaded, setLoaded] = useState(false);
  
  const containerRef = useRef(null);
  const isOnScreen = useOnScreen(containerRef);
  
  return (
    <div 
      className={`${className} ${cl.LazyContainer}`} 
      data-load={loaded}
      ref={containerRef}
      {...props}
    >
      {isOnScreen && 
      <img 
        src={src} 
        alt={alt} 
        className={cl.LazyImg}
        onLoad={() => setLoaded(true)}
      />}
    </div>
  );
}

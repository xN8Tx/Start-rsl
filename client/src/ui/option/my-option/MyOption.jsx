import React from 'react';

import IconsSvg from '../../../assets/svg/IconsSvg';
import LineSvg from '../../../assets/svg/LineSvg';

import cl from './MyOption.module.css';

export default function MyOption({type, value, setValue}) {
  return (
    <button 
      className={cl.MyOption} 
      data-type={type === 'icons' ? value : !value} 
      onClick={setValue}
    >
      {type === 'icons' ? <IconsSvg/> : <LineSvg/>}
    </button>
  );
}

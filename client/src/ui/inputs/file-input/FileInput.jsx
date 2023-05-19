import React from 'react';

import cl from './FileInut.module.css';

export default function FileInput({title, props, onChange}) {
  return (
    <label className={cl.InputFile}>
      <input type="file" name="file" onChange={onChange}/>
      <span className={cl.InputFileBtn}>Выберите {title}</span> 
    </label>
  );
}

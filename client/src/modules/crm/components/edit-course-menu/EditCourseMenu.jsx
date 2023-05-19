import React from 'react';

import TextSecond from '../../../../ui/text/text-second/TextSecond';
import MyButton from '../../../../ui/my-button/MyButton';

import './EditCourseMenu.css';

export default function EditCourseMenu({materialMenu, setMaterialMenu, material, changeMaterial, addMaterial}) {
  return (
    <div className="edit-course-from__material df-column df-s-sb i-gap" data-active={materialMenu} onClick={() => setMaterialMenu(!materialMenu)}>
      <div className="edit-course-from__material__list df-column is-gap">
        {material.map(el => (
          <TextSecond key={el.id} onClick={() => changeMaterial(el.id)}>{el.name}</TextSecond>
        ))}
      </div>
      <div>
        <MyButton onClick={() => addMaterial()}>Добавить</MyButton>
      </div>
    </div>
  );
}

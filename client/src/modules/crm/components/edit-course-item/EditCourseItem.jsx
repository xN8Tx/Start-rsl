import React from 'react';

import BigInput from '../../../../ui/inputs/big-input/BigInput';
import MainSelector from '../../../../ui/selectors/MainSelector';
import MyButton from '../../../../ui/my-button/MyButton';
import TextSmall from '../../../../ui/text/text-small/TextSmall';
import FileInput from '../../../../ui/inputs/file-input/FileInput';

import './EditCourseItem.css';

export default function EditCourseItem({
  materialEdit, 
  setMaterialEdit, 
  materialName, 
  setMaterialName, 
  materialType, 
  setMaterialType,
  saveMaterial,
  type,
  setVideo
}) {
  const typeList = [{name: 'Слово', value: 'Слово'}, {name: 'Предложение', value: 'Предложение'}];

  return (
    <div className="edit-course-item wh-100 df-column df-s-sb is-gap" material-active={`${materialEdit}`}>
      <div className="w-100 df-column df-s-sb is-gap">
        <BigInput 
          label="Название"
          placeholder="Введите название"
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
        />
        <MainSelector
          name="Type"
          title="Тип"
          options={typeList}
          firstValue="null"
          value={materialType}
          onChange={(e) => setMaterialType(e.target.value)}
        />
      </div>
      
      { type === 'add' && <FileInput title="видео" onChange={e => setVideo(e.target.files[0])}/> }
      
      <div className="w-100 df df-c-sb">
        <MyButton onClick={() => saveMaterial()}>Сохранить</MyButton>
        <TextSmall onClick={() => setMaterialEdit(false)}>Закрыть</TextSmall>
      </div>
    </div>
  );
}

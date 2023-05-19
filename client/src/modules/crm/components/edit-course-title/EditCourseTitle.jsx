import React from 'react';

import BigInput from '../../../../ui/inputs/big-input/BigInput';
import BigTextarea from '../../../../ui/inputs/big-textarea/BigTextarea';
import FileInput from '../../../../ui/inputs/file-input/FileInput';
import MainSelector from '../../../../ui/selectors/MainSelector';
import MyButton from '../../../../ui/my-button/MyButton';

import './EditCourseTitle.css';
import TextSmall from '../../../../ui/text/text-small/TextSmall';

export default function EditCourseTitle({name, setDesc, setLevel, setName, level, desc, levelList, updateCourseHandler, deleteCourse, type, setCover}) {
  return (
    <div className="edit-course-from__title df-column df-start i-gap wh-100">
      <div className="w-100 df-column is-gap">
        <BigInput
          label="Название"
          placeholder="Введите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BigTextarea           
          label="Описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="w-100 df df-c-sb is-gap">
        { type === 'add' && <FileInput title="обложку" onChange={e => setCover(e.target.files[0])}/> }
        <MainSelector
          name="level"
          title="Уровень"
          options={levelList}
          firstValue="null"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>
      <div className="wh-100 df df-c-sb">
        <MyButton onClick={() => updateCourseHandler()}>Сохранить</MyButton>
        <TextSmall onClick={() => deleteCourse()}>Удалить</TextSmall>
      </div>
    </div>
  );
}

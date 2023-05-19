import React from 'react';
import EducationItem from '../education-item/EducationItem';

export default function EducationList() {
  const items = [
    'Регистрируйся',
    'Выбирай курс',
    'Смотри видео',
    'Учи',
    'Получай сертификат'
  ];

  return (
    <div className="home-education__row df df-center df-wrap i-gap">
      {items.map((el, i) => <EducationItem key={i} text={el}/>)}
      <p className="home-education__row_element">Отслеживай прогресс</p>
    </div>
  );
}

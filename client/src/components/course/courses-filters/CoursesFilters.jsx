import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeLevel, changeRating } from '../../../store/filters/filter-slice';

import MainSelector from '../../../ui/selectors/MainSelector';
import MyOption from '../../../ui/option/my-option/MyOption';

import './CoursesFilters.css';

export default function CoursesFilters({typeShow, setTypeShow}) {
  const dispatch = useDispatch();
  
  const { level, rating } = useSelector(state => state.filters);
  
  const levelList = [{name: 'Начинающий', value: 'Начинающий'}, {name: 'Средний', value: 'Средний'}, {name: 'Профессионал', value: 'Профессионал'}];
  const ratingList = [{name: 'Больше 1', value: 1}, {name: 'Больше 2', value: 2}, {name: 'Больше 3', value: 3}, {name: 'Больше 4', value: 4}, {name: '5', value: 5}];
  
  return (
    <div className="courses-filters df df-c-sb">
      <div className="df df-c-s is-gap">
        <MainSelector 
          name="level"
          title="Уровень"
          options={levelList}
          firstValue="null"
          value={level}
          onChange={(e) => dispatch(changeLevel(e.target.value))}
        />
        <MainSelector 
          name="rating"
          title="Оценка"
          options={ratingList}
          firstValue={0}
          value={rating}
          onChange={(e) => dispatch(changeRating(Number(e.target.value)))}
        />
      </div>
      <div className="df df-c-s ixs-gap">
        <MyOption 
          type="icons"
          value={typeShow}
          setValue={() => setTypeShow(!typeShow)}
        />
        <MyOption 
          type="line"
          value={typeShow}
          setValue={() => setTypeShow(!typeShow)}
        />
      </div>
    </div>
  );
}

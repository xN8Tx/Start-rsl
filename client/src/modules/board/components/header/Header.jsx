import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectBySearch } from '../../../../store/courses/courses-selectors';
import { changeSearch } from '../../../../store/filters/filter-slice';

import PartHeaderWrapper from '../../../../components/header/part-header-wrapper/PartHeaderWrapper';
import SmallInput from '../../../../ui/inputs/SmallInput/SmallInput';

import './Header.css';

export default function Header({sidebarActive, sidebarHandler}) {
  const dispatch = useDispatch();

  const search = useSelector(state => state.filters.search);
  const courses = useSelector(state => selectBySearch(state, search));
  
  const inputHandler = (e) => {
    dispatch(changeSearch(e.target.value));
  };
  
  return (
    <PartHeaderWrapper sidebarActive={sidebarActive} sidebarHandler={sidebarHandler}>    
      <div className="board-header__input" data-active={search.length !== 0 ? 'true' : 'false'}>
        <SmallInput 
          value={search}
          onChange={(e) => inputHandler(e)}
          placeholder="Введите курс"
        />
        <div className="board-header__input_list df-column df-start is-gap">
          <h4>Курсы</h4>
          <ul className="df-column">
            {courses.map(course => (
              <li key={course.id}><Link to={`/board/courses/${course.id}`}>{course.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </PartHeaderWrapper>
  );
}

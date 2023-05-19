import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '../../../../components/loading/Loading';
import Error from '../../../../components/error/Error';
import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import Level from './components/level/Level';
import Course from './components/course/Course';
import Todo from './components/todo/Todo';

import './Dashboard.css';

export default function Dashboard() {
  const { loading, error } = useSelector(state => state.myUser);
  const { loading: coursesLoading, error: coursesError } = useSelector(state => state.courses);
  return (
    <>
      { (loading === 'loading' || coursesLoading === 'loading') && <Loading /> }
      { (error || coursesError)  && <Error/> }
      { !error && !coursesError && (loading === 'succeeded' && coursesLoading === 'succeeded') &&
        <>
          <MainHeading>Дэшбоард</MainHeading>
          <div className="dashboard-wrapper o-gap">
            <div className="dashboard-wrapper__column o-gap">
              <Level />
              <Course />
            </div>
            <div className="dashboard-wrapper__column o-gap">
              <Todo />
            </div>    
          </div>
        </>
      }
    </>
  );
}

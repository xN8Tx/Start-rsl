import React from 'react';
import { useSelector } from 'react-redux';

import StatisticItem from '../statistic-item/StatisticItem';
import Loading from '../../../../../../components/loading/Loading';
import Error from '../../../../../../components/error/Error';


export default function StatisticList() {
  const { entities: coursesEntities, loading: coursesLoading, error: coursesError } = useSelector(state => state.courses);
  const { entities: usersEntities, loading: usersLoading, error: usersError } = useSelector(state => state.users);
  
  const coursesLength = coursesEntities.length;
  const usersLength = usersEntities.length;
  
  const error = coursesError || usersError;
  const loading = (coursesLoading === 'loading' || usersLoading === 'loading');
  const loaded = (coursesLoading === 'succeeded' && usersLoading === 'succeeded');
  
  return (
    <>
      { loading && <Loading/> }
      { error && <Error/> }
      { loaded && !error && 
        <div className="df df-wrap df-start i-gap">
          <StatisticItem title="Курсы" info={coursesLength} />
          <StatisticItem title="Пользователи" info={usersLength} />
        </div>
      }
    </>
  );
}

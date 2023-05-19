import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '../../../../../../components/loading/Loading';
import Error from '../../../../../../components/error/Error';
import UsersItem from '../users-item/UsersItem';

export default function UsersList() {
  const { entities, loading, error } = useSelector(state => state.users);
  
  return (
    <>
      { loading === 'loading' && <Loading/> }
      { error && <Error/> }
      { loading === 'succeeded' && !error && 
        <div className="df df-wrap is-gap">
          {entities.map(user => (
            <UsersItem key={user.id} id={user.id} avatar={user.avatar} name={user.name} surname={user.surname} role={user.role} />
          ))}
        </div>
      }
    </>
  );
}

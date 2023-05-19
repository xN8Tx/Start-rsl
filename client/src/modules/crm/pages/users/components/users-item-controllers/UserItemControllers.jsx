import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import DownSvg from '../../../../../../assets/svg/DownSvg';
import UpSvg from '../../../../../../assets/svg/UpSvg';
import DeleteSvg from '../../../../../../assets/svg/DeleteSvg';
import { deleteUsers, updateUsers } from '../../../../../../store/users/users-actions';

export default function UserItemControllers({role, id}) {
  const dispatch = useDispatch();
  const myRole = useSelector(state => state.myUser.entities.role);
  
  const roleChecker = (myRole, role) => {
    if (myRole > role) return true;
    return false;
  };
  
  const roleHandler = (type, role, myRole) => {
    if (roleChecker(myRole, role)) {
      if (type === 'up' && role !== 4) {
        const title = {
          role: role + 1
        };
        dispatch(updateUsers({ id, title }));
      } 
      if (type === 'down' && role !== 1) {
        const title = {
          role: role - 1
        };
        
        dispatch(updateUsers({ id, title }));
      }
    }
  };
  
  const deleteHandler = (role, myRole) => {
    if (roleChecker(myRole, role)) dispatch(deleteUsers({ id }));
  };

  return (
    <div className="df ixs-gap">
      <DownSvg onClick={() => roleHandler('down', role, myRole)}/>
      <UpSvg onClick={() => roleHandler('up', role, myRole)}/>
      <DeleteSvg onClick={() => deleteHandler(role, myRole)}/>
    </div>
  );
}

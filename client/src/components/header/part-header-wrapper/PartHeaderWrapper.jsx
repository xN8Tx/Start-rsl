import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../../store/filters/filter-slice';

import HeaderAccount from '../header-account/HeaderAccount';

import './PartHeaderWrapper.css';

export default function PartHeaderWrapper({ sidebarActive, sidebarHandler, children }) {
  const dispatch = useDispatch();
  
  const search = useSelector(state => state.filters.search);
  const [profileActive, setProfileActive] = useState(false);
  
  const profileActiveHandler = () => {
    setProfileActive(!profileActive);
    if (profileActive.length !== 0) dispatch(changeSearch(''));
  };
  
  useEffect(() => {
    if (search.length > 0 && profileActive) setProfileActive(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  
  return (
    <header className="part-header df" data-burger={sidebarActive}>
      <div className="part-header__burger df df-center" onClick={() => sidebarHandler()}>
        <span className="part-header__burger_btn"></span>
      </div>
      <div className="df df-c-sb is-gap">
        {children}
        <HeaderAccount 
          profileActive={profileActive}
          profileActiveHandler={profileActiveHandler}
          style={{ right: '25px' }}
        />
      </div>
    </header>
  );
}

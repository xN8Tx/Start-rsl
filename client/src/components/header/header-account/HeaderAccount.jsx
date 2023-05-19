import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { authLogout } from '../../../store/auth/auth-actions';
import { resetMyUser } from '../../../store/my-user/my-user-slice';
import { loadMyUser } from '../../../store/my-user/my-user-actions';

import LazyImg from '../../../ui/img/LazyImg';
import ButtonLink from '../../../ui/links/button-link/ButtonLink';

import DashboardSvg from '../../../assets/svg/DashboardSvg';
import LogOutSvg from '../../../assets/svg/LogOutSvg';

import './HeaderAccount.css';

export default function HeaderAccount({profileActive, profileActiveHandler, ...props}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const isAuth = useSelector(state => state.auth.isAuth);
  const { id, avatar } = useSelector(state => state.myUser.entities);
  const loading = useSelector(state => state.myUser.loading);
  
  useEffect(() => {
    if (loading === 'idle' && isAuth) {
      dispatch(loadMyUser());
    }
  }, [dispatch, isAuth, loading]);
  
  if (!isAuth) return <ButtonLink to={'/auth'}>Войти</ButtonLink>;
  
  return (
    <div className="header-account__profile df df-center is-gap" data-active={profileActive}>
      <div className="header-account__profile__avatar">
        <LazyImg
          src={avatar}
          alt={'avatar'}
          onClick={profileActiveHandler}
          className="my-avatar"
        />
      </div>
      <div className="header-account__profile__list" {...props}>
        <Link to={`/profile/${id}`} className="header-account__profile_link" >
          <DashboardSvg />
          Профиль
        </Link>
        <div className="header-account__profile_link"
          onClick={() => {
            dispatch(authLogout());
            dispatch(resetMyUser());
            navigate('/');
            toast.success('Вы вышли из аккаунта');
          }}
        >
          <LogOutSvg />
          Выход
        </div>
      </div>
      <div className="header-account__profile__adaptive df-center is-gap">
        <Link to={`/profile/${id}`} className="header-account__profile_link" >
          <DashboardSvg />
          Профиль
        </Link>
        <div className="header-account__profile_link"
          onClick={() => {
            dispatch(authLogout());
            dispatch(resetMyUser());
            navigate('/');
            toast.success('Вы вышли из аккаунта');
          }}
        >
          <LogOutSvg />
          Выход
        </div>
      </div>
    </div>
  );
}

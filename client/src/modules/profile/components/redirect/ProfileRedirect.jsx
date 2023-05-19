import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { decodeJWT } from '../../../../utils/decode-jwt';



export default function ProfileRedirect() {
  const isAuth = useSelector(state => state.auth.isAuth);
  
  if (isAuth) {
    const myId = decodeJWT(localStorage.getItem('access_token')).id;
    return <Navigate to={`/profile/${myId}`} />;
  } else {
    toast.error('Войдите в аккаунт чтобы посетить эту страницу');
    return <Navigate to={'/'} />;
  };
};
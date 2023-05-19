import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import BigInput from '../../../ui/inputs/big-input/BigInput';
import LinkMain from '../../../ui/links/link-main/LinkMain';
import { authRegistration } from '../../../store/auth/auth-actions';

import './auth.css';
import Loading from '../../../components/loading/Loading';

export default function Registration() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(state => state.auth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  
  const registrationHandler = () => {
    if (password.length >= 10) {
      if (password === passwordTwo) {
        dispatch(authRegistration({ email, password }));
      } else {
        toast.error('Пароли не сходятся');
      }
    } else {
      toast.error('Пароль слишком короткий');
    }
  };
  
  useEffect(() => {
    if (error) toast.error('Проверьте почту/пароль');
  }, [error]);
  
  return (
    <>
      { loading === 'loading' && <Loading/>}
      { loading === 'idle' &&
        <>
          <div className="auth-login__title">
            <h1>Зарегистрироваться на <span>startRSL</span></h1>
          </div>
          <div className="auth-login__from">
            <BigInput 
              label="Ваша почта"
              placeholder="Введите вашу почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <BigInput 
              label="Ваш пароль"
              placeholder="Введите ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <BigInput 
              label="Повторите ваш пароль"
              placeholder="Введите ваш пароль"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
              type="password"
            />
          </div>
          <div className="auth-login__buttons">
            <button className="auth-login__buttons_enter" onClick={registrationHandler}>Зарегистрироваться</button>
            <button className="auth-login__buttons_google">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.25 0C22.3211 0 24 1.67893 24 3.75V20.25C24 22.3211 22.3211 24 20.25 24H3.75C1.67893 24 0 22.3211 0 20.25V3.75C0 1.67893 1.67893 0 3.75 0H20.25ZM14.4058 9.28364C13.784 8.6891 12.9931 8.38637 12.1122 8.38637C10.5495 8.38637 9.22698 9.44178 8.75516 10.86C8.63516 11.22 8.56698 11.6045 8.56698 12C8.56698 12.3954 8.63492 12.78 8.75492 13.14C9.22673 14.5582 10.5495 15.6136 12.1122 15.6136C12.9195 15.6136 13.607 15.4009 14.1442 15.0409C14.7797 14.6155 15.2024 13.98 15.3415 13.23H12.1124V10.9091H17.7633C17.8343 11.3018 17.8724 11.7109 17.8724 12.1364C17.8724 13.9637 17.2179 15.5018 16.0833 16.5464C15.0906 17.4628 13.7322 18 12.1122 18C9.76674 18 7.73764 16.6554 6.75037 14.6945C6.344 13.8845 6.11243 12.9682 6.11243 12C6.11243 11.0318 6.34425 10.1154 6.75061 9.30542C7.73788 7.34451 9.76674 6 12.1122 6C13.7295 6 15.0877 6.59455 16.1267 7.56273L14.4058 9.28364Z" fill="#892EE0"/>
              </svg>
            </button>
          </div>
          <div className="aut-login__nav">
            <LinkMain to="/auth">Уже есть аккаунт</LinkMain>
          </div>
        </>
      }
    </>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import _config from '../../_config';

import Header from '../../components/header/header/Header';
import Footer from '../../components/footer/footer/Footer';

import AuthWrapper from './components/AuthWrapper';

import './index.css';

export default function Auth() {
  const { isAuth, error, loading } = useSelector(state => state.auth); 
  
  if (isAuth && !error && (loading === 'succeeded' || loading === 'idle')) {
    window.location.href = `${_config.SITE_IP}`;
  }
  
  return (
    <>
      <Header />
      <main className="auth">
        <AuthWrapper>
          <Outlet/>
        </AuthWrapper>
      </main>
      <Footer />
    </>
  );
}

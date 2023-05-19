import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line import/order
import { loadUser, resetUser } from '../../store/user/user-slice';

import Header from '../../components/header/header/Header';
import Footer from '../../components/footer/footer/Footer';
import Loading from '../../components/loading/Loading';
import ErrorContent from '../error/components/ErrorContent';
import ProfileWrapper from './components/profile-wrapper/ProfileWrapper';

export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error } = useSelector(state => state.user);
  const myId = useSelector(state => state.myUser.entities?.id); 
  const { loading: myUserLoading, error: myUserError } = useSelector(state => state.myUser);
  
  useEffect(() => {
    if (id !== myId) {
      if (loading === 'idle') dispatch(loadUser(id));
    }
    
    return () => {
      dispatch(resetUser());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
  
  if (id !== myId) return (
    <>
      <Header />
      { error && <ErrorContent /> }
      { loading === 'loading' && <Loading /> }
      { !error && loading === 'succeeded' && <ProfileWrapper /> }
      <Footer />
    </>
  );
  
  return (
    <>
      <Header />
      { myUserError && <ErrorContent /> }
      { myUserLoading === 'loading' && <Loading /> }
      { !myUserError && myUserLoading === 'succeeded' && <ProfileWrapper /> }
      <Footer />
    </>
  );
}

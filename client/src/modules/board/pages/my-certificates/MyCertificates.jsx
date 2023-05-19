import React from 'react';
import { useSelector } from 'react-redux';

import Error from '../../../../components/error/Error';
import Loading from '../../../../components/loading/Loading';
import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import MyCertificatesList from './components/my-certificates-list/MyCertificatesList';

export default function MyCertificates() {
  const { loading, error } = useSelector(state => state.myUser);
  return (
    <>
      { error && <Error /> }
      { loading === 'loading' && <Loading /> }
      { !error && loading === 'succeeded' && 
        <>
          <MainHeading>Мои сертификаты</MainHeading>
          <div className="myCertificate-wrapper">
            <MyCertificatesList/>
          </div>
        </>
      }
    </>
  );
}

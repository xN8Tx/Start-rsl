import React from 'react';
import { useSelector } from 'react-redux';

import MyCertificatesItem from '../my-certificates-item/MyCertificatesItem';
import Empty from '../../../../../../components/empty/Empty';

export default function MyCertificatesList() {
  const certificates = useSelector(state => state.myUser.entities.certificates);
  return (
    <div className="wh-100 df df-wrap df-center ob-gap">
      { 
        certificates === null
          ?
          <Empty />
          :
          certificates.map((certificate, i) => (
            <MyCertificatesItem key={i} to={certificate} certificate={certificate}/>
          ))
      }
    </div>
  );
}

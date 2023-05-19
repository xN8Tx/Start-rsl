import React from 'react';

import BenefitsList from '../benefits-list/BenefitsList';
import SmallTitle from '../../ui/title/small-title/SmallTitle';
import BigTitle from '../../ui/title/big-title/BigTitle';

import './Benefits.css';

export default function Benefits() {
  return (
    <section className="home-benefits" id="benefits">
      <div className="home-wrapper df-column df-center o-gap">
        <div className="home-benefits__heading df-column df-center">
          <SmallTitle>Преимущества</SmallTitle>
          <BigTitle>Почему именно мы?</BigTitle>
        </div>
        <BenefitsList />
      </div>
    </section>
  );
}

import React from 'react';
import SmallText from '../../ui/text/small-text/SmallText';

import './BenefitsItem.css';

export default function BenefitsItem({src, title, text}) {
  return (
    <div className="home-benefits__element df-column df-start is-gap">
      <div className="home-benefits__element__title">
        <img src={src} alt="" />
        <h3 className="home-benefits__element_heading">{title}</h3>
      </div>
      <SmallText id="home-benefits__element__text">
        {text}
      </SmallText>
    </div>
  );
}

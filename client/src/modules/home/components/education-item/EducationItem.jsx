import React from 'react';
import ArrowSvg from '../../../../assets/svg/ArrowSvg';

export default function EducationItem({text}) {
  return (
    <>
      <p className="home-education__row_element">{text}</p>
      <div className="home-education__row_divider">
        <ArrowSvg/>
      </div>
    </>
  );
}

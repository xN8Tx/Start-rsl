import React from 'react';

import ApproachSvg from '../../../../assets/svg-images/ApproachSvg.svg';
import CertificateSvg from '../../../../assets/svg-images/CertificateSvg.svg';
import ComfortSvg from '../../../../assets/svg-images/ComfortSvg.svg';
import CommunicationSvg from '../../../../assets/svg-images/CommunicationSvg.svg';
import BenefitsItem from '../benefits-item/BenefitsItem';

import './BenefitsList.css';

export default function BenefitsList() {
  const items = [
    {src: ApproachSvg, title: 'Подход', text: 'Изучайте русский язык жестов с помощью комплексного и систематического подхода'},
    {src: CommunicationSvg, title: 'Общение', text: 'Присоединяйтесь к нашему дружному кругу студентов школы startRSL'},
    {src: ComfortSvg, title: 'Комфорт', text: 'Изучайте РЖЯ в любом месте и в любое время с нашей удобной для мобильных устройств платформой'},
    {src: CertificateSvg, title: 'Сертификат', text: ' Получите сертификат об окончании каждого уровня, чтобы отметить свои выдающиеся достижения'}
  ];
  
  return (
    <div className="home-benefits__row df df-center o-gap df-wrap">
      {items.map((el, i) => (
        <BenefitsItem
          key={i}
          src={el.src}
          title={el.title}
          text={el.text}
        />
      ))}
    </div>
  );
}

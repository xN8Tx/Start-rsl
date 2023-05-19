import React from 'react';

import Header from '../../components/header/header/Header';
import Footer from '../../components/footer/footer/Footer';
import ErrorContent from './components/ErrorContent';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <ErrorContent />
      <Footer />
    </>
  );
}

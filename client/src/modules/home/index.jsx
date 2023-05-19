import React from 'react';

import Footer from '../../components/footer/footer/Footer';
import Header from './components/header/Header';
import Concept from './components/concept/Concept';
import About from './components/about/About';
import Benefits from './components/benefits/Benefits';
import Education from './components/education/Education';
import Courses from './components/courses/Courses';

export default function HomePage() {
  return (
    <>
      <Header />
      <Concept />
      <About />
      <Benefits />
      <Education />
      <Courses />
      <Footer />
    </>
  );
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Splide } from '@splidejs/react-splide';

import Error from '../../../components/error/Error';
import Loading from '../../../components/loading/Loading';
import SliderItem from './SliderItem';

import '@splidejs/react-splide/css';
import './Slider.css';

import { loadSliderCourses, resetSliderCourses } from './slider-slice';


export default function Slider() {
  const dispatch = useDispatch();
  
  const { entities, error, loading} = useSelector(state => state.sliderCourses);
  
  
  useEffect(() => {
    dispatch(loadSliderCourses());
    
    return () => {
      dispatch(resetSliderCourses());    
    };
  }, [dispatch]);
  
  return (
    <>
      { error && <Error /> }
      { loading === 'loading' && <Loading /> }
      { !error && loading === 'succeeded' && (
        <Splide options={
          {
            rewind : true,
            perPage: 2,
            pagination: false,
            breakpoints: {
              950: {
                perPage: 1,
                perMove: 1,
              }
            }
          }
        }>
          {entities.map(course => (
            <SliderItem
              key={course.id}
              id={course.id}
              title={course.name}
              level={course.level}
              src={course.cover}
            />
          ))}
        </Splide>  
      )}
    </>
  );
}

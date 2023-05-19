import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addCourse } from '../../../../../store/courses/courses-actions';

import EditCourseForm from '../../../components/edit-course-form/EditCourseForm';

export default function AddCourseWrapper() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const course = { name: '', description: '', cover: '', experience: 200, rating: [], level: '', material: [] };
  
  const uploadHandler = (obj) => {
    dispatch(addCourse({ title: obj.title }))
      .then(() => {
        navigate('/crm/courses');
        toast.success('Вы добавили курс!');
      });
  };
  
  return (
    <div className="wh-100 df df-start">
      <EditCourseForm cb={uploadHandler} course={course} type="add"/>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { loadCourse, resetCourse, updateCourse } from '../../../../../../store/course/course-slice';

import EditCourseForm from '../../../../components/edit-course-form/EditCourseForm';
import Loading from '../../../../../../components/loading/Loading';
import Error from '../../../../../../components/error/Error';

export default function EditCourseWrapper() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();  
  
  const { loading, error, entities } = useSelector(state => state.course);
  
  useEffect(() => {
    dispatch(loadCourse(id));
    
    return () => dispatch(resetCourse()); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
  const uploadHandler = (obj) => {
    dispatch(updateCourse(obj))
      .then(() => {
        navigate(`/board/courses/${obj.id}`);
        toast.success('Вы изменили курс!');
      });
  };
  
  return (
    <>
      { loading === 'loading' && <Loading/> }
      { error && <Error/> }
      { loading === 'succeeded' && !error && 
        <div className="wh-100 df df-start">
          <EditCourseForm cb={uploadHandler} course={entities}/>
        </div>
      }
    </>
  );
}

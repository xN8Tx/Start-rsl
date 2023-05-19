import React from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultPlayer as Video } from 'react-html5video';
import { toast } from 'react-toastify';

import { addExperience, changeCourse } from '../../../../store/my-user/my-user-actions';

import 'react-html5video/dist/styles.css';
import './PlayerPlayer.css';

export default function PlayerPlayer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, video } = useParams();

  const entities = useSelector(state => state.course.entities);
  const userId = useSelector(state => state.myUser.entities.id);
  const statusCourses = useSelector(state => state.myUser.entities.courses);
  
  
  return (
    <div className="w-100">
      <Video
        controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
        poster={entities.cover}
        onEnded={() => {
          dispatch(changeCourse({ id: userId, videoId: video, courseId: id }))
            .then(res => {
              if (entities.material.length !== Number(video)) {
                navigate(`/course-player/${id}/${Number(video) + 1}`);
              } else {
                toast.success('Вы посмотрели последнее видео курса!');
              }
            });
            
          const courseIndex = statusCourses.findIndex(el => el.id === id);
          const videoIndex = statusCourses[courseIndex].status.findIndex(el => el.id === Number(video));
          
          if (!statusCourses[courseIndex].status[videoIndex].status) {
            dispatch(addExperience({ id: userId, xp: 20 }))
              .then(() => toast.success('Вы получили 20 опыта!'));
          } 
          ;
        }}
      >
        <source src={entities.material[video - 1].src} type="video/webm" />
      </Video>
    </div>
  );
}

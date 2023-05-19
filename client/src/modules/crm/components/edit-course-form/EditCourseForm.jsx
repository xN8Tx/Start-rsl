import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import $api from '../../../../api/api';
import { deleteCourses } from '../../../../store/courses/courses-actions';

import EditCourseTitle from '../edit-course-title/EditCourseTitle';
import EditCourseMenu from '../edit-course-menu/EditCourseMenu';
import EditCourseItem from '../edit-course-item/EditCourseItem';

import './EditCourseForm.css';

export default function EditCourseForm({cb, course, type}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const levelList = [{name: 'Начинающий', value: 0}, {name: 'Средний', value: 1}, {name: 'Профессионал', value: 2}];
  const levelIndex = levelList.findIndex(el => el.name === course?.level);
  
  const [materialMenu, setMaterialMenu] = useState(false);
  const [materialEdit, setMaterialEdit] = useState(false);
  
  const [name, setName] = useState(course.name);
  const [desc, setDesc] = useState(course.description);
  const [level, setLevel] = useState(levelList[levelIndex]?.value);
  const [cover, setCover] = useState(null);
  
  const [material, setMaterial] = useState(JSON.parse(JSON.stringify(course.material)));
  const [materialId, setMaterialId] = useState(0);
  const [materialName, setMaterialName] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [video, setVideo] = useState(null);
  
  
  const changeMaterial = (id) => {
    const materialIndex = material.findIndex(el => el.id === id);
    
    setMaterialId(material[materialIndex].id);
    setMaterialName(material[materialIndex].name);
    setMaterialType(material[materialIndex].type);
    
    setMaterialEdit(true);
  };
  
  const addMaterial = () => {
    const id = material.length === 0 ? 1 : material[material.length - 1].id + 1;
    const title = {id,name:'Новый',type:'Слово',src:''};
    
    setMaterial([...material, title]);
    setMaterialId(title.id);
    setMaterialName(title.name);
    setMaterialType(title.type);
    
    setMaterialEdit(true);
  }; 
  
  const saveMaterial = () => {
    if (materialName.length !== 0  && materialType !== 'null') {
      const materialIndex = material.findIndex(el => el.id === materialId);
      const title = { id:materialId, name:materialName, type:materialType, src: type === 'add' ? video ? video : '' : material[materialIndex].src};
      
      setMaterial(material.map(el => el.id === materialId ? title : el));
      setMaterialEdit(false);
    } else {
      toast.error('Заполните поля!');
    }
  };
  
  const deleteCourse = () => {
    if (course.id !== undefined) {
      dispatch(deleteCourses(course.id))
        .then(() => {
          navigate('/crm/courses');
          toast.success('Вы удалили курс!');
        });
    } else {
      toast.error('Вы еще не создали курс');
    }
  };
  
  const updateCourseHandler = () => {
    if (name.length !== 0  && level !== 'null'  && desc.length !== 0) {
      const title = {
        name: name,
        description: desc,
        cover: type === 'add' ? cover : course.cover, 
        level: level,
        material: JSON.stringify(material),
        experience: course.experience, 
        rating: JSON.stringify(course.rating)
      };
      
      cb({id: course.id, title: title});
      localStorage.removeItem('courseAdd');
    } else {
      toast.error('Заполните поля!');
    }
  }; 
  

  
  useEffect(() => {
    if (cover !== null && type === 'add') {
      const formData = new FormData();
      formData.append('course', cover);
      
      $api.post('upload/course', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
        .then(res => res.data.message)
        .then(res => setCover(res))
        .then(() => toast.success('Обложка загружено на сервер'));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cover]);
  
  useEffect(() => {
    if (video !== null && type === 'add') {
      const formData = new FormData();
      formData.append('course', video);
      
      $api.post('video/course', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
        .then(res => res.data.message)
        .then(res => setVideo(res))
        .then(() => toast.success('Видео загружено на сервер'));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);
  
  return (
    <div className="edit-course-from df-column i-gap">
      <EditCourseTitle 
        name={name} 
        desc={desc} 
        level={level} 
        setName={setName} 
        setDesc={setDesc} 
        setLevel={setLevel} 
        levelList={levelList}
        updateCourseHandler={updateCourseHandler}
        deleteCourse={deleteCourse}
        type={type}
        setCover={setCover}
        cover={cover}
      />
      <EditCourseMenu 
        material={material} 
        materialMenu={materialMenu} 
        setMaterialMenu={setMaterialMenu}
        changeMaterial={changeMaterial}
        addMaterial={addMaterial}
        type={type}
      />
      <EditCourseItem 
        materialEdit={materialEdit} 
        setMaterialEdit={setMaterialEdit} 
        materialName={materialName} 
        setMaterialName={setMaterialName} 
        materialType={materialType} 
        setMaterialType={setMaterialType}
        saveMaterial={saveMaterial}
        type={type}
        setVideo={setVideo}
      />
    </div>
  );
}

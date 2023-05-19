import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { uploadCover } from '../../../../store/my-user/my-user-actions';

import LazyImg from '../../../../ui/img/LazyImg';

import './ProfileCover.css';

export default function ProfileCover() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const myId = useSelector(state => state.myUser.entities?.id); 
  
  const [avatarFile, setAvatarFile] = useState(null);
  
  const cover = useSelector((state) => {
    if (id === myId) return state.myUser.entities.cover;
    return state.user.entities.cover;
  });
  
  useEffect(() => {
    if (avatarFile !== null && id === myId && avatarFile?.size < 10000000) {
      dispatch(uploadCover({ id: myId, cover: avatarFile }));
    } else if(avatarFile?.size >= 10000000) {
      toast.error('Размер не больше 10мб!');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, avatarFile]);
  
  return (
    <div className="profile-cover">
      <LazyImg
        src={cover}
        alt="Cover"
      />
      {
        id === myId
          ?
          <div className="cover-edit">
            Изменить
            <input type="file" onChange={e => setAvatarFile(e.target.files[0])}/>
          </div>
          :
          <></>
      }
    </div>
  );
}
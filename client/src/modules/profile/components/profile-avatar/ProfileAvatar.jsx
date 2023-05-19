import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { uploadAvatar } from '../../../../store/my-user/my-user-actions';

import LazyImg from '../../../../ui/img/LazyImg';

import './ProfileAvatar.css';

export default function ProfileAvatar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const myId = useSelector(state => state.myUser.entities?.id);
  
  const [avatarFile, setAvatarFile] = useState(null);
  
  const avatar = useSelector((state) => {
    if (id === myId) return state.myUser.entities.avatar;
    return state.user.entities.avatar;
  });
  
  useEffect(() => {
    if (avatarFile !== null && id === myId && avatarFile?.size < 10000000) {
      dispatch(uploadAvatar({ id: myId, avatar: avatarFile }));
    } else if(avatarFile?.size >= 10000000) {
      toast.error('Размер не больше 10мб!');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, avatarFile]);
  
  return (
    <div className="profile-title__avatar">
      {
        id === myId
          ?
          <div className="my-profile-avatar" onClick={() => {}}>
            <input 
              type="file" 
              onChange={e => setAvatarFile(e.target.files[0])}
            />
            <LazyImg 
              src={avatar} 
              alt="avatar" 
              className="profile-avatar"
            />
          </div>
          :
          <LazyImg 
            src={avatar} 
            alt="avatar" 
            className="profile-avatar"
          />
      }
    </div>
  );
}

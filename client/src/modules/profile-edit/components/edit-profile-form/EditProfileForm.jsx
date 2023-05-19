import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { editMyUser } from '../../../../store/my-user/my-user-actions';

import Loading from '../../../../components/loading/Loading';
import BigInput from '../../../../ui/inputs/big-input/BigInput';
import MyButton from '../../../../ui/my-button/MyButton';

import './EditProfileForm.css';

function EditProfileForm(props) {
  const dispatch = useDispatch();
  const { id, name, surname } = useSelector(state => state.myUser.entities);
  const { loading, error } = useSelector(state => state.myUser);
  
  const [_name, setName] = useState(name);
  const [_surname, setSurname] = useState(surname);

  const editHandler = () => {
    if (name !== _name || surname !== _surname) {
      const title = { name: _name, surname: _surname };
      dispatch(editMyUser({id, title}))
        .then(() => toast.success('Успешно изменен'));
    } else {
      toast.error('Измените хоть одно поле');
    }
  };
  
  useEffect(() => {
    if (error) toast.error('Упс, произошла ошибка'); 
  });

  return (
    <>
      { loading === 'loading' && <Loading /> }
      { loading === 'succeeded' && !error && (
        <div className="edit-profile__form df-column i-gap">
          <div className="df-column is-gap">
            <BigInput
              label="Ваше имя"
              placeholder="Введите ваше имя"
              value={_name}
              onChange={(e) => setName(e.target.value)}
            />
            <BigInput
              label="Ваша фамилия"
              placeholder="Введите вашу фамилию"
              value={_surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div>
            <MyButton onClick={() => editHandler()}>Изменить</MyButton>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfileForm;
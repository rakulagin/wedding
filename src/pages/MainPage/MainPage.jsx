import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'

import InputForm from "../../components/InputForm/InputForm";
import Modal from "../../components/Modal/Modal";

const MainPage = () => {

  const [isModalActive, setModalActive] = useState(false);
  const navigate = useNavigate()

  const onButtonSubmit = (data) => {
    try {
      axios.post('http://backend.rakulagin.com/user', data)
        .then((res) => {
          if (!res.data._id) {
            return setModalActive(true)
          }
          localStorage.setItem('user', JSON.stringify({...res.data}))
          navigate('/invite')
        })
    } catch (err) {
      console.log('ошибка получения данных', err)
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      navigate('/invite')
    }
  }, [navigate])

  return (
    <>
      <Modal
        isActive={isModalActive}
        setActive={setModalActive}
      />
      <div className='image bg-flowers'></div>
      <div className="content">
        <h1 className='title'>Привет!</h1>
        <p className='text'>С&nbsp;тобой говорят Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело. Для этого введи свое имя и&nbsp;фамилию полностью.
        </p>
        <InputForm
          onButtonSubmit={onButtonSubmit}
        />
      </div>
    </>
  );
};

export default MainPage;
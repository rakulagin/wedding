import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'

import flowers from "../../img/flowers.png";

import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";
import Modal from "../../components/Modal/Modal";

const MainPage = () => {

  const [isActive, setActive] = useState(false);
  const navigate = useNavigate()

  const onButtonSubmit = (data) => {
    try {
      axios.post('http://backend.rakulagin.com/invite', data)
        .then((data) => {
          if (!data.data._id) {
            setActive(true)
            return console.log('не найден')
          }
          localStorage.setItem('user', JSON.stringify({...data.data, auth: true}))
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
  }, [])

  return (
    <>
      <Modal
        isActive={isActive}
        setActive={setActive}
      />
      <div className={styles.page}>
        <img className={styles.img} src={flowers} alt="flowers"/>
        <div className={styles.content}>
          <h1 className={styles.header}>Привет!</h1>
          <p className={styles.text}>С&nbsp;тобой говорят Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело.
            Для этого введи свое имя и&nbsp;фамилию полностью.
          </p>
          <InputForm
            onButtonSubmit={onButtonSubmit}
          />
        </div>

      </div>
    </>
  );
};

export default MainPage;
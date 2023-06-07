import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'

import flowers from "../../img/flowers.png";
import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {

  const navigate = useNavigate()

  const onButtonSubmit = (data) => {
    try {
      axios.post('http://backend.rakulagin.com/invite', data)
        .then((data) => {
          if(!data.data._id) {
            return console.log('не найден')
          }
          localStorage.setItem('user', JSON.stringify({...data.data, auth: true}))
          navigate('/invite')
        })
    } catch (err) {
      console.log('ошибка получения данных', err)
    }
  }

  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      navigate('/invite')
    }
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.img}>
        <img src={flowers} alt="flowers"/>
      </div>
      <div className='container'>
        <h1 className={styles.header}>Привет!</h1>
        <p className={styles.text}>С&nbsp;тобой говорят Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело.
          Для этого введи свое имя и&nbsp;фамилию полностью.</p>
        <InputForm
          onButtonSubmit={onButtonSubmit}
        />
      </div>

      {/*<div className={styles.notFound}>*/}
      {/*  Ой! Мы не нашли тебя в списке. Проверь, правильно ли ты ввел данные, или свяжись с нами по ссылке*/}
      {/*</div>*/}


      {/*{currentUser &&*/}
      {/*  <>*/}
      {/*  <div>{currentUser.firstName}</div>*/}
      {/*  <div>{currentUser.surName}</div>*/}
      {/*    <div><img src={currentUser.img} alt=""/></div>*/}
      {/*    <div><img src={`http://backend.rakulagin.com${currentUser.img}`} alt=""/></div>*/}
      {/*  </>*/}
      {/*}*/}

    </div>
  );
};

export default MainPage;
import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import DataContext from "../../UserInfoContext";


import flowers from "../../img/flowers.png";
import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {

  const navigate = useNavigate()


  // const {userInfo, setUserInfo} = useContext(DataContext)

  const onButtonSubmit = (data) => {
    try {
      console.log("data send -> ", data)
      axios.post('http://backend.rakulagin.com/invite', data)
        .then((data) => {
          if(!data.data._id) {
            return console.log('не найден')
          }
          console.log("data receive <--", data.data)
          // setUserInfo(data.data)
          // localStorage.setItem('id',data.data._id)
          localStorage.setItem('user', JSON.stringify({...data.data, auth: true}))
          navigate('/invite')

          // if (data.data._id) {
          //   console.log(data.data)
          //   setUserInfo(data.data)
          //   // navigate('/invite')
          // } else {
          //   console.log('не найден')
          // }
        })
    } catch (err) {
      console.log('ошибка получения данных', err)
    }
  }



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


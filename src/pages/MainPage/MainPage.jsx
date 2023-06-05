import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios'


import flowers from "../../img/flowers.png";
import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null);

  const onButtonSubmit = (data) => {
    const {firstName, surName} = data
    console.log("data send -> ", data)
    axios.post('http://backend.rakulagin.com/invite', data)
      .then((data) => {

        if(data) {
          console.log(data.data)
          setCurrentUser(data.data)
        } else {
          console.log('не найден')
        }
      })
  }



  return (
    <div className={styles.page}>
          <div className={styles.img}>
            <img src={flowers} alt="flowers"/>
          </div>
          <div className='container'>
            <h1 className={styles.header}>Привет!</h1>
            <p className={styles.text}>С&nbsp;тобой говорит Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело.
              Для
              этого введи свое имя и&nbsp;фамилию полностью.</p>
            <InputForm
              onButtonSubmit={onButtonSubmit}
            />
          </div>
      {currentUser &&
        <>
        <div>{currentUser.firstName}</div>
        <div>{currentUser.surName}</div>
          <div><img src={currentUser.img} alt=""/></div>
          <div><img src={`http://backend.rakulagin.com${currentUser.img}`} alt=""/></div>
        </>
      }
    </div>
  );
};

export default MainPage;


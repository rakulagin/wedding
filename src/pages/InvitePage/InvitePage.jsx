import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";

import DataContext from "../../UserInfoContext";

import styles from "./InvitePage.module.css"

const InvitePage = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)
  // console.log(userInfo.img)

  const clear = () => {
    localStorage.clear()
    navigate('/')
  }

  const answerNo = () => {
    setUserInfo(prevState => ({
      ...prevState,
      accept: false
    }))
  }

  const answerYes = () => {
    setUserInfo(prevState => ({
      ...prevState,
      accept: true
    }))
  }

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    // console.log(savedUser)
    if (!savedUser) {
      return navigate('/')
    }
    setUserInfo(savedUser)
  }, [])

  console.log(userInfo)

  return (
    <div className='page'>
      <div className={styles.menu}>
        <button onClick={clear}>очистить</button>
      </div>
      <img className={styles.img} src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>
      <div className='content'>
        <h3 className={styles.header}> {userInfo.nickname}!</h3>
        <p className={styles.text}>Это приглашение на нашу свадьбу! Если ты это читаешь, значит ты в списке тех, с кем
          мы хотим разделить наш особенный день!</p>
        <p className={styles.text}>
          Мы ждем тебя с ТВОЕЙ ВТОРОЙ ПОЛОВИНКОЙ 11 августа, в пятницу, в ЗАГС Октябрьского района, "Теремок", по адресу
          г. Самара, ул. Молодогвардейская, дом 238.</p>
        <p className={styles.text}>Дополнительную инфу ты можешь узнать в шапке над фото.</p>
        <p className={styles.text}>Чтобы нам было легче организовать праздник, пройди, пожалуйста, опрос.</p>
        <h3 className={styles.question}>Главный вопрос: сможешь ли ты прийти?</h3>
        <div className={styles.buttons}>
          <button
            className={styles.button1}
            onClick={answerYes}
          >да
          </button>
          <button
            className={styles.button2}
            onClick={answerNo}
          >нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;

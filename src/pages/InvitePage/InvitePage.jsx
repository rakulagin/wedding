import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import DataContext from "../../UserInfoContext";

import styles from "./InvitePage.module.css"
import AnswerNo from "../../components/AnswerNo/AnswerNo";

const InvitePage = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)

  const clear = () => {
    localStorage.clear()
    navigate('/')
  }

  const answerNo = () => {
    // const answer = {accept: false}
    // setUserInfo(prevState => ({
    //   ...prevState,
    //   accept: false
    // }))
    // // localStorage.setItem('user', JSON.stringify({...userInfo, accept: false}))
    // localStorage.setItem('user', JSON.stringify({...userInfo, ...answer}))
    // axios.patch(`http://backend.rakulagin.com/question/${userInfo._id}`, answer)
    //   .then(data => console.log(data))
  }

  const answerYes = () => {
    const answer = {accept: true}
    setUserInfo(prevState => ({
      ...prevState,
      ...answer
    }))
    axios.patch(`http://backend.rakulagin.com/question/${userInfo._id}`, answer)
    // axios.patch(`http://localhost:4444/question/${userInfo._id}`, answer)
      .then(res => {
        console.log('axios patch invitePage', res.data)
        localStorage.setItem('user', JSON.stringify(res.data))
      })
    navigate('/interview')
  }

  useEffect(() => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
    setUserInfo(localstorageUser)
  }, [])

  console.log('invitePage userInfo', userInfo)

  return (
    <div className='page'>
      <div className={styles.menu}>
        <button onClick={clear}>очистить</button>
      </div>
      <img className={styles.img} src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>
      <div className='content'>

        {/*{!userInfo.accept===true ? (*/}
        {/*  <AnswerNo/>*/}
        {/*) : (*/}
        {/*  <>*/}
        <h3 className={styles.header}> {userInfo.nickname}!</h3>
        <p className={styles.text}>Это приглашение на нашу свадьбу! Если ты это читаешь, значит ты в списке тех, с кем мы хотим разделить наш особенный день!</p>
        <p className={styles.text}>
          Мы ждем тебя с ТВОЕЙ ВТОРОЙ ПОЛОВИНКОЙ 11 августа, в пятницу, в ЗАГС Октябрьского района, "Теремок", по адресу г. Самара, ул. Молодогвардейская, дом 238.</p>
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
        {/*  </>*/}
        {/*)}*/}



      </div>
    </div>
  );
};

export default InvitePage;

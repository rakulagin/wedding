import React, {useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import DataContext from "../../UserInfoContext";

import styles from "./InvitePage.module.css"
import AnswerNo from "../../components/AnswerNo/AnswerNo";
import AnswerYes from "../../components/AnswerYes/AnswerYes";

const InvitePage = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)

  const clear = () => {
    localStorage.clear()
    navigate('/')
  }

  const answerNo = () => {
    const answer = {accept: 'no'}
    setUserInfo(prevState => ({
      ...prevState,
      ...answer
    }))
    axios.patch(`http://backend.rakulagin.com/update/${userInfo._id}`, answer)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
      })
  }

  const answerYes = () => {
    const answer = {accept: "yes"}
    setUserInfo(prevState => ({
      ...prevState,
      ...answer
    }))
    axios.patch(`http://backend.rakulagin.com/update/${userInfo._id}`, answer)
      .then(res => {
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

  return (
    <div className='page'>
      <div className="container">
        <div className={styles.menu}>
          <button className="btn btn--min btn--purple">я пойду!</button>
          <button className="btn btn--min" onClick={clear}>очистить</button>
          <button className="btn btn--min btn--purple">Меню</button>
        </div>
      </div>
      <img className={styles.img} src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>
      <div className='container'>
        {userInfo.accept === "yes" ? (
          <AnswerYes/>
        ) : userInfo.accept === "no" ? (
          <AnswerNo/>
        ) : (
          <>
            <h3 className={styles.header}> {userInfo.nickname}!</h3>
            <p className={styles.text}>Это приглашение на нашу свадьбу! Если ты это читаешь, значит ты в списке тех, с
              кем мы хотим разделить наш особенный день!</p>
            <p className={styles.text}>
              Мы ждем тебя с ТВОЕЙ ВТОРОЙ ПОЛОВИНКОЙ 11 августа, в пятницу, в ЗАГС Октябрьского района, "Теремок", по
              адресу г. Самара, ул. Молодогвардейская, дом 238.</p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default InvitePage;

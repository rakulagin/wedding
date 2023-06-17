import React, {useEffect, useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import DataContext from "../../UserInfoContext";

import AnswerNo from "../../components/AnswerNo/AnswerNo";
import AnswerYes from "../../components/AnswerYes/AnswerYes";

const InvitePage = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)

  const clear = () => {
    localStorage.removeItem('user')
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

  const changeAccept = () => {
    const answer = {accept: ""}
    setUserInfo(prevState => ({
      ...prevState,
      ...answer
    }))
    axios.patch(`http://backend.rakulagin.com/update/${userInfo._id}`, answer)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
      })
  }

  const changeInterview = () => {
    navigate('/interview')
  }


  useEffect(() => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
    if(!localstorageUser.answered) {

    setUserInfo(prevState => ({
      ...prevState,
      ...localstorageUser
    }))
    }
    console.log('-----useeffect-----')
  }, [navigate])

  console.log('userinfo invitepage', userInfo)

  return (
    <>
      <div
        className='image img__wrp'
        style={{backgroundImage: "url('http://backend.rakulagin.com" + userInfo.img + "')"}}
      >
        {userInfo.answered && userInfo.accept === "yes"  && <button onClick={changeInterview} className="btn btn--on-image btn--purple">пройти опрос снова</button>}
        {userInfo.accept === "no" && <button className="btn btn--on-image btn--purple" onClick={changeAccept}>я пойду!</button>}
        <button onClick={clear}>CLEAR</button>
      </div>

      {/*<img className='img' src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>*/}

      <div className="content">
        {userInfo.accept === "yes" && userInfo.answered ? (
          <AnswerYes/>
        ) : userInfo.accept === "no" ? (
          <AnswerNo/>
        ) : !userInfo.answered || userInfo.accept==='' ? (
          <>
            <h2 className='title'> {userInfo.nickname}!</h2>
            <h3 className='subtitle'>Мы решили пожениться!</h3>
            <p className='text'>
              <span className='text--accent'>Это приглашение на&nbsp;нашу свадьбу! </span>
              Если ты&nbsp;его читаешь, значит
              ты&nbsp;в&nbsp;списке тех, с&nbsp;кем мы&nbsp;хотим разделить наш особенный день!</p>
            <p className='text'>
              <span className='text--accent'>Свадьба состоится 11&nbsp;августа. </span>
            </p>
            <p className='text'>Чтобы нам было легче организовать наш особенный день, пройди, пожалуйста, опрос.</p>
            <h3 className='subtitle'>Главный вопрос: сможешь&nbsp;ли ты&nbsp;прийти?</h3>
            <div className='buttons__wrp'>
              <button
                className='btn btn--purple btn--wide'
                onClick={answerYes}
              >да
              </button>
              <button
                className='btn btn--orange btn--wide'
                onClick={answerNo}
              >нет
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default InvitePage;

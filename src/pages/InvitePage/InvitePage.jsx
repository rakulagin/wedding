import React, {useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import DataContext from "../../UserInfoContext";

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

  const changeDecision = () => {
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

  useEffect(() => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
    setUserInfo(localstorageUser)
  }, [])

  return (
    <>
      <div className="container">
        <div className='header'>
          <button className="btn btn--min btn--purple">Меню</button>
          <button className="btn btn--min" onClick={clear}>очистить</button>
          {userInfo.accept === "no" && <button className="btn btn--min btn--purple" onClick={changeDecision}>я пойду!</button>}
        </div>
      </div>
      <img className='img' src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>
      <div className='container'>
        <div className="content">
        {userInfo.accept === "yes" ? (
          <AnswerYes/>
        ) : userInfo.accept === "no" ? (
          <AnswerNo/>
        ) : (
          <>
            <h2 className='title'> {userInfo.nickname}!</h2>
            <h3 className='subtitle'>Мы решили пожениться!</h3>
            <p className='text'>Это приглашение на&nbsp;нашу свадьбу! Если ты&nbsp;его читаешь, значит ты&nbsp;в&nbsp;списке тех, с&nbsp;кем мы&nbsp;хотим разделить наш особенный день!</p>
            <p className='text'>Свадьба состоится 11&nbsp;августа. Дополнительную инфу ты&nbsp;найдешь в&nbsp;шапке на&nbsp;фото.</p>
            <p className='text'>Чтобы нам было легче организовать праздник, пройди, пожалуйста, опрос.</p>
            <h3 className='subtitle'>Главный вопрос: сможешь&nbsp;ли ты&nbsp;прийти?</h3>
            <div className='buttons__wrp'>
              <button
                className='btn btn--purple'
                onClick={answerYes}
              >да
              </button>
              <button
                className='btn btn--orange'
                onClick={answerNo}
              >нет
              </button>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default InvitePage;

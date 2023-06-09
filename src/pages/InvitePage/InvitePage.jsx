import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from "react-router-dom";

import DataContext from "../../UserInfoContext";

import styles from "./InvitePage.module.css"
import flowers from "../../img/flowers.png";
import InputForm from "../../components/InputForm/InputForm";


const InvitePage = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)
  // console.log(userInfo.img)
  const [user, setUser] = useState({})

  const clear = () => {
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    // console.log(savedUser)
    if (!savedUser) {
      return navigate('/')
    }
    setUser(savedUser)
  }, [navigate])

  return (
    <div className={styles.page}>
      <div className={styles.menu}>
      </div>
      <img className={styles.img} src={`http://backend.rakulagin.com${user.img}`} alt="наше фото"/>
      <div className={styles.content}>
        <h3 className={styles.header}> {user.nickname}!</h3>
        <p className={styles.text}>Это приглашение на нашу свадьбу! Если ты это читаешь, значит ты в списке тех,
          с кем мы хотим разделить наш особенный день!</p>
        <p className={styles.text}>Мы ждем тебя с ТВОЕЙ ВТОРОЙ ПОЛОВИНКОЙ
          11 августа, в пятницу, в ЗАГС Октябрьского района,
          "Теремок", по адресу г. Самара, ул. Молодогвардейская, дом 238.</p>
        <p className={styles.text}>Дополнительную инфу ты можешь узнать в шапке над фото.</p>
        <p className={styles.text}>Чтобы нам было легче организовать праздник, пройди, пожалуйста, опрос.</p>
        <button onClick={clear}>очистить</button>
      </div>
    </div>
  );
};

export default InvitePage;

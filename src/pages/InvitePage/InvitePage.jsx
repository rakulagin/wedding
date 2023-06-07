import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import styles from "./InvitePage.module.css"


const InvitePage = () => {

  const navigate = useNavigate()
  // const {userInfo, setUserInfo} = useContext(DataContext)
  // console.log(userInfo.img)
  const [user, setUser] = useState({})

  const clear = () => {
    localStorage.clear()
  }

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem('user'))
    // console.log(savedUser)
    if(!savedUser) {
      return navigate('/')
    }
    setUser(savedUser)
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        header
      </div>
      <div className={styles.photo}>
        <img src={`http://backend.rakulagin.com${user.img}`} alt="наше фото"/>
      </div>
      <div className={styles.invite}>
        <h3> {user.nickname}!</h3>
        {/*<p>{user.firstName}</p>*/}
        <p>Это приглашение на нашу свадьбу! Если ты это читаешь, значит ты в списке тех, с кем мы хотим разделить наш особенный день!</p>
      </div>
      <div className={styles.question}>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <button>send</button>
      </div>
      <button onClick={clear}>очистить</button>
    </div>
  );
};

export default InvitePage;

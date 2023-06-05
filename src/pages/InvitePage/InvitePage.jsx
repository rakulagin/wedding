import React, {useContext} from 'react';

import styles from "./InvitePage.module.css"

import DataContext from "../../UserInfoContext";

const InvitePage = () => {

  const {userInfo, setUserInfo} = useContext(DataContext)

  console.log(userInfo.img)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        header
      </div>
      <div className={styles.photo}>
        <img src={`http://backend.rakulagin.com${userInfo.img}`} alt="наше фото"/>
      </div>
      <div className={styles.invite}>
        <h3>Дорогая Алена</h3>
        <p>{userInfo.firstName}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illum iure non! Ab aliquam asperiores in ipsum maiores omnis perferendis quis, vel veniam. Ab consectetur doloribus ea, est exercitationem fuga.</p>
      </div>
      <div className={styles.question}>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <input type="radio" name="" id=""/>
        <button>send</button>
      </div>
    </div>
  );
};

export default InvitePage;

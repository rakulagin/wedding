import React from 'react';

import styles from "./InvitePage.module.css"
import Modal from "../../components/Modal/Modal";

const InvitePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        header
        <Modal/>
      </div>
      <div className={styles.photo}>
        photo
      </div>
      <div className={styles.invite}>
        <h3>Дорогая Алена</h3>
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

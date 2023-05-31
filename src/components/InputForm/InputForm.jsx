import React from 'react';
import {useForm} from "react-hook-form";

import styles from './InputForm.module.css'

const InputForm = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>

      <input
        placeholder="Имя"
        className={styles.input}
        {...register("firstName")}
      />

      <input
        placeholder="Фамилия"
        className={styles.input}
        {...register("surName")}
      />
      <button className={styles.button} type="submit" >отправить</button>
    </form>
  );
};

export default InputForm;

import React from 'react';
import {useForm} from "react-hook-form";


import styles from './InputForm.module.css'

const InputForm = ({onButtonSubmit}) => {

  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onButtonSubmit)}>
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
      <button className='btn btn--purple' type="submit" >отправить</button>
    </form>
  );
};

export default InputForm;

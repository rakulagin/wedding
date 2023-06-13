import React from 'react';
import {useForm} from "react-hook-form";
import axios, {post} from "axios";

import questions from '../../questions.json'

const Interview = () => {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem('user'))

    const newObj = {
      ...savedUser, ...data
    };

    console.log(newObj)

    // axios.patch(`http://backend.rakulagin.com/question/${savedUser._id}`, newObj)
    //   .then(data => console.log(data))
  }

console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        {questions.map((question, index) =>
          <div key={index}>
            <h2>{question.question}</h2>
            {question.value.map((value, id) => (
              <label key={id}>
                <input
                  type="radio"
                  value={value}
                  {...register(question.name, {required: true})}
                />
                <span>{question.answers[id]}</span>
              </label>
            ))}
            {errors[index] && <p>Обязательное поле</p>}
          </div>
        )}

        {/*сможешь ли прийти*/}
        {/*<div className="input__block">*/}
        {/*  <h2 className="input__question">Главный вопрос: сможешь ли ты прийти?</h2>*/}
        {/*  <label className="input__radio">*/}
        {/*    <input*/}
        {/*      className="input__radio"*/}
        {/*      type="radio"*/}
        {/*      value="true"*/}
        {/*      {...register("accept", {required: true})}*/}
        {/*    />*/}
        {/*    <span className="input__answer">Да</span>*/}
        {/*  </label>*/}

        {/*  <label className="input__radio">*/}
        {/*    <input*/}
        {/*      className="input__radio"*/}
        {/*      type="radio"*/}
        {/*      value="false"*/}
        {/*      {...register("accept", {required: true})}*/}
        {/*    />*/}
        {/*    <span className="input__answer">Нет</span>*/}
        {/*  </label>*/}
        {/*  {errors.accept && <p>Обязательное поле</p>}*/}
        {/*</div>*/}



        <input
          className={isValid ? "btn btn-white-blue" : "btn btn-disabled"}
          type="submit"
          value="Продолжить"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default Interview;



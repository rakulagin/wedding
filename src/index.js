import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import DataContext from "./UserInfoContext";

import './index.css';
import App from './App';

function Main() {
  const [userInfo, setUserInfo] = useState(
    {
      id: '',
      firstName: '',
      surName: '',
      img: '',
      accept: '',
      pair: '',
      place: '',
      car: '',
      capacity: '',
      vine: '',
      spirit: '',

      // user: {
      //   name: "",
      //   gender: "",
      //   year: "",
      //   relationship: "",
      //   city: "",
      //   height: "",
      //   weight: "",
      //   education: ""
      // },
      // answers: []
    }
  )

  return (
    <DataContext.Provider value={{userInfo, setUserInfo}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import DataContext from "./UserInfoContext";

import './index.css';
import App from './App';

function Main() {
  const [userInfo, setUserInfo] = useState(
    {}
  )

  return (
    <DataContext.Provider value={{userInfo, setUserInfo}}>
      <HashRouter>
        <App />
      </HashRouter>
    </DataContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

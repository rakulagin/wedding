import React from "react";
import {Routes, Route} from 'react-router-dom'

import MainPage from "./pages/MainPage/MainPage";
import InvitePage from "./pages/InvitePage/InvitePage";
import Interview from "./pages/Interview/Interview";

import './app.css'

import Layout from "./components/Layout/Layout";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>}/>
      <Route path="invite" element={<InvitePage/>}/>
      <Route path="interview" element={<Interview/>}/>
      </Route>
    </Routes>
  );
}

export default App;

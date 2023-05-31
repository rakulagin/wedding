import React from "react";
import { Routes, Route} from 'react-router-dom'


import MainPage from "./pages/MainPage/MainPage";
import InvitePage from "./pages/InvitePage/InvitePage";


function App() {

  return (
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="invite" element={<InvitePage/>}/>
    </Routes>
  );
}

export default App;

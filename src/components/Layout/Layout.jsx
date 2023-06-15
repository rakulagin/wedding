import React from "react";
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='page'>
      <Outlet/>
    </div>
  )
}

export default Layout
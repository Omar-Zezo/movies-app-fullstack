import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../utils/Navbar'
import Notify from '../utils/Notify'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Notify/>
    </>
  )
}

export default Layout
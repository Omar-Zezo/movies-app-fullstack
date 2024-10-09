import React from 'react'
import { Outlet } from 'react-router-dom'
import Notify from '../utils/Notify'

const AuthLayout = () => {
  return (
    <>
    <Outlet/>
    <Notify/>
    </>
  )
}

export default AuthLayout
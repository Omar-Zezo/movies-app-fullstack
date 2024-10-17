import React, { createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../utils/Navbar'
import useWishlist from '../hooks/wishlist'

// Global state for wishlist add/remove
export const WishlistContext = createContext()

const Layout = () => {
const {removeFromList, addToList} = useWishlist()
  return (
    <>
    <Navbar/>
    <WishlistContext.Provider value={{removeFromList, addToList}}>
    <Outlet/>
    </WishlistContext.Provider>
    </>
  )
}

export default Layout
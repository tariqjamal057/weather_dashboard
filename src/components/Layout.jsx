import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='flex w-full'>
        <Navbar/>
        <div className='flex flex-col w-full p-4 bg-gray-50 relative overflow-x-hidden min-h-screen'>
            <Header/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default Layout
import React from 'react'
import Navbar from './sidebar/Navbar'
import Header from './Header'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='flex w-full'>
        <Navbar/>
        <div className='flex-1'>
            <main className='flex flex-col w-full p-4 bg-blue-100 relative overflow-x-hidden min-h-screen'>
                <Header/>
                {children}
                <Footer/>
            </main>
        </div>
    </div>
  )
}

export default Layout
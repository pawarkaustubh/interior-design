import React from 'react'
import Header from './_components/Header';

function DashboardLayout({children}) {
  return (
    <div>
      <Header/>
      <div className='pt-5 px-5 pb-5 md:px-10 lg:px-20 xl:px-30'>
        {children}
      </div>
      
    </div>
  )
}

export default DashboardLayout;

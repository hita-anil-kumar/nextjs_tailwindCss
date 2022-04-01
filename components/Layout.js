import React from 'react'
import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <div className='w-full max-w-lg m-auto'>
       <Nav/>
            {children}
        </div>
        
    )
}
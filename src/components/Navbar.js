import React from 'react'
import '../index.css'
import logo from '../images/logo.jpeg'

const Navbar = () => {
    return (
        <div >
        <div className='grid md:grid-cols-2 md:grid-rows-1 gap-10 sm:grid-col-1 sm:grid-rows-2 items-center h-45'>
            <div className='grid text-center justify-items-center mt-10 border-r-2 border-stone-600'>
                <img className='object-scale-down h-50 w-96 rounded-full p-1.5' src={logo} alt='logo' />
            </div>
            <div className='grid text-center justify-items-center'>
                <div className='capitalize text-5xl font-medium leading-relaxed lg:text-7xl text-stone-800 '>
                    Prakruti's Kitchen
                    <p className='font-light text-xl '>It's all about food here...</p>
                </div>
                <div>
                    <button type='button' className='mt-10 lg:mr-5 mr-1 rounded-full bg-gradient-to-r from-stone-500 p-4 '><a href='https://instagram.com/prakrutis_kitchen?utm_medium=copy_link'>Go to Instagram Page</a></button>
                    <button type='button' className='mt-10 rounded-full bg-gradient-to-r from-stone-500 p-4 '><a href='https://m.youtube.com/channel/UCY93Wl1gDCK1ATAlQtgNDbg'>Visit our Youtube channel</a></button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Navbar

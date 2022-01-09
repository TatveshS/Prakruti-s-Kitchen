import React from 'react'
import '../index.css'
import pras from '../images/Prasiddhi.jpg'
import krut from '../images/Krutika.jpg'
import momos from '../images/Momos.jpeg'
import mirchi from '../images/Mirchi.jpeg'


const Content = () => {
    return (
        <>
        <hr className='mt-10' />
        <div className='grid gap-2 grid-rows-2 justify-center items-center sm:mb-5 -mt-3 '>
            <div className=' container p-10 lg:p-32  mt-15 text-5xl font-medium leading-relaxed lg:text-7xl text-stone-800 text-center '>
                Who are we?
                <hr className='md:w-1/5 md:mx-auto md:my-3 lg:hidden' />
                <p className='font-light text-xl lg:mt-4 hover:text-2xl transition-all ease-in-out  '>
                    One day 2 engineering students decided to open a Food channel 
                    <br/> on Youtube and uploaded their first video , 
                    and from that day not even single we spared without posting 
                    on instagram.<br />
                    Now we are family of 3k+ on Instagram and growing at very fast speed.
                </p>
            </div>
            <div className='-mt-12 mb-10 grid md:grid-cols-2 md:grid-rows-1 gap-6 grid-col-1 grid-rows-2 justify-items-center item-center text-center md:px-3 px-7 '>
                <div className='rounded overflow-hidden shadow-xl max-w-sm '>
                    <img src={pras} alt='Prasiddhi' />
                    <p className='bg-green-100 italic py-2'> <strong>Prasiddhi Raikar</strong> <br /> BE Electrical <br/> Goa <br /></p>
                </div>
                <div className='rounded overflow-hidden shadow-xl max-w-sm '>
                    <img src={krut} alt='Krutika' />
                    <p className='bg-green-100 italic py-2'> <strong>Krutika Ghadi</strong> <br /> BE Computer <br/> Goa  </p>
                </div>
                
            </div>
        </div>

        {/* Content */}

            <br />
            <hr className='' />

            <h1 className=' p-10 lg:p-32  mt-5 text-5xl font-medium leading-relaxed lg:text-7xl text-stone-800 text-center'> We Cook Food...</h1>

    
            <div className=' mb-10 grid md:grid-cols-3 md:grid-rows-1 gap-6 grid-col-1 grid-rows-3 justify-items-center item-center text-center md:px-3 px-12 '>
                <div className='rounded overflow-hidden shadow-xl max-w-sm '>
                    <img src={momos} alt='momos' />
                    <p className='bg-green-100 italic py-2'> <strong>Prasiddhi Raikar</strong> <br /> BE Electrical <br/> Goa <br /></p>
                </div>
                <div className='rounded overflow-hidden shadow-xl max-w-sm '>
                    <img src={mirchi} alt='mirchi' />
                    <p className='bg-green-100 italic py-2'> <strong>Krutika Ghadi</strong> <br /> BE Computer <br/> Goa  </p>
                </div>
                <div className='rounded overflow-hidden shadow-xl max-w-sm '>
                    <img src={momos} alt='thali' />
                    <p className='bg-green-100 italic py-2'> <strong>Krutika Ghadi</strong> <br /> BE Computer <br/> Goa  </p>
                </div>
                
            </div>
        
        </>
    )
        
}

export default Content

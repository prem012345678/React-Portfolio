import React, { useEffect, useRef } from 'react'
import './Home.css'
import Typed from 'typed.js'
const Home = () => {
    let typedRef=useRef(null)
useEffect(()=>{
    const options={
        strings:['Welcome to my profile','My name is Rakesh Singh','I am Frontend Web Developer'],
typeSpeed:50,
backSpeed:50,
loop:true
    }
    const typed=new Typed(typedRef.current,options)
    return ()=>{
        typed.destroy()
    }
},[])
    return (
        <>
            <div className='home' id='home'>
                <div className='left' data-aos="fade-up-right" data-aos-duration='1000'>
                    <h1 ref={typedRef}>I am frontend developer</h1>
                    <a href='/asset/resume.pdf' download={'resume'}><button>download resume</button></a>
                </div>
                <div className='right' data-aos="fade-up-left"  data-aos-duration='1000'>
                    <div className='image'>
                        <img src='hero.avif' alt='hero' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

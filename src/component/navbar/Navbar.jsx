import React from 'react'
// import './nav.css'
import style from './Nav.module.css'
const Navbar = () => {
    return (
        <>
            <nav className=
          { `${style.nav_bar} container `}
            data-aos="fade-down" 
            data-aos-duration="1000" >
                <div className={`${style.left}`}>Portfolio</div>
                <div className={style.rights}>
                    <a href='#home' className='nav_item'>Home</a>
                    <a href='#about' className='nav_item'>About</a>
                    <a href='#skills' className='nav_item'>Skills</a>
                    <a href='#project' className='nav_item'>Project</a>
                    <a href='#contact' className='nav_item'>Contact</a>

                </div>
            </nav>
        </>
    )
}

export default Navbar

import React from 'react'
import style from './contact.module.css'
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className={style.contact} id='contact'>
        <h2>Contact me</h2>
        <div className={style.main} data-aos="zoom-in-up" data-aos-duration='1000'>
<a href='https://www.github.com' target='_blank' className={style.icon}><FaGithub/></a>
<a href='https://www.linkedIn.com' target='_blank' className={style.icon}><CiLinkedin/></a>
<a href='mailto:srakesh057@gmail.com' target='_blank' className={style.icon}><MdOutlineEmail/></a>
        </div>
      </div>
    </>
  )
}

export default Contact

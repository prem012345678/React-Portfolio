import React from 'react'
import skills from '../skill/skills.json'
import style from './Skill.module.css'
const Skill = () => {
    
  return (
    <>
<div className={style.skill} id='skills'>
<h2>Skills</h2>
<div  className={style.box}>
{
    skills.map((data)=>{
         return   <div key={data.id} className={style.item} data-aos="flip-up"  data-aos-duration='1000'>
            <img src={`${data.imageSrc}`}/>
            <h4>{data.title}</h4>
        </div>
       
    })
}
</div>
</div>      
    </>
  )
}

export default Skill

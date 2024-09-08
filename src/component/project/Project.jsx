
import React from 'react'
import Projects from '../project/projects.json'
import style from './Project.module.css'
const Project = () => {
  console.log(Projects);
  
  return (
    <>
      <div className={style.project} id='project'>
<h2>Project</h2>
<div className={style.cols3}>
  {
    Projects.map((data)=>{
      return <div key={data.id} className={style.card}  data-aos="flip-right"  data-aos-duration='1000'>
        <div className={style.image}>
          <img src={data.imageSrc}/>
        </div>
        <div className={style.title}> {data.title} </div>
        <div className={style.description}> {data.description} </div>
        <div className={style.btn}>
        
          <button><a href={data.demo}>demo</a></button>
          <button><a href={data.source}>code</a></button>
        </div>
      </div>
    })
  }
</div>
      </div>
    </>
  )
}

export default Project

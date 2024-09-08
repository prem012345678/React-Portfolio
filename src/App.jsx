import React, { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
// import Skill from './skill/Skill'
import Project from './component/project/Project'
import Skill from './component/skill/Skill'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Contact from './component/contact/Contact'


const App = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact/>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import style from './About.module.css'
import images from "/hero.avif"
const About = () => {
    return (
        <>
            <div className={style.main} id='about'>

                <div className={style.about}>
                    <div className={style.left}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className={style.image}>
                            <img src={images} alt='hero' />
                        </div>
                    </div>
                    <div className={style.right}>
                        <h2><span >About</span> Me</h2>
                        <h3>Frontend Developer</h3>
                        <div className={style.detail} data-aos="zoom-in-left" data-aos-duration='2000'>
                            <p>
                                My name is Rakesh singh, an aspiring Frontend Developer .
                                I recently graduated with a degree in Bachelor of Computer Application from Asian Intenational University,Manipur
                                and developed a strong passion for web development during my studies.
                                I love the combination of creativity and technology that comes
                                with building engaging user interfaces.</p>
                            <p>
                                I have experience with HTML, CSS, and JavaScript, and I’m currently
                                exploring frameworks like React to enhance my skills further.
                                Throughout my academic career, I worked on several projects, including
                                Collage Website using JavaScript,Ecommerce Website using React.
                                These experiences strengthened my ability to create responsive and
                                user-friendly web applications.
                            </p>
                            <p>
                                I am eager to start my career in frontend development and am actively
                                looking for internships or entry-level positions where I can apply my
                                skills and continue to learn in a team environment.
                            </p>

                            <p>
                                I am excited about the opportunity to contribute to projects that make the web
                                a better place while growing my skill set in this dynamic field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About






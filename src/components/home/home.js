import './home.css'
import TextTyper from 'text-type-animation-effect-react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Home(){

    useEffect(()=>{
        AOS.init({duration: 2000})
        
    },[])

    return(
        <div id="home">
            <section>
                <div id="photo">
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <div id="text">
                <TextTyper text={"Hii ,Vidit Tamrakar this side !"} interval={70} Markup={"h1"} />
                </div>
            </section>
            <div id="about" data-aos ={"fade-up"}>
                <p>A passionate second-year BTech student majoring in Computer Science at Jaypee University Of Engineering And Technology Guna. I specialize in the MERN stack and am deeply enthusiastic about web development.
                 My journey in the world of technology began with an insatiable curiosity to understand how things work, which eventually led me to delve into the intricate realm of software development. Through my coursework and extracurricular projects, I've gained a strong foundation in JavaScript, React.js, Node.js, Express.js, and MongoDB—the essential components of the MERN stack.
                 Beyond the classroom, I actively seek opportunities to expand my knowledge and skills. I've engaged in diverse projects that have honed my problem-solving abilities and enhanced my understanding of creating robust, user-centric web applications.I am currently seeking opportunities to apply and expand my skills in a professional setting, where I can contribute meaningfully and continue to learn and grow as a MERN stack developer.
                Thank you for visiting my profile, and I look forward to connecting and exploring potential collaborations. </p>
            </div>
        </div>
    )
}

export default Home;
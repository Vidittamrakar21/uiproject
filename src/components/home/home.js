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
                <TextTyper text={"Hey ,Vidit Tamrakar this side !"} interval={70} Markup={"h1"} />
                </div>
            </section>
            <div className="about upp" data-aos ={"fade-up"}>
                <p>A passionate full-stack web developer currently pursuing a Bachelor's in Computer Science Engineering at JUET GUNA.  My expertise lies in crafting elegant and intuitive user interfaces paired with robust backend solutions using React.js and Node.js.</p>
            </div>

            <div className="about" data-aos ={"fade-up"}>
                <p>Driven by a love for coding, I devote my time honing my skills to create seamless, engaging web experiences. Whether it's designing captivating UIs or architecting scalable backend systems, I thrive on bringing ideas to life through innovative technology. With a keen eye for detail and a deep understanding of frontend and backend development, I aim to build user-centric, efficient applications that make a meaningful impact in the digital world.</p>
            </div>
            
            <div className="about" data-aos ={"fade-up"}>
                <p>Outside of coding, I thrive on exploring the latest tech innovations and staying abreast of industry advancements. I find immense joy in collaborative ventures, where I can engage with like-minded individuals to tackle projects that push the boundaries of what's possible. My journey in development is an ongoing adventure, fueled by boundless curiosity and a relentless pursuit of growth.</p>
            </div>

            <div id="line">

            </div>
            <div className="circle" id='c1'></div>
            <div className="circle" id='c2'></div>
            <div className="circle" id='c3'></div>
        </div>
    )
}

export default Home;
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Project(){

    useEffect(()=>{
        AOS.init({duration: 2000})
        
    },[])

    function blog(){
        window.location.href = "https://blognes7.vercel.app/"
    }

    function quiz(){
        window.location.href = "https://quizveera2.vercel.app/"
    }

    function movie(){
        window.location.href = "https://flicket.vercel.app/"
    }



    return(
        <div id='pro'>
           
            <section>
                <div className="project inc" data-aos ={"zoom-in"} onClick={movie}>
                    <div className="proj">
                        <img src="/images/Screenshot 2024-01-05 182443.png" alt="" />
                    </div>
                    <h3>Flicket</h3>
                    <p>A fully fledged movie show booking web application built with MERN Stack. For Backend 🚀 <br />I've used Node.js , Express.js for creating server and APIs <br />As API of theatres and movies was not available for me , I created all the APIs by my itself that's why, the movies listed are old because, I started making APIs 1.5 months back and by seeing the complexity, I created for only 4 cities of Madhya Pradesh ie Jabalpur, Indore, Bhopal and Gwalior.<br />For payment, I integrated Razor pay Gateway, currently it is working in test environment
                    <br />For authentication, I've used firebase and JWT  <br />For Frontend<br />I've used React.js , Redux , and few npm packages.I took the reference for UI from BookMyShow I aslo implemented movie filtering feature and searching feature .<br /> </p>
                </div>

                <div className="project top" data-aos ={"zoom-in"} onClick={blog}>
                    <div className="proj">
                        <img src="/images/Screenshot 2023-11-25 234957.png" alt="" />
                    </div>
                    <h3>BlogNest</h3>
                    <p>A complete Blogging web-app created with MERN stack. Features 🚀 <br />text editor <br />Search blogs by topic name <br />Infinite Scroll<br />JWT Authentication <br />like/comment<br />save a blog<br />view profile of the user<br />upload profile photo </p>
                </div>

                <div className="project" data-aos ={"zoom-in"} onClick={quiz}>
                <div className="proj">
                    <img src="/images/Screenshot 2023-11-25 234901.png" alt="" />
                </div>
                <h3>Quizveera</h3>
                <p>A Quiz web-app created with MERN stack. <br /> Features 🚀 <br/>Create your own quiz according to the subject <br /> Unique join code is generated <br /> With that join code, quiz participants joins and give quiz from anywhere </p>
                </div>
            </section>
        </div>
    )
}

export default Project;
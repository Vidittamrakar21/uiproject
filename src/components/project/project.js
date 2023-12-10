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



    return(
        <div id='pro'>
           
            <section>
                <div className="project" data-aos ={"zoom-in"} onClick={blog}>
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
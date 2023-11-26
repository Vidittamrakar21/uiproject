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
            <h1>Here Are My Two Major Projects</h1>
            <section>
                <div className="project" data-aos ={"zoom-in"} onClick={blog}>
                    <div className="proj">
                        <img src="/images/Screenshot 2023-11-25 234957.png" alt="" />
                    </div>
                    <h3>BlogNest</h3>
                </div>
                <div className="project" data-aos ={"zoom-in"} onClick={quiz}>
                <div className="proj">
                    <img src="/images/Screenshot 2023-11-25 234901.png" alt="" />
                </div>
                <h3>Quizveera</h3>
                </div>
            </section>
        </div>
    )
}

export default Project;
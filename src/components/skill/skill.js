import './skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Skill(){
    useEffect(()=>{
        AOS.init({duration: 2000})
        
    },[])


  

    return(
        <div id='skill'>
            <h1>My Tech Stack</h1>
            <div id="icon">
                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/html.png" alt="" />
                </div>
                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/css.png" alt="" />
                </div>
                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/js.png" alt="" />
                </div>
                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/git.png" alt="" />
                </div>
                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/vs.png" alt="" />
                </div>

                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/logo192.png" alt="" />
                </div>
               
                <div className="mon"data-aos ={"zoom-in"}>
                    <img src="/images/redux.png" alt="" />
                </div>


                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/node.png" alt="" />
                </div>

                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/exp.png" alt="" />
                </div>

                <div className="mon" data-aos ={"zoom-in"}>
                    <img src="/images/mongo.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Skill;
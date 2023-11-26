import './lab.css';
import { useState } from 'react';

function Lab(){
    const [folder,showfolder ] = useState(true)
    const [ulab3,show3 ] = useState(false)
    const [ulab2,show2 ] = useState(false)
    const [ulab5,show5 ] = useState(false)
    const [ulab8,show8 ] = useState(false)

    const lab4 = "/UIUX/lab4/221b440_lab4_Pierce.pdf"
    const lab7 = "/UIUX/lab7_juetpage/index.html"
    const openLabFolder = () => {
        window.open(lab4, '_blank');
      };
    const openLab7Folder = () => {
        window.open(lab7, '_blank');
      };

    const openLab3Folder = () => {
        showfolder(false)
        show3(true)
        show2(false)
        show5(false)
        show8(false)

      };
    const openLab5Folder = () => {
        showfolder(false)
        show5(true)
        show3(false)
        show2(false)
        show8(false)
      };

    const openLab2Folder = () => {
        showfolder(false)
        show2(true)
        show3(false)
        show5(false)
        show8(false)

      };

    const openLab8Folder = () => {
        showfolder(false)
        show8(true)
        show3(false)
        show2(false)
        show5(false)
        

      };

    return(
       <div className="bab">
             <div  className={folder?"lab":"gayab"} >

                <div className="item" onClick={openLab2Folder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 2</h4>
                </div>

                <div className="item" onClick={openLab3Folder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 3</h4>
                </div>

                <div className="item" onClick={openLabFolder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 4</h4>
                </div>

                <div className="item" onClick={openLab5Folder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 5</h4>
                </div>

                <div className="item" onClick={openLab7Folder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 7</h4>
                </div>

                <div className="item" onClick={openLab8Folder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-folder2-open" viewBox="0 0 16 16">
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                </svg>
                <h4>Lab 8</h4>
                </div>
        </div>

        <div className={ulab2?"lab2":"gayab"}>
                    <a href="/UIUX/lab2/221b440_lab2_ Concatenation.jpg">img1</a>
                    <a href="/UIUX/lab2/221b440_lab2_back_color_edit.jpg">img2</a>
                    <a href="/UIUX/lab2/221b440_lab2_clone.jpg">img3</a>
                    <a href="/UIUX/lab2/221b440_lab2_color_manipulation.jpg">img4</a>
                    <a href="/UIUX/lab2/221b440_lab2_eraser.jpg">img5</a>
                    <a href="/UIUX/lab2/221b440_lab2_image_crop.jpg">img6</a>
                    <a href="/UIUX/lab2/221b440_lab2_imager_resize.jpg">img7</a>
                    <a href="/UIUX/lab2/221b440_lab2_operation5(moving image).jpg">img8</a>
                    <a href="/UIUX/lab2/221b440_lab2_save_in_jpg.jpg">img9</a>
                    <a href="/UIUX/lab2/221b440_lab2_text.jpg">img10</a>
                </div>

                <div className={ulab3?"lab3":"gayab"} >
                    <a href="/UIUX/lab3/221b440_lab3_ magnify.jpg">img1</a>
                    <a href="/UIUX/lab3/221b440_lab3_hair_color.jpg">img2</a>
                </div>

                <div className={ulab5?"lab5":"gayab"}>
                  
                    <a href="/UIUX/lab5/221b440_lab5_pencil.pdf">pdf1</a>
                    <a href="/UIUX/lab5/221b440_lab5_play_button.pdf">pdf2</a>
                </div>

                <div className={ulab8?"lab8":"gayab"}>
                    <a href="/UIUX/Lab-8/1-How to Configure IIS.pdf">pdf1</a>
                    <a href="/UIUX/Lab-8/3-How to Uninstall IIS.pdf">pdf2</a>
                </div>
       </div>
    )
  }


export default Lab;
import React, { useState } from 'react';
import "./First.scss"
import SecondPage from '../second/SecondPage';
const First = () => {
    const [isSecondPage, setIsSecondPage] = useState(false)
    const toggleSecondPage = () => {
        setIsSecondPage(!isSecondPage);
    };
    return (
        <> {!isSecondPage && (
            <div className='container-first'>
                <div className='img-avatar'>
                    <img src="https://mindlerimages.imgix.net/mip-web/Mindler_Internship.png" alt="" />
                </div>
                <div className='heading'>AI CHATBOT</div>
                <div className='card'>
                    <p>Hi! You can ask me anything</p>
                    <button className='btns' onClick={toggleSecondPage}>Ask Now</button>
                </div>

            </div>
        )}
            {
                isSecondPage && <SecondPage isSecondPage={isSecondPage} setIsSecondPage={setIsSecondPage} />

            }
        </>
    );
};

export default First;
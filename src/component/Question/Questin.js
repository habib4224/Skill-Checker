import React from 'react';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questin = ({ qq }) => {
    const { question, correctAnswer } = qq;


    const eyebutton = (correctAnswer) => toast(`${correctAnswer}`, { position: "top-center" });

    const slcbtn = (opton) => {
        if (opton === correctAnswer) {
            toast("Your Answer Right", { position: "top-center" });
        }
        else {
            toast("Your Answer Wrong", { position: "top-center" });
        }

    }


    return (
        <div>
            <div className='quiz'>
                <div className='Eyebtn'>
                    <div> <h5 >{question}</h5></div>
                    <button onClick={() => eyebutton(correctAnswer)}><EyeIcon className="h-6 w-6 text-blue-500" /></button>
                </div>
                <div className='Qoptions'>
                    {
                        qq.options.map(opton => <button className='Opbtn' onClick={() => slcbtn(opton)}>{opton}</button>)

                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Questin;
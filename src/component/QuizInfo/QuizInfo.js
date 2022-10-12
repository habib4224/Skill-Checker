import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questin from '../Question/Questin';
import './QuizInfo.css'


const QuizInfo = () => {
    const eachQuiz = useLoaderData();

    const { data } = eachQuiz;
    return (
        <div className='Qallpart'>
            <h2 className='Qtext'>Quiz On: {data.name}</h2>
            <div>
                {
                    data.questions.map(qq => <Questin key={qq.id} qq={qq}></Questin>

                    )

                }
            </div>
        </div >
    );
};

export default QuizInfo;
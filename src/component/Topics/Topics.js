import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizBox from '../QuizBox/QuizBox';
import './Topics.css'

const Topics = () => {
    const cour = useLoaderData();
    const { data } = cour;
    return (
        <div>
            <div className='Category'>
                {
                    data.map(
                        each => <QuizBox key={each.id} each={each}></QuizBox>,
                    )
                }
            </div>
        </div>
    );
};

export default Topics;
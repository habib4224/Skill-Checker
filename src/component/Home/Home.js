import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import QuizBox from '../QuizBox/QuizBox';
const Home = () => {
    const cour = useLoaderData();
    const { data } = cour;
    return (
        <div>
            <div className='hdcls'>
                <Header></Header>

            </div>
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

export default Home;
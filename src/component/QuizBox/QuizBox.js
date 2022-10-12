import React from 'react';
import { Link } from 'react-router-dom';
import './QuizBox.css';

const QuizBox = ({ each }) => {
    const { id, name, logo, total } = each;
    return (
        <div>
            <div className='Cart'>
                <div className='images'><img src={logo} alt="" /></div>
                <h5> {name}</h5>
                <h5>Total Question: {total}</h5>
                <Link to={`/single/${id}`}><button className='QBtn text-white'>Show Quiz</button></Link>


            </div>
        </div>
    );
};

export default QuizBox;
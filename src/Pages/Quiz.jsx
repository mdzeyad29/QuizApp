import React from 'react'
import {Quizs} from "../component/Quizs/quiz"
import { useLocation } from 'react-router-dom';
export const Quiz = () => {
    const location = useLocation();
    const {name} = location.state || { name:'Student'}
    return (
        <div>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-center text-4xl'>
                    <div>
                        <h4>Welcome ! <span className='gap-2 ml-3'>{name}</span></h4>
                    </div>
                </div>
                <div className='quiz-body'>
                  <div className='' id='question'>
                  {
                    <Quizs/>
                }
                  </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ResultPage = () => {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400">
      <div className="p-6 text-center bg-white rounded-lg shadow-2xl">
        <div className="mb-4 text-4xl font-semibold p-7">You got this Score</div>
        {
          score>5? (
            <div className='flex flex-col'>
            <span className="text-4xl font-bold text-blue-600">{score}</span>
            <span className="text-4xl font-bold text-blue-600">Good</span>
            <Link to={"/"}>
            <button 
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
           >
          Home
          </button>
          </Link>
            </div>
          ):(
           <div className='flex flex-col gap-2'>
            <span className="text-4xl font-bold text-blue-600">{score}</span>
            <span className="text-4xl font-bold text-black">You need To Practice</span>
            <Link to={"/quiz"}>
            <button 
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
           >
           Again
          </button>
            </Link>
            </div>
          )
        }
       
      </div>
    </div>
  );
};
 
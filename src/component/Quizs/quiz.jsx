import React, { useState } from 'react';
import question from "../../data";
import { useNavigate } from 'react-router-dom';

export const Quizs = () => {
  const [ques] = useState(question);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [correct,setCorrect]= useState(1);
const navigate = useNavigate();
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % ques.length);
  };
const showResult = ()=>{
  navigate("/result",{ state: { score: correct} })
}
  const element = ques[currentQuestionIndex];
  const HandlecorrectOption = (selectedOption)=>{
    const correctAnswer = ques[currentQuestionIndex];
    if(selectedOption===correctAnswer.answer){
      setCorrect(correct+1);
      
    }else{
      setCorrect(correct-1);
    }

    if (currentQuestionIndex < ques.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/result", { state: { score: correct } });
    }
  }

  return (
    <div className='flex justify-center p-4'>
      <div className='flex flex-col items-center w-full max-w-lg gap-4 p-6 bg-white border rounded-lg shadow-lg'>
        <div className="text-4xl font-semibold text-bg-gray-800">
          {element.id}
        </div>
        <div className="text-2xl text-center text-gray-700 ">
          {element.question}
        </div>
        <div className="flex flex-col w-full gap-2">
          {
            element.Option.map((option,index)=>(
             <button className='p-3 text-2xl rounded-md bg-slate-600 '
              key={index} 
             onClick={()=>HandlecorrectOption(option)}
             >{option}</button>    
            ))
        }
        </div>
        {
          currentQuestionIndex < ques.length-1?(<button 
            onClick={handleNextQuestion}
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700 "
           >
           Next
          </button>):(
            <button 
          onClick={showResult}
          className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
         >
          Submit
        </button>
          )
        }
        
      </div>
    </div>
  );
}

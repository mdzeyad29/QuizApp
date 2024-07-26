import React, { useState } from 'react'
import './Section.css'
import { IndeterminateProgressBar } from './Progressbar'
import { useNavigate } from 'react-router-dom';
export const Section = () => {
    const [clear,setClear] = useState('');
    const navigate = useNavigate();
    
    const HandleSubmit = (event) => {
        event.preventDefault();
        navigate("/quiz",{state: { name: clear} });
        setClear('');
    }
   

    return (
        <div>
            <div className='ph h-[100vh] text-white flex justify-center text-2xl items-center mb-5' >
                <form className='flex flex-col gap-3 w-[35%]' onSubmit={HandleSubmit}>
                    <h3 className=''>CONTESTENT NAME</h3>
                    <div className='progress'>
                        <div className='w-full mt-3 '>
                            <IndeterminateProgressBar />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type="text"
                            id="input-field"
                            className="w-full py-2 border-b-2 border-gray-300 outline-none focus:border-blue-500 bg-inherit"
                            placeholder="Name here"
                            onChange={(e) => setClear(e.target.value)}
                        />
                        <button className='text-center bg-blue-400 rounded' type="submit">Lets Start</button>
                    </div>
                    <div className='w-full flex flex-col  gap-3 text-[16px]'>
                        <h3 className='text-2xl text-center text-white bg-green-800'>Quiz Rules</h3>
                        <span className='text-black bg-white'>1.YOU CANNOT SKIP ANY QUESTION</span>
                        <span className='text-black bg-white'>2.YOU CANNOT GOTO PREVIOUS QUESTION</span>
                        <span className='text-black bg-white'>3.TRY ATTEMPTING ALL WITHOUT ANY HELP</span>
                    </div>
                    
                       
                </form>
            </div>
        </div>
    )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const ActivityInfo = (props) => {
    const { time } = props
    let breakTime = 0;
    const handleBreakbtn = (BreakTime) => {
        console.log(BreakTime);
        breakTime = BreakTime
    }
    console.log(breakTime);
    return (
        <div className='px-10 pt-12 text-white space-y-8'>
            <div>
                <img src="" alt="" />
                <div>
                    <h3 className='text-2xl font-medium'>Nazmul Hossain</h3>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Dhaka,Bangladesh</p>
                </div>

            </div>
            <div className='grid grid-cols-3 justify-items-center   rounded-2xl py-4 bg-pink-300'>
                <div>
                    <h1 className='text-4xl font-medium'>75<span className='text-2xl font-normal'>kg</span></h1>
                    <p className='text-2xl'>Weight</p>
                </div>
                <div>
                    <h1 className='text-4xl font-medium'>5.8</h1>
                    <p className='text-2xl'>Height</p>
                </div>
                <div>
                    <h1 className='text-4xl font-medium'>24<span className='text-2xl font-normal'>yrs</span></h1>
                    <p className='text-2xl'>Age</p>
                </div>
            </div>
            <h1 className='text-2xl '>Add a break</h1>
            <div className='grid grid-cols-5 justify-items-center bg-pink-300 p-4 rounded-2xl'>
                <div>
                    <button className='text-xl rounded-full hover:bg-gray-300 text-white hover:text-black p-2' onClick={() => handleBreakbtn(10)}>10m</button>
                </div>
                <div>
                    <button className='text-xl rounded-full  hover:bg-gray-300 text-white hover:text-black p-2' onClick={() => handleBreakbtn(20)}>20m</button>
                </div>
                <div>
                    <button className='text-xl rounded-full  hover:bg-gray-300 text-white hover:text-black p-2' onClick={() => handleBreakbtn(30)}>30m</button>
                </div>
                <div>
                    <button className='text-xl rounded-full  hover:bg-gray-300 text-white hover:text-black p-2' onClick={() => handleBreakbtn(40)}>40m</button>
                </div>
                <div>
                    <button className='text-xl rounded-full  hover:bg-gray-300 text-white hover:text-black p-2' onClick={() => handleBreakbtn(50)}>50m</button>
                </div>
            </div>
            <h1 className='text-2xl '>Exercise Details</h1>
            <div className=' grid grid-cols-2 justify-items-center bg-blue-300 py-4 rounded-2xl'>
                <h3 className='text-xl font-medium'>Excrcise time</h3>
                <h3 className='text-xl text-gray-200'>{time} Minute</h3>
            </div>
            <div className=' grid grid-cols-2 justify-items-center bg-blue-300 py-4 rounded-2xl'>
                <h3 className='text-xl font-medium'>Break time</h3>
                <h3 className='text-xl text-gray-200'>{breakTime ? breakTime : '00'}Minute</h3>
            </div>

            <button className='w-full bg-blue-600 py-4 rounded-2xl text-xl'>Activity Completed</button>


        </div>
    );
};

export default ActivityInfo;
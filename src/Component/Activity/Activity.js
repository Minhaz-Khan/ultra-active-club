import React from 'react';


const Activity = (props) => {
    const { activity, selectedActivity } = props
    const { picture, about, name, time } = activity;
    const handleAddbtn = (time) => {
        selectedActivity(time)
    }

    return (
        <div className="card w-11/12 w-96 bg-white rounded-md shadow-2xl pb-8 relative">
            <figure className="px-5 pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" space-y-2 text-center mx-5 mb-8">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p>{about}</p>
                <p className='text-xl'>Time required: {time}m</p>
                <div className="card-actions">
                    <button className="w-10/12 py-2 rounded bg-pink-300 font-medium absolute bottom-3 left-8" onClick={() => handleAddbtn(time)}>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Activity; 
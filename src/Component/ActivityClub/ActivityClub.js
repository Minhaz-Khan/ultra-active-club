import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityInfo from '../ActivityInfo/ActivityInfo';

const ActivityClub = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    const selectedActivity = (props) => {
        setTime(time + props)
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 '>
            <div className='col-span-12 lg:col-span-9  bg-blue-300 pb-20 lg:pl-8 space-y-7'>
                <h1 className='text-5xl mt-16 pl-2 lg:pl-10 font-medium'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Ways To Get Active</h1>
                <h2 className='text-3xl pl-2 lg:pl-10 '>Select todays exercise</h2>
                <div className='grid justify-items-center grid-cols-1 lg:grid-cols-3  gap-y-8 mx-0 lg:mx-10'>
                    {activities.map(activity => <Activity key={activity.id} activity={activity} selectedActivity={selectedActivity}></Activity>)}
                </div>
            </div>
            <div className='col-span-12 lg:col-span-3 bg-white'>
                <ActivityInfo time={time}></ActivityInfo>
            </div>
        </div>
    );
};

export default ActivityClub;
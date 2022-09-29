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
            <div className='col-span-9  bg-blue-300 pb-20 pl-14 space-y-7'>
                <h1 className='text-5xl mt-16'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Ways To Get Active</h1>
                <h2 className='text-3xl'>Select todays exercise</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-y-8'>
                    {activities.map(activity => <Activity key={activity.id} activity={activity} selectedActivity={selectedActivity}></Activity>)}
                </div>
            </div>
            <div className=' col-span-3 bg-pink-200'>
                <ActivityInfo time={time}></ActivityInfo>
            </div>
        </div>
    );
};

export default ActivityClub;
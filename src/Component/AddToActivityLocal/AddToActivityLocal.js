import React from 'react';

const AddToActivityLocal = (props) => {
    localStorage.setItem('BreakTime', props)
    return (
        <div>

        </div>
    );
};
const getLocalTime = () => {
    const LocalBreakTime = localStorage.getItem('BreakTime')
    return LocalBreakTime;
}

export default AddToActivityLocal;
export { getLocalTime }
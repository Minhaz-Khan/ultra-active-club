import React from 'react';

const Question = () => {
    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center mx-10'>
            <div className='min-h-[220px]  bg-slate-300 p-5'>
                <h3 className='text-xl'>How dose react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='min-h-[220px]  bg-slate-300 p-5'>
                <h3 className='text-xl'>between differen Props and state?</h3>
                <p>Props: Props hocce pera metar type jeta diye amra kono number,array,object,function,boolean pathate pari perameter hisab e
                    ar eta sudu mara water fall er moto nicer je component ache sudu tader kei amra props er maddome je kono kisu pathte pari. <br />
                    state: state bolte kono kisu poriborton kora .jokhon kono user kisu kisu click kore ba kisu akta kore tar bole jei proborton hoy setai muloto state.
                </p>
            </div>
            <div className='min-h-[220px]  bg-slate-300 p-5'>
                <h3 className='text-xl'>Other use of useEffect?</h3>
                <p> useEffect: data load chara amra aro kisu kaj korte pari jemon clean up kaj,<br />
                    jemon useEffect vitore amr akta variable diya kaj er jonno setar modde man set korte pari ar kaj ta ses hole cleanTiemOut diye amr sei variable er man ta clear kore dite pari. <br />
                    abr taile amr useEffect dependency tar modde kono kisur state er sathe connect korte pari je sei mana jokhon change hobe tokhon amr useEffect ta abr call korbe  joto bar change hobe totobar call korbe.
                </p>
            </div>

        </div>
    );
};

export default Question;
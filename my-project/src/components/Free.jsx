import React, { useState, useEffect } from 'react';

const Free = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <div className=" bg-gray-100 rounded-lg shadow-md py-7 mt-10 " data-aos="zoom-out-left">
     <h1 className='text-2xl font-semibold text-center py-3'>Join millions of Babbel learners breaking the language barrier <br /> every day</h1><br />
     <p className='text-center text-lg font-semibold pb-3'>Join a language group</p>
      <div className='flex justify-center space-x-10'>
      <div className="text-4xl font-bold text-gray-800">
        {formatTime(time.hours)}
      </div>
      <div className="text-4xl font-bold text-gray-800">
        {formatTime(time.minutes)}
      </div>
      <div className="text-4xl font-bold text-gray-800">
        {formatTime(time.seconds)}
      </div>
      </div>
    </div>
  );
};

export default Free;

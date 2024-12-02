import React, { useState } from "react";
import user from '../assets/png-clipart-computer-icons-user-icon-design-numerous-miscellaneous-logo.png'
import Lesson from '../assets/pngtree-technical-lesson-icon-vector-png-image_5235803.png'
import vuca from '../assets/8086346.png'
import tutorials from '../assets/images.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Success = () => {
     const [counts,setCounts]=useState(false)
  return (
    <div>
      <ScrollTrigger onEnter={()=>setCounts(true) } onExit={()=>setCounts(false)}>
      <h1 className="text-center text-2xl font-bold py-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-rose-500">Success Stories</h1>
      {
          counts &&   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto">
          <div>
            <div className="card bg-gray-200 text-gray-900">
              <div className="card-body">
                 <div>
                 <img className="h-20 w-20 rounded-full object-cover mx-auto" src={user} alt="" />
                 <h1 className="text-center font-semibold text-2xl">  User <CountUp start={0} end={2000} ></CountUp> </h1>
                 </div>
                <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-gray-200 text-gray-900 ">
              <div className="card-body">
              <div>
                 <img className="h-20 w-20 rounded-full object-cover mx-auto" src={Lesson} alt="" />
                 <h1 className="text-center font-semibold text-2xl"> Lesson <CountUp start={0} end={10} ></CountUp>   </h1>
                 </div>
  
                <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-gray-200 text-gray-900 ">
              <div className="card-body">
              <div>
                 <img className="h-20 w-20 rounded-full object-cover mx-auto" src={vuca} alt="" />
                 <h1 className="text-center font-semibold text-2xl">   vocabulary <CountUp start={0} end={200} ></CountUp>  </h1>
                 </div>
                
             
                <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-gray-200 text-gray-900 ">
              <div className="card-body">
                <div>
                 <img className="h-20 w-20 rounded-full object-cover mx-auto" src={tutorials} alt="" />
                 <h1 className="text-center font-semibold text-2xl">   Tutorial <CountUp start={0} end={9}></CountUp>  </h1>
                 </div>
                <p>Welcome to our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto">
        <div>
          <div className="card bg-gray-200 text-gray-900">
            <div className="card-body">
               <div>
               <img className="h-20 w-20 rounded-full object-cover mx-auto" src={user} alt="" />
               <h1 className="text-center font-semibold text-2xl">  User <CountUp start={0} end={2000} ></CountUp> </h1>
               </div>
              <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-gray-200 text-gray-900 ">
            <div className="card-body">
            <div>
               <img className="h-20 w-20 rounded-full object-cover mx-auto" src={Lesson} alt="" />
               <h1 className="text-center font-semibold text-2xl"> Lesson <CountUp start={0} end={10} ></CountUp>   </h1>
               </div>

              <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-gray-200 text-gray-900 ">
            <div className="card-body">
            <div>
               <img className="h-20 w-20 rounded-full object-cover mx-auto" src={vuca} alt="" />
               <h1 className="text-center font-semibold text-2xl">   vocabulary <CountUp start={0} end={200} ></CountUp>  </h1>
               </div>
              
           
              <p>Welcome to  our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card  bg-gray-200 text-gray-900 ">
            <div className="card-body">
              <div>
               <img className="h-20 w-20 rounded-full object-cover mx-auto" src={tutorials} alt="" />
               <h1 className="text-center font-semibold text-2xl">   Tutorial <CountUp start={0} end={9}></CountUp>  </h1>
               </div>
              <p>Welcome to our website, your ultimate destination for building a better vocabulary. Whether you're a student, professional, or language enthusiast, our platform is designed to help you master words, improve communication skills, and boost your confidence.</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </ScrollTrigger>
    </div>
  );
};

export default Success;

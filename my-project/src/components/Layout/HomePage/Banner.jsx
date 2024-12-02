import React from "react";
const Banner = () => {
  return (
    <div>
      <div  className="lg:flex  justify-center items-center bg-banner  py-10 px-6 gap-4 rounded-md">
        <div
          className="p-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-2xl font-semibold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-900 ">
            A scientific and fun way to improve vocabulary
          </h1>
          <p className="text-white">
            Play games and compete in activities on your own or with
            participants from around the globe.<br /> With our advanced 
            teaching algorithm and study tools, get <br /> ready for your vocabulary to
            expand!
          </p>
        </div>
        <div>
          <img
            className=" w-[900px] h-[500px] object-cover rounded-md"
            src="https://i.ibb.co.com/YkthzYw/silhouette-people-meeting-talking-about-different-countries.jpg"
            alt=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import imges1 from "../assets/384346798_1027394398461047_3882383716467687538_n (1).jpg"
import imges2 from "../assets/384404476_1043574813486284_7939579205614230798_n (1).jpg"
import imges3 from "../assets/379644464_1412962842625063_5013896718169792060_n.jpg"
const Speaker = () => {
  return (
    <div className="py-24 w-10/12 mx-auto">
      <div>
        <h1 className="lg:text-3xl text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-600 pb-14">What SPEAKers are saying.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 mx-auto gap-10">
          <div className="card bg-base-100 w-96 shadow-xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img
                src={imges1}
                alt=""
                className="rounded-full h-32 w-32 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p>
                I got so much out of my SPEAK experience. I was on a small group
                and each session felt so personal, the other participants felt
                more like family by the end of our sessions. SPEAK sessions are
                definitely the most relaxed, helpful way to improve my language
                proficiency.
              </p>
              <p className="py-5"> - Sarah Terracciano (Participant in Madrid)</p>
             
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img
                src={imges3}
                alt=""
                className="rounded-full h-32 w-32 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              
              <p>
                SPEAK for me it's like travelling without leaving Portugal. I
                share my culture and I learn from other people's culture. That
                helps me understand how other people live and how they think
                too.
              </p>
              <p className="py-5">- Naky Gaglo (Buddy and participant in Lisbon)</p>
             
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          >
            <figure className="px-10 pt-10">
              <img
                src={imges2}
                alt=""
                className="rounded-full h-32 w-32 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
             
              <p>My experience at SPEAK keeps growing since the beginning. I started helping others learn Arabic with my husband, and I also learned Portuguese along the way. Over this 6 years, I have met many of people and learned a lot about new cultures. And that's SPEAK's spirit: to bring the world closer to you.
              - Fatema Ammar (Buddy and participant in Leiria)</p>
              <p className="py-5">- Fatema Ammar (Buddy and participant in Leiria)
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;

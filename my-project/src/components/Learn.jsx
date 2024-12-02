import React from "react";
import img1 from "../assets/pngtree-language-training-center-composition-poster-png-image_7641583.png";
import img2 from "../assets/young-people-chatting-foreign-languages-with-phone-multilingual-greeting-hello-different-languages-diverse-cultures-international-communication-students-with-speech-bubbles-earth-planet_458444-1035.avif";
import img3 from "../assets/image.png";
import img4 from "../assets/depositphotos_231873662-stock-photo-pensive-young-man-wearing-checkered.jpg";
import img5 from "../assets/depositphotos_588060682-stock-photo-render-connected-world-flags-hand.jpg";
import img7 from "../assets/communication-in-different-languages-vector-21235498.jpg";
import teacher from "../assets/teacher_18236544.png";
const Learn = () => {
  return (
    <div className="pt-10">
      <h2 className="text-center font-semibold text-xl w-10/12 mx-auto">
        A vocabularies website's mission is to empower users with language
        skills by providing a structured and engaging platform to learn and
        expand their vocabulary in various languages. It aims to make language
        learning accessible, enjoyable, and <br /> effective for people of all ages and
        skill levels.
      </h2>
      <h4 className="font-semibold text-xl text-center pt-9 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-900 ">
        How Users Can Learn Vocabulary
      </h4>

      <div className="mt-9">
        <div className="lg:flex justify-between w-10/12 mx-auto items-center py-10">
          <p
            className="text-lg"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-semibold">1.Interactive Lessons:</p>
              <img className="h-20 w-20 object-cover " src={teacher} alt="" />
            </div>
            <br /> The platform offers lessons categorized by difficulty levels
            and topics, such as daily life,
            <br /> travel, or academics. These lessons include word definitions,
            <br /> pronunciations, meanings, and contextual examples.
          </p>
          <img
            className="h-80 lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img3}
            alt=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>

        <div className="lg:flex space-y-10  justify-around items-center py-10">
          <img
            className="h-80 lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img4}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="text-lg "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-semibold">2. Gamified Learning:</p>{" "}
              <img className="h-20 w-20 object-cover" src={teacher} alt="" />
            </div>
            <br />
            Features like quizzes, flashcards, and games help users retain words
            by <br /> actively engaging with them.
          </p>
        </div>

        <div className="lg:flex space-y-10  lg:justify-around gap-2 items-center py-10">
          <p
            className="text-lg"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-semibold">3. Audio Pronunciations:</p>{" "}
              <img className="h-20 w-20 object-cover" src={teacher} alt="" />
            </div>
            <br />
            Listening to native pronunciations helps users improve their
            speaking and listening skills.
          </p>
          <img
            className="h-80 lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img5}
            alt=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>

        <div className="lg:flex space-y-10  justify-around gap-2 items-center py-10">
          <img
            className="h-80 lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img2}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="text-lg"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-semibold">4. Progress Tracking:</p>{" "}
              <img className="h-20 w-20 object-cover" src={teacher} alt="" />
            </div>
            <br />
            Tools to monitor learning progress, such as streaks, scores, and
            milestones, motivate continuous practice.
          </p>
        </div>

        <div className="lg:flex space-y-10  justify-around items-center py-10">
          <p
            className="text-lg"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p className="text-2xl font-semibold">
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-semibold">
                  5. Personalized Learning Paths:
                </p>{" "}
                <img className="h-20 w-20 object-cover" src={teacher} alt="" />
              </div>
            </p>
            <br />
            AI-driven suggestions tailor vocabulary lessons to the user's
            learning goals, proficiency level, and interests.
          </p>
          <img
            className="h-80 w-96 mx-auto lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img7}
            alt=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <div className="lg:flex space-y-10 justify-around items-center py-10">
          <img
            className="h-80 w-96 mx-auto lg:w-2/5 object-cover rounded-md shadow-2xl shadow-cyan-100"
            src={img1}
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <p
            className="text-lg"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl font-semibold">6. Community Engagement:</p>{" "}
              <img className="h-20 w-20 object-cover" src={teacher} alt="" />
            </div>
            <br />
            Forums, challenges, and leaderboards foster a sense of community,
            encouraging users to practice with others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;

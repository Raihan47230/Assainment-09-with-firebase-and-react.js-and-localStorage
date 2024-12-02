import React from "react";

const AboutSection = () => {
  return (
    <div className="py-10">
      <p className="text-center text-2xl font-semibold pb-10">
        A vocabularies website's mission is to empower users with language
        skills by providing a structured and engaging platform to learn and
        expand their vocabulary in various languages. It aims to make language
        learning accessible, enjoyable, and effective for people of all ages and
        skill levels.
      </p>
      <p className="text-2xl font-bold p-2">How Users Can Learn Vocabulary:</p>
      <div className="">
        <div className="collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
         1. Interactive Lessons:
          </div>
          <div className="collapse-content">
            <p>Interactive Lessons: The platform offers lessons categorized by difficulty levels and topics, such as daily life, travel, or academics. These lessons include word definitions, pronunciations, meanings, and contextual examples.</p>
          </div>
        </div>{" "}
        <div className="collapse collapse-arrow bg-base-200 mt-2 border-gray-950">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          2. Gamified Learning: 
          </div>
          <div className="collapse-content">
            <p>Features like quizzes, flashcards, and games help users retain words by actively engaging with them.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            3. Audio Pronunciations:
          </div>
          <div className="collapse-content">
            <p>Listening to native pronunciations helps users improve their speaking and listening skills.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            4. Progress Tracking:
          </div>
          <div className="collapse-content">
            <p>Tools to monitor learning progress, such as streaks, scores, and milestones, motivate continuous practice.</p>
          </div>
        </div><div className="collapse collapse-arrow bg-base-200 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          5. Personalized Learning Paths:
          </div>
          <div className="collapse-content">
            <p> AI-driven suggestions tailor vocabulary lessons to the user's learning goals, proficiency level, and interests.</p>
          </div>
        </div><div className="collapse collapse-arrow bg-base-200 mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            6. Community Engagement:
          </div>
          <div className="collapse-content">
            <p>Forums, challenges, and leaderboards foster a sense of community, encouraging users to practice with others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

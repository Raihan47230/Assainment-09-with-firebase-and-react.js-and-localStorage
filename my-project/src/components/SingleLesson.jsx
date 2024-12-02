import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SingleLesson = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const { Lesson_no, word, meaning, pronunciation, part_of_speech, example } =
    data;

  return (
    <div>
      <div className="card bg-gradient-to-r from-rose-100 to-violet-100  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Word : {word}</h2>
          <p> meaning : {meaning}.</p>
          <p>pronunciation : {pronunciation}.</p>
          <p>part_of_speech : {part_of_speech}.</p>
          <div className="flex justify-center space-x-5 items-center">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn "
            >
              When to say
            </button>
            {/* <NavLink to={"/"}>Back to Lesson</NavLink> */}
            <button onClick={handleClick} className="btn">
              Back to Lesson
            </button>
          </div>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Word : {word}</h3>
              <p>Meaning : {meaning}</p>
              <p>Example : {example}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleLesson;

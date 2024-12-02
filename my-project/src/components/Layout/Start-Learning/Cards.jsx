import React from "react";
import { NavLink } from 'react-router-dom';

const Cards = ({ data }) => {
 
  const { id, Lesson_no } = data;
  return (
    <div>
      <NavLink to={`/lesson/${Lesson_no}`}>
      <div className="card bg-base-100 py-14 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-center">Lesson_no : {Lesson_no}</h2>
               
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default Cards;

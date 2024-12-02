import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleLesson from "./SingleLesson";

const Lessons = () => {
  const { Lesson_no } = useParams();

  const daata = useLoaderData();
  const [count, setCount] = useState([]);
  useEffect(() => {
    const machData = [...daata].filter((p) => p.Lesson_no == Lesson_no);
    setCount(machData);
  }, [daata, Lesson_no]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pb-9 underline">Lesson...{Lesson_no}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {count.map((data) => (
          <SingleLesson data={data} key={data.Id}></SingleLesson>
        ))}
      </div>
    </div>
  );
};

export default Lessons;

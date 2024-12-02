import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Learning = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {
          data.map(data=><Cards data={data} key={data.id}></Cards>)
        }
        
      </div>
    </div>
  );
};
export default Learning;

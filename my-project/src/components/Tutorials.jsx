import React from "react";
import ReactPlayer from "react-player/youtube";
import { Link, useNavigate } from "react-router-dom";
const Tutorials = () => {
     const navigate=useNavigate()
     const handleNavigate=()=>{
          navigate('/Start-learning')
     }
  return (
    <div>
     <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-10/12 mx-auto space-y-8 items-center ">
  
  <ReactPlayer
     url="https://www.youtube.com/watch?v=lnZOzKxDFQo&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=3"
     controls={true}
   />
   
   <ReactPlayer
     url="https://www.youtube.com/watch?v=TxiqlSoQQTg&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=9"
     controls={true}
   />
   <ReactPlayer
  url="https://www.youtube.com/watch?v=bOuclPYYGgM&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=14"

     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=Ivevc0hwmek&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=15"
     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=5kddHxBNzpE&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=16"
     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=qSALtnsr_Lk&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=17"
     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=mNhz5FyeMo4&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=19"
     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=LDgF2fgMMvw&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=20"
     controls={true}
   />
   <ReactPlayer
     url="https://www.youtube.com/watch?v=brmY3SAh0WI&list=PLYitpHBq-8SXrpjOHu6nU60Uq6QQ6NpIH&index=21"
     controls={true}
   />
 </div>
<button onClick={handleNavigate} className="btn block mx-auto px-10 mt-10">Learn Vocabularies</button>
    </div>
  );
};

export default Tutorials;

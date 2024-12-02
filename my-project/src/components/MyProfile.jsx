import React, { useContext } from "react";
import { AuthProvid } from "./AuthProviders/AuthProviders";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { users } = useContext(AuthProvid);

  const { displayName, email, photoURL } = users;
  return (
    <div>
      <h1 className="text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-300">Welcome Profile page {displayName}. </h1>
        <img className="mx-auto w-1/5 h-1/5 rounded-full bg-gray-300 p-4" src={photoURL} alt="" />
      </h1>

      <h1 className="text-center lg:text-2xl font-semibold p-5">DisplayName: {displayName}</h1>
      <h1 className="text-center lg:text-lg font-semibold" >Email: {email}</h1>
      <Link to={'/update_profile'}>
      <button className="btn block mx-auto mt-5 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-yellow-700">Update profile</button>
      </Link>
    
    </div>
  );
};

export default MyProfile;

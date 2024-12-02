import React, { useContext, useState } from "react";
import { AuthProvid } from "../../AuthProviders/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import googleIcon from "../../../assets/Logo-google-icon-PNG.png";

const Register = () => {
  const handleGooglePropUp = () => {
    handleGoogle();
  };
  const { handleRegisters, users, updateProfileess, handleGoogle } =
    useContext(AuthProvid);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState();
  const navigate = useNavigate();
  const handleFormData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    e.target.reset();
    setSuccess();
    setError();
    setPasswordError();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return setPasswordError(
        "At least one Uppercase and one Lowercase and password length has to be atleast 6 cateacter "
      );
    }

    handleRegisters(email, password)
      .then((result) => {
        setSuccess(alert("successfuly Register"));

        updateProfileess(name, photo);

        navigate("/");
      })
      .catch((erorr) => {
        setError(erorr.message);
      });
  };

  return (
    <div className="lg:w-4/12 mx-auto bg-gray-100 py-10 px-10 rounded-xl">
      <h1 className="text-center font-bold text-3xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600">
        Registation account
      </h1>

      <form onSubmit={handleFormData}>
        Name:
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Username"
          />
        </label>
        Email:
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        Photo:
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <input
            type="text"
            className="grow"
            name="photo"
            placeholder="Photo-URL"
            required
          />
        </label>
        Password:
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <br />
        <button className="btn bg-stone-400 px-6 py-2 rounded-xl mt-7 block w-11/12 mx-auto ">
          Register
        </button>
        <p className="mt-2 text-center hover:underline"></p>
      </form>
      <p className="text-center">
        All ready hava an account ?{" "}
        <Link className="underline" to={"/login"}>
          Login
        </Link>
      </p>
      {<p className="text-red-600"> {error}</p>}
      <p className="text-red-400 font-semibold">{passwordError}</p>
      <div className="divider">or</div>
      <button onClick={handleGooglePropUp} className="btn btn-block">
        <img className="h-6 w-6 rounded-full" src={googleIcon} alt="" />
        Register with Google
      </button>
    </div>
  );
};

export default Register;
// Photo-URL

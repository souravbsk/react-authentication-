import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser,updateNameImg } = useContext(AuthContext);
  const [checked,setChecked] =useState(false)


  
  const handleCreateUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;

    if (email && password) {
      createUser(email, password)
      .then(res => {
        const currentUser = res.user;
        updateNameImg(res.user,name,photo)
        console.log(currentUser);
      })
      .catch(err => {
        console.log(err.message);
      })
    }

    console.log(name, photo, email, password);
  };


  const handleChecked =(e) => {
    setChecked(e.target.checked)
  }

  return (
    <div>
      <div className="max-w-full md:w-6/12 mx-auto">
        <div className=" mt-8">
          <div className="shadow-2xl p-6 bg-base-100">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center font-bold">
                Register your account
              </h1>
            </div>
            <form onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Your Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input rounded bg-slate-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your password"
                  className="input rounded bg-slate-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="input rounded bg-slate-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input rounded bg-slate-200"
                />
                <label className=" flex items-center mt-3 gap-3">
                  <input onClick={handleChecked} type="checkbox" className="checkbox" />
                  Accept <Link>Term & Conditions</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                disabled={!checked}
                  type="submit"
                  className="text-white bg-slate-800 py-3 text-xl rounded-md"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="text-center mt-8">
              <p>
                Alreday Have An Account ?{" "}
                <Link className="text-red-500 font-semibold" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

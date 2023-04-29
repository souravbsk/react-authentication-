import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser,forgetPass } = useContext(AuthContext);
  const location =useLocation();
  const navigate = useNavigate(); 
  console.log(location);
  const from = location?.state?.from?.pathname || "/news/0"

  const emailValue = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (email && password) {
      loginUser(email, password)
        .then((res) => {
          const currentUser = res.user;
          navigate(from,{replace:true})
          console.log(currentUser);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleForgetPass = () => {
    const email = emailValue.current.value;
    if (!email) {
      alert("enter your mail");
      return;
    }
    forgetPass(email)
    .then(() => {
      alert("reset link send your mail")
    })
    .catch(err => {
      console.log(err.message);
    })

  };

  return (
    <div>
      <div className="max-w-full md:w-6/12 mx-auto">
        <div className=" mt-8">
          <div className="shadow-2xl p-6 bg-base-100">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center font-bold">
                Login your account
              </h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  ref={emailValue}
                  required
                  name="email"
                  type="email"
                  placeholder="email"
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
                <label className="label">
                  <button
                    type="button"
                    onClick={handleForgetPass}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="text-white bg-slate-800 py-3 text-xl rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-8">
              <p>
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500 font-semibold" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

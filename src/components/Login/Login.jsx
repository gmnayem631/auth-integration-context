import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this website? Please{" "}
          <Link to={"/register"} className="text-blue-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useAuth } from "@/components/shared/utils/context/AuthContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { TfiShiftRight } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (e) => {
    e.preventDefault();

    // Example authentication
    if (email === "admin@gmail.com" && password === "1234") {
      login({ email });
      const userData = { email };
      setUser({ email });
      console.log("user", user, email);
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <Card className="shadow-gray-200 shadow-lg rounded-lg p-5 max-w-30% w-[30%]">
          <CardHeader className="text-center">
            <h2 className="font-medium flex gap-3 items-center justify-center text-teal-500 text-3xl ">
              <i className="text-teal-500 border border-gray-300 rounded-sm p-3 text-lg ">
                <TfiShiftRight />
              </i>
              Sign In
            </h2>
            <p>Please Signin with Email to access the app if You </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="" className="text-sm font-semibold">
                  Username
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block mt-2 grow w-full outline-0 bg-teal-200/5 rounded-md py-2 px-5 border-teal-100 border border-solid pla shadow-gray-300 shadow-xs text-base text-gray-900 placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:bg-teal-50 active:bg-teal-50 sm:text-sm/6"
                />
              </div>

              <div className="w-full mt-4">
                <button
                  type="submit"
                  className="rounded-sm w-full py-2 px-5 bg-teal-600 text-lg text-white cursor-pointer"
                >
                  Login
                </button>
              </div>

              <div className="inline-flex items-center justify-center w-full my-6 mb-2">
                <hr className="w-full h-1 my-8 bg-neutral-quaternary border-0 rounded-sm bg-gray-200" />
                <div className="absolute px-4 -translate-x-1/2 bg-neutral-primary left-1/2 bg-white">
                  <h2 className="font-semibold text-lg text-gray-600">OR</h2>
                </div>
              </div>

              <div className="w-full mt-4 flex flex-row justify-around gap-4 ">
                <button
                  type="button"
                  className="rounded-sm w-full py-2 px-5 flex gap-2 items-center  text-blue-600 text-sm border font-medium border-gray-300 cursor-pointer"
                >
                  <i>
                    <BsFacebook />
                  </i>
                  Signin with Facebook
                </button>
                <div className="google flex gap-2 w-full items-center">
                  <button
                    type="button"
                    className="rounded-sm w-full flex gap-2 items-center py-2 px-5 border text-[#FF3D00] text-sm font-medium border-gray-300 cursor-pointer"
                  >
                    <i>
                      <FcGoogle />
                    </i>
                    Signin with Google
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;

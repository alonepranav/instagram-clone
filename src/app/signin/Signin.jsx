import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="flex justify-center min-h-screen w-screen p-2">
      <div>
        <div className="border border-slate-300 w-[22rem] px-7 py-10">
          <div className="flex justify-center">
            <img src="/assets/instagram.png" alt="" className="h-[5.5rem]" />
          </div>
          <p className="text-center text-gray-500 font-semibold leading-6">
            Sign up to see photos and videos from your friends.
          </p>

          <button className="flex justify-center items-center gap-2 bg-blue-500 rounded-md px-2 py-2 w-full mt-4">
            <AiFillFacebook className="text-white text-xl" />
            <p className="text-white font-semibold text-sm">
              Login with facebook
            </p>
          </button>
          <div className="flex justify-center items-center mt-5">
            <div className="border w-full"></div>
            <p className="mx-4 text-xs text-slate-500 font-bold">OR</p>
            <div className="border w-full"></div>
          </div>

          <div className="mt-8">
            <input
              type="text"
              className="border py-1 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none"
              placeholder="Mobile Number or Email"
            />
            <input
              type="text"
              className="border py-1 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="border py-1 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none"
              placeholder="Username"
            />
            <input
              type="text"
              className="border py-1 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none"
              placeholder="Password"
            />
          </div>

          <div className="text-[.7rem] px-1 text-center text-slate-600 mt-3">
            <p className="mb-3 text-smoke-500">
              People who use our service may have uploaded
              <br />
              your contact information to Instagram.
              <span className="text-blue-900 font-semibold">Learn More</span>
            </p>
            <p>
              By signing up, you agree to our{" "}
              <span className="text-blue-900 font-semibold">
                Terms , Privacy{" "}
              </span>
              <br />
              <span className="text-blue-900 font-semibold">Policy</span>
              and{" "}
              <span className="text-blue-900 font-semibold">
                Cookies Policy .
              </span>
            </p>
          </div>

          <button className="bg-sky-400 rounded-md py-2 w-full mt-4">
            <p className="text-white font-bold text-sm">Sign up</p>
          </button>
        </div>

        <div className="w-[22rem] border mt-2 py-5">
          <p className="text-base text-center">
            Have an account?
            <Link to={"/login"} className="text-sky-500">
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

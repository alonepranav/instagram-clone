import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("instagram", JSON.stringify("Loin instagram"));
    location.replace("/");
  };

  return (
    <div className="flex justify-center min-h-screen w-screen p-2">
      <div className="flex gap-20">
        <div className="mt-6">
          <img
            src="/assets/homepage_screenshot.png"
            alt=""
            className="w-[18rem] h-fit object-contain"
          />
        </div>
        <div className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="border border-slate-300 w-[22rem] px-11 py-6"
          >
            <div className="flex justify-center">
              <img
                src="/assets/instagram_text.png"
                alt=""
                className="h-[5.3rem] w-56"
              />
            </div>

            <div className="mt-5">
              <input
                type="text"
                className="border py-2 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none text-sm bg-gray-50"
                placeholder="Phone Number, username, or email"
              />

              <input
                type="password"
                className="border py-2 px-2 my-1 w-full placeholder:text-xs placeholder:text-slate-600 focus:border-slate-300 outline-none bg-gray-50"
                placeholder="Password"
              />
            </div>

            <a href="/">
              <button className="bg-sky-400 rounded-md py-1.5 w-full mt-2">
                <p className="text-white font-bold text-sm">Log in</p>
              </button>
            </a>

            <div className="flex justify-center items-center mt-5">
              <div className="border w-full"></div>
              <p className="mx-4 text-xs text-slate-400 font-bold">OR</p>
              <div className="border w-full"></div>
            </div>

            <button className="flex justify-center items-center gap-2 rounded-md px-2 py-2 w-full mt-4 font-bold">
              <AiFillFacebook className="text-indigo-900 text-xl" />
              <p className="text-indigo-900 font-semibold text-sm tracking-wide">
                Login with facebook
              </p>
            </button>

            <p className="w-full text-center mt-1">
              <Link
                to={"/"}
                className="text-center text-indigo-900 text-xs w-full"
              >
                Forgot password?
              </Link>
            </p>
          </form>

          <div className="flex justify-center items-center w-[22rem] border py-5 mt-2.5">
            <p className="text-sm text-center">
              Don't have an account?
              <Link to={"/signin"} className="text-sky-500 font-semibold">
                {" "}
                Sign up
              </Link>
            </p>
          </div>

          <div className="">
            <p className="text-sm text-center mt-3 mb-2">Get the app.</p>
            <div className="flex justify-center items-center gap-2">
              <img
                src="/assets/google_play_store.png"
                alt=""
                className="h-11"
              />
              <img src="/assets/microsoft_store.png" alt="" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

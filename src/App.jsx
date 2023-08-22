import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./app/signin/Signin";
import Login from "./app/login/Login";
import Home from "./app/Home";
import Profile from "./app/profile/Profile";
import HomeSection from "./components/HomeSection";
import Posts from "./app/profile/Posts";
import Reels from "./app/profile/Reels";
import Tagged from "./app/profile/Tagged";
import ReelsSection from "./components/ReelsSection";

function App() {
  const [logo, setLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 1000);
  }, []);


  return (
    <>
      {logo ? (
        <div className="h-screen w-screen">
          <div className="h-[90vh] flex justify-center items-center">
            <img
              src="/assets/instagram.png"
              alt="Instagram Logo"
              className="h-16 mt-20"
            />
          </div>

          <div className="mx-auto h-[10vh]">
            <p className="text-slate-500 text-center">from</p>
            <img
              src="/assets/meta.png"
              alt="Instagram Logo"
              className="h-8 mx-auto"
            />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<HomeSection />} />
              <Route path="/reels" element={<ReelsSection />} />
              <Route path="profile" element={<Profile />}>
                <Route index element={<Posts />} />
                <Route path="reels" element={<Reels />} />
                <Route path="tagged" element={<Tagged />} />
              </Route>
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

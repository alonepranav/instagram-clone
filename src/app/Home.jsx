import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Story from "../components/Story";
import Peoples from "../components/Peoples";
import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const a = localStorage.getItem("instagram") || null;

    if (a === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex justify-center w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

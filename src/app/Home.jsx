import React from "react";
import Sidebar from "../components/Sidebar";
import Story from "../components/Story";
import Peoples from "../components/Peoples";
import { Outlet } from "react-router-dom";

export default function Home() {
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

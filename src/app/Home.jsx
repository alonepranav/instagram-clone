import React from "react";
import Sidebar from "../components/Sidebar";
import Story from "../components/Story";
import Peoples from "../components/Peoples";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-between w-full">
          <Outlet />
          {/*           
          <Story />
          <Peoples /> */}
        </div>
      </div>
    </div>
  );
}

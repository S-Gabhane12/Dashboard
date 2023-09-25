import React, { Component } from "react";
import Logo from "../logo.jpg";
import { AiOutlineRise } from "react-icons/ai";
import {  BsFillGearFill, BsFillGrid3X2GapFill  } from "react-icons/bs";



class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-white h-screen" >
        <div className="px-[15px] py-[30px] flex items-center justify-center ">
        <img src={Logo} alt=""></img>
        </div>
        <div className="flex items-center gap-[15px] py-4 px-4 hover:text-blue-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <AiOutlineRise/>
        <p>Reports</p>
        </div>
        <div className="flex items-center gap-[15px]  py-4 px-4 hover:text-blue-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
        < BsFillGrid3X2GapFill /> 
        <p>Workspaces</p>
        </div>
        <div className="flex items-center gap-[15px] py-4 px-4 hover:text-blue-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       < BsFillGearFill/>
       <p>Settings</p>
      </div>
      </div>
    );
  }
}

export default Sidebar;
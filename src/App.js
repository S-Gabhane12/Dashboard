import React from 'react';
import { Component } from 'react';
import Dashboardview from "./component/Dashboardview";
import Sidebar from './component/Sidebar';


class App extends Component{


  render(){
    return (
      <div className='flex'>
        <div className='basis-[12%] h-[100vh] border-2px shadow-xl'>
        <Sidebar/>
        </div>
        <div className='basis-[88%]  bg-gray-100'>
        <Dashboardview />
        </div>
        

        </div>
    )
  }
}

export default App;



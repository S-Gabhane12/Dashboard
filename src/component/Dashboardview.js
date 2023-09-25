import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import dataset from "./dataset.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Dropdowns from "./Dropdowns";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class Dashboardview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sort2=() =>{
    dataset = dataset.sort((x, y) => (x.country > y.country ? 1 : -1));
  }

  render() {
    return (
      <div>
        <div className="flex justify-between py-6 px-8 ">
          <h1>Orders</h1>
          <button className="bg-blue-500 w-[150px] h-[50px] text-center text-white   border border-blue-700 rounded-[10px]">
            <div className="flex items-center gap-[12px] py-4 px-4">
              <AiOutlinePlus color="white" />
              <p> Add Order</p>
            </div>
          </button>
        </div>
        <hr className="h-[2px] my-2 w-[1250px] mx-8 bg-gray-200 border-0 text-center" />
        <div className="flex justify-items-end p-6 h-62">
          <div className=" basis-1 p-6  bg-white border border-gray-200 rounded-lg shadow ">
            <h2 className="font-bold">All Customers</h2>
            <div>
              <div className="flex flex-row " style={{ width: "460px" }}>
              <div>
                  <CircularProgressbar value={85} text={`${85}%`} />
                  <span className="text-xs font-thin">Current Customer</span>
                </div>
                <div>
                  <CircularProgressbar value={66} text={`${66}%`} />
                  <span className="text-xs font-thin">New Customer</span>
                </div>
                <div>
                  <CircularProgressbar value={90} text={`${90}%`} />
                  <span className="text-xs font-thin">Target Customer</span>
                </div>
                <div>
                  <CircularProgressbar value={30} text={`${30}%`} />
                  <span className="text-xs font-thin">Retarget Customer</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" basis-1/4   p-5 bg-white border border-gray-200 rounded-lg shadow ">
            <h2 className="font-bold">Stats Overview</h2>
            <h2 className="font-bold">Active</h2>
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
              <div className="bg-[#16C098] p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                {(dataset.filter((e) => e.status == "Active").length * 100) /
                  dataset.length}
                %
              </div>
            </div>
            <h2 className="font-bold">Inactive</h2>
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
              <div className="bg-[#FF6B6B] p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                {(dataset.filter((e) => e.status == "Inactive").length * 100) /
                  dataset.length}
                %
              </div>
            </div>
          </div>
        </div>

        <div>
          <table className="w-[998] h-[618] ml-10 text-sm text-left text-gray-500  bg-white border-b  hover:bg-gray-50 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <h4 className="text-green-600 ml-8"> Active Members</h4>
                </div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search"
                  />
                </div>
                <Dropdowns />
              </div>
              <thead className="text-xs text-gray-300 bg-white border-b hover:bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataset
                  .slice(0, 8)
                  .map((e) => (
                    <tr
                      key={e.id}
                      className="bg-white border-b  hover:bg-gray-50 d"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {e.name}
                      </th>
                      <td className="px-6 py-4">{e.company}</td>
                      <td className="px-6 py-4">{e.phoneNumber}</td>
                      <td className="px-6 py-4">{e.email}</td>
                      <td className="px-6 py-4">{e.country}</td>
                      <td className="px-6 py-4">{e.status}</td>
                    </tr>
                  ))}
              </tbody>
              <nav
                className="isolate flex space-x-1 justify-end rounded-md shadow-sm bg-white border-b  hover:bg-gray-50"
                aria-label="Pagination"
              >
                <p className="text-left">
                  Showing data 1 to 5 of {dataset.length} entries
                </p>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <MdKeyboardArrowLeft className="h-5 w-5" aria-hidden="true" />
                </a>

                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  onClick={this.sort2}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <MdKeyboardArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </nav>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboardview;

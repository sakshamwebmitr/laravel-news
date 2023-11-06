import Logo from "../assets/logoastiva.png";
import "remixicon/fonts/remixicon.css";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div className="w-full lg:h-24 flex flex-col items-center justify-between">
      <div className="w-full h-10 lg:h-8 border border-b-gray-400 flex flex-row items-center justify-evenly">
        <div className="w-10/12 lg:h-full text-sm lg:text-base flex flex-row items-center justify-evenly">
          <a href="">Aaj Tak</a>
          <a href="">Aaj Tak</a>
          <a href="">Aaj Tak</a>
          <a href="">Aaj Tak</a>
          <a href="">Aaj Tak</a>
          <a href="">Aaj Tak</a>
        </div>
        <div className="w-28 h-full">
          <button className="w-full h-full bg-red-600 text-white flex items-center justify-evenly">
            Sign In <i className="text-sm ri-user-line"></i>
          </button>
        </div>
      </div>
      <div className="w-full h-18 lg:h-8 bg-blue-950 text-white flex flex-row items-center lg:justify-evenly justify-between px-8 lg:px-0">
        <div className="lg:w-48 h-full flex flex-row items-center justify-between relative">
          <button
            onClick={toggleSidebar}
            className="lg:w-10 lg:h-full lg:flex lg:items-center lg:justify-center hover:text-red-600 hidden"
          >
            <i className="text-xl ri-menu-line"></i>
          </button>
          {isSidebar && (
            <div className="fixed top-0 left-0 w-64 h-full bg-blue-950 text-white transition-transform transform translate-x-0 ease-in-out duration-300">
              <div className="w-full h-16 flex flex-row items-center justify-between">
                <img className="w-24 h-14" src={Logo} alt="" />
                <button
                  onClick={toggleSidebar}
                  className="p-4 text-white hover:text-red-600"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            <Sidenav />
            </div>
          )}
          <div className="lg:w-36 lg:h-12 flex items-center justify-center h-12 w-20 ">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="lg:w-3/4 lg:h-full lg:flex lg:flex-row lg:items-center lg:justify-evenly hidden">
          <Link className="font-bold hover:text-red-600 text-sm">होम</Link>

          <Link className="font-bold hover:text-red-600 text-sm">राजनीति</Link>
          {/* ------------------------------------------------dropdown--------------------------------------------------------           */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white hover:text-red-600">
                चुनाव
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-950 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* -----------------------------------------------chunav above---------------------------------------------------------------------      */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white hover:text-red-600">
                भारत
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-950 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* ---------------------------------------------------------------------bharat------------------------------------------------------     */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white hover:text-red-600">
                मनोरंजन
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-950 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? " text-red-600" : "text-white-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* -------------------------------------------------------------------------manoranjan---------------------------------------------------------------------   */}
          {/* ------------------------------------------------------dropdown---------------------------------------------------------------     */}
          <Link className="font-bold hover:text-red-600 text-sm">ट्रेंडिंग</Link>
          <Link className="font-bold hover:text-red-600 text-sm">
            अस्तित्व एक्सक्लूसिव
          </Link>
        </div>
        <div className="w-52 lg:w-32 h-full flex flex-row items-center justify-evenly ">
          <button className="h-full hover:text-red-600">
            <i className="text-lg ri-notification-3-line"></i>
          </button>
          <button className="h-full hover:text-red-600">
            <i className="text-lg ri-radio-2-line"></i>
          </button>
          <button className="h-full hover:text-red-600">
            <i className="text-lg ri-tv-2-line"></i>
          </button>
          <button
            onClick={toggleDropdown}
            className="h-full hover:text-red-600 transition-all ease-in-out duration-300"
          >
            {isOpen ? (
              <i className="text-lg ri-close-line"></i>
            ) : (
              <i className="text-lg ri-search-2-line"></i>
            )}
          </button>
          <div className="relative inline-block text-left">
            {isOpen && (
              <div className="origin-top-right absolute -right-14 sm:right-0 mt-5 px-4 w-[90vw] lg:w-[95vw] rounded-md shadow-lg bg-blue-950 ring-1 ring-black ring-opacity-5 transition-all ease-in-out duration-1000">
                <div className="py-2">
                  <form className="flex items-center">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                        placeholder="Search"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-blue-950"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      Search
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

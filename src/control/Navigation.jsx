import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

/* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import { MenuIcon, XIcon, UserCircleIcon } from "@heroicons/react/outline";
// import DarkLogo from "../assets/DarkLogo.svg";

const links = [
  { name: "Home", destination: "/" },
  { name: "Our Workout", destination: "/workout" },
  { name: "Locations", destination: "/locations" },
  { name: "Store", destination: "/store" },
  { name: "FAQs", destination: "/faq" },
];

export default function Navigation(props) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0.0);
  const [showMenu, setShowMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const scrollListener = (e) => {
    const top = window.scrollY;

    if (top < 1) {
      setShowNavbar(true);
      setShowShadow(false);
    } else if (top >= lastScrollTop) {
      setShowNavbar(false);
      setShowShadow(true);
    } else {
      setShowShadow(true);
      setShowNavbar(true);
    }

    setLastScrollTop(top);
    console.log(showNavbar);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className="z-50 absolute">
      <Fade top when={showNavbar} duration={300}>
        <div
          className="bg-white shadows w-screen top-0 fixed overflow-hidden "
          style={showShadow ? { boxShadow: "0px 0px 20px 2px #c2c2c2" } : {}}
        >
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex justify-between w-full">
                  <div className="flex-shrink-0 flex items-center transition duration-500 hover:bg-gray-300 hover:bg-opacity-20 rounded-xl">
                    <a href="/" className="">
                      <img
                        src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto:best/v1634735144/large%20dark%20logo.webp"
                        alt="104010 Logo"
                        className="h-16"
                      />
                    </a>
                  </div>

                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <div
                      aria-label="menu"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 "
                    >
                      <span className="sr-only">Open main menu</span>
                      {showMenu ? (
                        <XIcon
                          onClick={() => {
                            showMenu ? setShowMenu(false) : setShowMenu(true);
                          }}
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <div className="flex flex-row items-center space-x-2">
                          <MenuIcon
                            className="block h-10 w-10 rounded-md p-2 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-hidden="true"
                            onClick={() => {
                              showMenu ? setShowMenu(false) : setShowMenu(true);
                            }}
                          />
                          <a
                            area-label="contact button"
                            href="https://www.fitmetrix.io/memberportal/login/fee66bea-163c-ec11-aa68-c756551153f3?LocationID=16470"
                            className="h-12 py-3 text-md inline-flex items-center font-semibold leading-none   "
                          >
                            <UserCircleIcon
                              className="block h-6 w-6 hover:bg-gray-200 rounded-full transition duration-200 "
                              area-hidden="true"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    {links.map((link, i) =>
                      link.name !== "Home" ? (
                        <div
                          className={`flex items-center justify-items-center border-b-2  ${
                            props.pathName === link.destination
                              ? "border-blue-500"
                              : ""
                          }`}
                          key={`desktop${i}`}
                        >
                          <a
                            href={link.destination}
                            className={`text-gray-900 p-2 px-4 rounded-md hover:bg-opacity-40 transition duration-500 ease-in-out hover:scale-150 hover:translate-y-1 hover:bg-gray-200 inline-flex items-center  text-sm font-medium `}
                          >
                            {link.name}
                          </a>
                        </div>
                      ) : (
                        <div key={`empty${i}`} />
                      )
                    )}
                    {/* <a
                      href="/about"
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      About Us
                    </a> */}
                    <div className="flex items-center justify-items-center">
                      <a
                        area-label="contact button"
                        href="/locations"
                        className="h-12 px-4 py-3 text-md inline-flex items-center font-semibold leading-none bg-taBlue hover:bg-taLightBlue text-white rounded transition duration-500 ease-in-out "
                      >
                        FREE TRIAL
                      </a>
                    </div>

                    <div className="flex items-center justify-items-center">
                      <a
                        area-label="contact button"
                        href="https://www.fitmetrix.io/webportal/packages/fee66bea-163c-ec11-aa68-c756551153f3"
                        className="h-12 px-4 py-3 text-md inline-flex items-center font-semibold leading-none bg-taRed hover:bg-opacity-80 text-white rounded transition duration-500 ease-in-out "
                      >
                        BOOK NOW
                      </a>
                    </div>

                    <div className="flex items-center justify-items-center">
                      <a
                        area-label="contact button"
                        href="https://www.fitmetrix.io/memberportal/login/fee66bea-163c-ec11-aa68-c756551153f3?LocationID=16470"
                        className="h-12 py-3 text-md inline-flex items-center font-semibold leading-none  text-gray-700  "
                      >
                        <UserCircleIcon
                          className="block h-8 w-8 hover:bg-gray-200 rounded-full transition duration-200 "
                          area-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              show={showMenu}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-500 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="md:hidden">
                <div className="flex flex-col pt-2 pb-3 space-y-3">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  {links.map((link, i) => (
                    <a
                      href={link.destination}
                      key={`mobile${i}`}
                      className={`bg-gray-50  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${
                        props.pathName === link.destination
                          ? "border-blue-500 text-blue-700"
                          : ""
                      }`}
                    >
                      {" "}
                      {link.name}
                    </a>
                  ))}

                  <a
                    href="/locations"
                    className="bg-taBlue text-center text-white block pl-3 pr-4 py-2  text-2xl font-medium sm:pl-5 sm:pr-6"
                  >
                    FREE TRIAL
                  </a>
                  <a
                    href="https://www.fitmetrix.io/webportal/packages/fee66bea-163c-ec11-aa68-c756551153f3"
                    className="bg-taRed text-center text-white block pl-3 pr-4 py-2  text-2xl font-medium sm:pl-5 sm:pr-6"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </Transition>
          </>
        </div>
      </Fade>
    </div>
  );
}

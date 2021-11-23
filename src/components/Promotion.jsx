/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function Promotion(props) {
  // const date = new Date("December 1, 2021 07:00:00");
  const navigate = useNavigate();

  const now = new Date();
  const [timeRemaining, setTimeRemaining] = React.useState(
    Math.floor((props.countdownDate - now) / 1000)
  );
  const [isActive, setIsActive] = React.useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimeRemaining(0);
    setIsActive(false);
  }

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const now = new Date();
        const timeRem = Math.floor((props.countdownDate - now) / 1000);
        // console.log(timeRem);
        // console.log(sec2str(timeRem));
        setTimeRemaining(timeRem);
      }, 1000);
    } else if (!isActive && timeRemaining !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  function sec2str(t) {
    var d = Math.floor(t / 86400),
      h = ("0" + (Math.floor(t / 3600) % 24)).slice(-2),
      m = ("0" + (Math.floor(t / 60) % 60)).slice(-2),
      s = ("0" + (t % 60)).slice(-2);

    return (
      (d > 0 ? d + " Days, " : "") +
      (h > 0 ? h + " Hours, " : "") +
      (m > 0 ? m + " Minutes, " : "") +
      (t > 60 ? s : s + " Seconds")
    );
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={props.setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-32 w-32 rounded-full bg-gray-200">
                  <img
                    className="h-24 w-26 text-green-600"
                    aria-hidden="true"
                    src={props.imageURL}
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5 font-heading text-4xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-black">{props.subtitle}</p>
                  </div>
                  {props.countdownDate !== null ? (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {sec2str(timeRemaining) +
                          " seconds to claim your offer!"}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-taRed text-base font-medium text-white hover:bg-taLightRed transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => {
                    props.setOpen(false);
                    navigate("/blackfriday");
                  }}
                >
                  {props.buttonTitle}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

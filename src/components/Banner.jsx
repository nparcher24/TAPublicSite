/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

export default function Banner(props) {
  return (
    <Fade when={props.open}>
      <div className="fixed bottom-0 inset-x-0 w-full pb-2 sm:pb-5 h-auto">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-taBlue shadow-lg sm:p-3 mr-20">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-gray-200 bg-opacity-20">
                  <div className="h-6 w-6 text-white">{props.icon}</div>
                </span>
                <p className="ml-3 font-heading tracking-wider text-white truncate">
                  <span className="md:hidden">{props.shortText}</span>
                  <span className="hidden md:inline">{props.longText}</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href={props.link}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-body text-taBlue transition duration-500 bg-white hover:bg-indigo-50"
                >
                  {props.buttonText}
                </a>
              </div>
              {props.showClose ? (
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    onClick={() => {
                      props.closeBanner();
                    }}
                    type="button"
                    className="-mr-1 flex p-2 rounded-md hover:bg-taLightBlue transition duration-500 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

import React from "react";
import Fade from "react-reveal/Fade";

export default function CTA(props) {
  return (
    <div>
      <section>
        <div className="flex flex-wrap -mb-4 md:mb-0 py-2">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <Fade left>
              <div className="my-2 bg-taLightRed py-12 px-6 w-11/12 rounded-r-full">
                <div className="ml-2 md:ml-10 pb-6">
                  <p className="md:pb-8 text-lg md:text-3xl font-heading text-gray-50 leading-loose tracking-wide">
                    Help the person next to you improve,
                  </p>
                  <p className="text-lg md:text-3xl font-heading text-gray-50 norwester">
                    and you will find
                    <span className="bg-gray-50 text-taLightRed px-2 py-1 rounded-lg ml-1">
                      IMPROVEMENT YOURSELF.
                    </span>
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="md:flex px-6 md:px-2 justify-center items-center  w-full md:w-auto">
            <div className="space-y-2 md:space-y-4 text-center">
              <p className="text-2xl md:text-4xl   text-gray-900 font-heading tracking-wider text-center">
                Try us out
              </p>
              <a
                aria-label="contact button"
                href="/locations"
                className="rounded inline-block py-5 px-16 leading-none text-xl text-white bg-taBlue hover:bg-taLightBlue shadow font-bold transition-all duration-500"
              >
                CLAIM FREE TRIAL
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
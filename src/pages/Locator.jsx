import React from "react";
import { Location } from "../components/Location";

export default function Locator(props) {
  return (
    <div className=" pt-20">
      <Location />

      <div className=" bg-taLightBlue text-white px-4">
        <div className="flex flex-col max-w-6xl mx-auto py-4">
          <h1 className="font-heading text-2xl md:text-4xl ">
            Want us to open near you?
          </h1>
          <p>
            We are currently expanding our locations with the goal of becoming
            nation-wide{" "}
          </p>
          <p>
            If there isn't a location near you, and you wish there was, please
            let us know!{" "}
          </p>
          <a
            href="https://locations.104010fitness.com/please-open-here"
            className="font-bold text-2xl px-6 py-2 bg-taBlue mr-auto mt-4 rounded-md text-white hover:opacity-80 transition duration-500"
          >
            Request Location
          </a>
        </div>
      </div>
    </div>
  );
}

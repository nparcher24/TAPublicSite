/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";

// let autoComplete;

// // handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete

// async function handlePlaceSelect(updateQuery) {
//   const addressObject = autoComplete.getPlace(); // get place from google api
//   const query = addressObject.formatted_address;
//   updateQuery(query);
//   console.log(addressObject);
// }

export default function LocationInput(props) {
  //   const [query, setQuery] = React.useState("");
  //   const autoCompleteRef = React.useRef(null);

  //   function handleScriptLoad(updateQuery, autoCompleteRef) {
  //     // assign autoComplete with Google maps place one time
  //   autoComplete = new window.google.maps.places.Autocomplete(
  //     autoCompleteRef.current,
  //     { types: ["(cities)"], componentRestrictions: { country: "us" } }
  //   );
  //   autoComplete.setFields(["address_components", "formatted_address"]); // specify what properties we will get from API
  //   // add a listener to handle when the place is selected
  //   autoComplete.addListener("place_changed", () =>
  //     handlePlaceSelect(updateQuery)
  //   );
  //   }

  const handleChange = (event) => {
    // const value = event.target.value;
    // setQuery(value);
  };

  React.useEffect(() => {
    if (props.places != null) {
      // handleScriptLoad(setQuery, autoCompleteRef)
    }
  }, [props.places]);

  return (
    <div>
      {/* <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Your Location
      </label> */}
      <div className="mt-1 relative rounded-md  mx-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LocationMarkerIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>

        <input
          type="text"
          inputmode="text"
          name="zip"
          id="zip-code-input"
          className="z-0 focus:ring-indigo-500 focus:border-taBlue block w-full pl-10 sm:text-sm border-gray-300 border-2 rounded-md transition duration-200"
          placeholder="Enter your location"
          //   value={query}
          onChange={handleChange}
          ref={props.autoCompleteRef}
        />
        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
          {/* <LocationMarkerIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          /> */}
          {props.locationEnabled ? (
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/center-direction.png"
              className="h-5 w-5 opacity-50 bg-white"
              alt="My location icon"
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
// import { LocationMarkerIcon } from "@heroicons/react/solid";
import GoogleMapReact from "google-map-react";
import LocationInput from "./LocationInput";
// import { fitBounds } from "google-map-react";

let autoComplete;

// // handle when the script is loaded we will assign autoCompleteRef with google maps place autocomplete
// function handleScriptLoad(updateQuery, autoCompleteRef) {
//   // assign autoComplete with Google maps place one time
//   autoComplete = new window.google.maps.places.Autocomplete(
//     autoCompleteRef.current,
//     { types: ["(cities)"], componentRestrictions: { country: "us" } }
//   );
//   autoComplete.setFields(["address_components", "formatted_address"]); // specify what properties we will get from API
//   // add a listener to handle when the place is selected
//   autoComplete.addListener("place_changed", () =>
//     handlePlaceSelect(updateQuery)
//   );
// }

export function Location(props) {
  const [isOpened, setIsOpened] = React.useState("");
  const [places, setPlaces] = React.useState(null);
  const [locationEnabled, setLocationEnabled] = React.useState(false);
  const [zoom, setZoom] = React.useState(10);
  const mapRef = React.useRef();

  const [locations, setLocations] = React.useState([
    {
      name: "Deer Park, IL",
      address: "21020 N Rand Road, Deer Park, IL 60047",
      position: {
        lat: 42.16884,
        lng: -88.07164,
      },
      comingSoon: false,
      link: "https://locations.104010fitness.com/deerpark",
      book: "https://locations.104010fitness.com/deerparkfreeweek",
    },
    {
      name: "Glenview, IL",
      address: "954 Harlem Ave. Glenview, IL 60025",
      position: { lat: 42.07196, lng: -87.80638 },
      comingSoon: true,
      link: "https://locations.104010fitness.com/glenview",
      book: "https://locations.104010fitness.com/glenviewfreeweek",
    },
  ]);
  const [center, setCenter] = React.useState(locations[0].position);

  const [query, setQuery] = React.useState("");
  const autoCompleteRef = React.useRef();

  // React.useEffect(() => {
  //   handleScriptLoad(setQuery, autoCompleteRef);
  // }, []);

  async function handlePlaceSelect(updateQuery) {
    const place = autoComplete.getPlace(); // get place from google api
    // const query = place.formatted_address;
    updateQuery(place);
    console.log(place.geometry.location);

    calculateDistances(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
  }

  function calculateDistances(latitude, longitude) {
    //Find nearest location
    const newArray = [];
    locations.forEach((location, index) => {
      let newLocation = location;
      newLocation["distance"] =
        getDistanceFromLatLonInKm(
          location.position.lat,
          location.position.lng,
          latitude,
          longitude
        ) * 0.621371;

      newArray.push(newLocation);
    });

    newArray.sort(function (first, second) {
      // console.log("sort: ", first.distance < second.distance);
      if (first.distance < second.distance) {
        return -1;
      } else {
        return 1;
      }
    });

    // setCenter(newArray[0].position);
    // zoomMapToPoints(
    //   latitude,
    //   longitude,
    //   newArray[0].position.lat,
    //   newArray[0].position.lng
    // );

    setLocations(newArray);
  }

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      setLocationEnabled(true);
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        calculateDistances(position.coords.latitude, position.coords.longitude);
      });
    } else {
      setLocationEnabled(false);
      console.log("Not Available");
    }
  }, []);

  // function zoomMapToPoints(lat1, lon1, lat2, lon2) {
  //   const bounds = {
  //     nw: {
  //       lat: lat1,
  //       lng: lon1,
  //     },
  //     se: {
  //       lat: lat2,
  //       lng: lon2,
  //     },
  //   };

  //   const size = {
  //     width: mapRef.current.clientWidth, // Map width in pixels
  //     height: mapRef.current.clientHeight, // Map height in pixels
  //   };

  //   const { center, zoom } = fitBounds(bounds, size);

  //   setCenter(center);
  //   setZoom(zoom);
  // }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <div className="w-full relative flex flex-col md:flex-row">
      <div className="md:max-w-sm max-h-56 md:max-h-full p-2 md:py-5  bg-white border-t-2 md:border-none md:w-128 overflow-y-auto border-taLightRed">
        <div className="flex flex-col">
          <h1 className="text-3xl font-heading pl-1">LOCATIONS</h1>
          <LocationInput
            query={query}
            setQuery={setQuery}
            autoCompleteRef={autoCompleteRef}
            places={places}
            locationEnabled={locationEnabled}
          />
        </div>
        <ul className="divide-y divide-gray-200">
          {locations.map((aLocation) => (
            <li key={aLocation.name} className="mr-1">
              <button
                className="flex justify-between items-center rounded-md hover:bg-gray-200 transition duration-500 border-none  my-2  w-full"
                onClick={() => {
                  setCenter(aLocation.position);
                }}
              >
                <div className="ml-1">
                  <div className="flex items-center">
                    <p className="text-xl font-medium text-gray-900 text-left">
                      {aLocation.name}
                    </p>
                    <p>
                      {aLocation.distance != null
                        ? " - " + aLocation.distance.toFixed(1) + " mi"
                        : ""}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 text-left">
                    {aLocation.address}
                  </p>
                  {aLocation.comingSoon ? (
                    <h1 className="text-lg pt-2 text-left font-bold text-taLightRed border-taRed rounded-md">
                      COMING SOON!!!
                    </h1>
                  ) : (
                    <div />
                  )}
                </div>
                <div className="flex flex-col space-y-2 py-2">
                  <a
                    href={aLocation.link}
                    className="py-2 px-4 bg-taBlue text-white font-body rounded-lg hover:bg-taLightBlue transition duration-500 text-sm"
                  >
                    Learn More
                  </a>
                  <a
                    href={aLocation.book}
                    className="py-2 px-4 bg-taRed text-white font-body rounded-lg hover:opacity-60 transition duration-500 text-sm w-32"
                  >
                    Book Now!
                  </a>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          className="z-0"
          bootstrapURLKeys={{
            key: "AIzaSyD3S0yeE5zI5gaA-IaC2HE8ZEd9wdiyvSs",
            libraries: ["places", ""],
          }}
          center={center}
          zoom={zoom}
          ref={mapRef}
          onGoogleApiLoaded={(data) => {
            // console.log(
            //   "------->",
            //   new data.maps.places.Autocomplete(autoCompleteRef.current, {
            //     types: ["(cities)", ""],
            //     componentRestrictions: { country: "us" },
            //   })
            // );

            autoComplete = new window.google.maps.places.Autocomplete(
              autoCompleteRef.current,
              {
                types: ["geocode"],
                componentRestrictions: { country: "us" },
              }
            );
            autoComplete.setFields([
              "address_components",
              "formatted_address",
              "geometry",
            ]); // specify what properties we will get from API
            // add a listener to handle when the place is selected
            autoComplete.addListener("place_changed", () =>
              handlePlaceSelect(setQuery)
            );
          }}
        >
          {locations.map((location) => {
            return (
              <button
                className="focus:border-taRed w-auto h-auto focus:border-0 "
                id={location.name}
                style={{ transform: `translate(-50%, -50%)` }}
                lat={location.position.lat}
                lng={location.position.lng}
                text={""}
                onClick={() => {
                  setCenter(location.position);
                  setIsOpened(location.name);
                }}
              >
                {isOpened === location.name ? (
                  <div
                    className="bg-white p-4 rounded-lg flex-col  border-taBlue border-2"
                    style={{ width: "200px" }}
                  >
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="font-heading text-2xl">{location.name}</h1>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-gray-500 text-left my-2">
                        {location.address}
                      </p>
                      <a
                        href={location.link}
                        className="py-2 px-4 bg-taBlue text-white font-body rounded-lg hover:bg-taLightBlue transition duration-500"
                      >
                        LEARN MORE
                      </a>
                      <a
                        href={location.link}
                        className="py-2 px-4 bg-taRed text-white font-body rounded-lg hover:bg-taLightRed transition duration-500"
                      >
                        FREE TRIAL
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-full flex items-center justify-items-center justify-center bg-white border-taRed border-2 h-16 w-16 hover:bg-gray-100 transition duration-500">
                    <img
                      src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1634735144/large%20dark%20logo.png"
                      //src="https://res.cloudinary.com/trainamerican/image/upload/v1637002158/BB_Button_oow6cw.png"
                      alt="location marker"
                      className="h-20 w-20 object-contain "
                    />
                  </div>
                )}
              </button>
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
}

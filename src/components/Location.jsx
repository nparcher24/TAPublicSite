import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import GoogleMapReact from "google-map-react";

export function Location(props) {
  const [isOpened, setIsOpened] = React.useState("");
  const [locations] = React.useState([
    {
      name: "Deer Park, IL",
      address: "21020 N Rand Road, Deer Park, IL 60047",
      position: {
        lat: 42.16884,
        lng: -88.07164,
      },
      comingSoon: false,
      link: "https://www.google.com/maps/dir//10.40.10+Fitness,+21020+N+Rand+Rd,+Kildeer,+IL+60047/@42.1687166,-88.0738395,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fa3205efe9e73:0x4cd127dc5051d8d9!2m2!1d-88.0716508!2d42.1687166!3e0",
    },
    {
      name: "Glenview, IL",
      address: "954 Harlem Ave. Glenview, IL 60025",
      position: { lat: 42.07196, lng: -87.80638 },
      comingSoon: true,
      link: "https://www.google.com/maps/dir//954+Harlem+Ave,+Glenview,+IL+60025/@42.0718343,-87.8085623,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fc630adde0c8f:0x52ac4f7f181fd039!2m2!1d-87.8063736!2d42.0718343!3e0",
    },
  ]);
  const [center, setCenter] = React.useState(locations[0].position);

  return (
    <div className="w-screen my-10 bg-green-300 relative">
      <div className="md:max-w-sm md:absolute md:m-10 md:mt-20 max-h-56 md:max-h-80 p-2 md:py-5 md:rounded-lg bg-white border-t-2 md:border-2 md:z-10 overflow-y-auto border-taLightRed">
        <h1 className="text-3xl font-heading">LOCATIONS</h1>
        <ul className="divide-y divide-gray-200">
          {locations.map((aLocation) => (
            <li key={aLocation.name} className="">
              <button
                className="flex justify-between items-center rounded-md hover:bg-gray-200 transition duration-500 border-none m-2 p-2 w-full"
                onClick={() => {
                  setCenter(aLocation.position);
                }}
              >
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-xl font-medium text-gray-900 text-left">
                      {aLocation.name}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 text-left">
                    {aLocation.address}
                  </p>
                </div>
                {aLocation.comingSoon ? (
                  <h1 className="text-xl px-1 ml-6 font-bold text-taLightRed border-2 border-taRed rounded-md">
                    COMING SOON!!!
                  </h1>
                ) : (
                  <LocationMarkerIcon className="h-6 w-6 text-taBlue mx-2" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          className="z-0"
          bootstrapURLKeys={{ key: "AIzaSyD3S0yeE5zI5gaA-IaC2HE8ZEd9wdiyvSs" }}
          center={center}
          zoom={15}
        >
          {locations.map((location) => {
            return (
              <button
                className="focus:border-taRed w-auto h-auto focus:border-0"
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
                    className="bg-white p-4 rounded-lg flex-col space-y-4 border-taBlue border-2"
                    style={{ width: "200px" }}
                  >
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="font-heading text-lg">{location.name}</h1>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <p className="text-sm text-gray-500 text-left">
                        {location.address}
                      </p>
                      <a
                        href={location.link}
                        className="py-2 px-4 bg-taBlue text-white font-body rounded-lg hover:bg-taLightBlue transition duration-500"
                      >
                        GET DIRECTIONS
                      </a>
                    </div>
                  </div>
                ) : (
                  <img
                    src="https://res.cloudinary.com/trainamerican/image/upload/v1637002158/BB_Button_oow6cw.png"
                    alt="location marker"
                    style={{ height: "60px", width: "60px" }}
                  />
                )}
              </button>
            );
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
}

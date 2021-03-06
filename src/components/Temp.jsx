import React from "react";
import pattern from "../assets/ripples.png";

export default function Temp(props) {
  const date = new Date("December 1, 2021 07:00:00");
  const now = new Date();
  // const now = new Date("December 2, 2021 07:00:00");

  const [timeRemaining, setTimeRemaining] = React.useState(date - now);
  const [isActive, setIsActive] = React.useState(now < date);
  console.log("IS ACTIVE: ", isActive);

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  // function reset() {
  //   setTimeRemaining(0);
  //   setIsActive(false);
  // }

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const now = new Date();
        const timeRem = Math.floor((date - now) / 1000);
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

  return isActive ? (
    <div className="pt-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row bg-black">
        <img
          className=" h-40 md:h-auto md:w-80 object-cover opacity-40"
          src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1637970061/MicrosoftTeams-image_6_qhzcps.jpg"
          alt="Peopl the gym working hard"
        />
        <div className="w-full bg-white">
          <h1
            className="w-full text-center font-heading text-2xl md:text-6xl p-2 md:py-16 text-black md:rounded-tr-xl"
            style={{
              backgroundImage: `url(${pattern})`,
            }}
          >
            BLACK FRIDAY SALE- The Best Deal in America!
          </h1>

          <body className="p-2 w-full text-center font-heading tracking-widest text-lg md:text-3xl md:p-6 bg-taBlue text-white  ">
            First Month of The Patriot Membership (Unlimited) at $49.99!!!
          </body>
          <body className="p-2 w-full text-center font-body text-md md:text-xl md:p-3 bg-taRed text-white md:rounded-br-xl">
            {sec2str(timeRemaining) + " Seconds Remaining!"}
          </body>
          <div className="p-2 md:p-4">
            <body className="font-bold text-md md:text-xl">
              We are excited to have you for your FIRST CLASS!
            </body>
            <body className="font-body text-md md:text-xl ml-2 mt-4">
              Here is what to expect:
            </body>
            <ul className="font-body text-sm md:text-lg ml-4 mt-2">
              <li>- Greeted by our Team and a tour of our facility</li>
              <li>
                - A personal walk-through with your Coach to prepare you for the
                workout ahead
              </li>
              <li>
                - Perform the BEST WORKOUT in America alongside your new
                community
              </li>
              <li>
                - Decompress your body and mind to reduce your risk of injury in
                preparation for your next workout
              </li>
              <li>- RECEIVE FREE Post-workout drink and Battle Bar</li>
              <li>
                - Our Food and Beverage Ethos: No artificial sweeteners. No
                artificial fillers. Just what your body needs after Training
                American
              </li>
            </ul>
          </div>
          <div className="" style={{ height: "600px" }}>
            <iframe
              title="Black Friday Sale"
              src="https://msgsndr.com/widget/form/NIov8v0SvRcF334J4nTc"
              className="p-2 md:pt-20 w-screen md:w-full h-full"
              style={{ backgroundClip: "transparent" }}
              // style="border:none;width:100%;"
              scrolling="no"
              id="NIov8v0SvRcF334J4nTc"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
  // </div>
}

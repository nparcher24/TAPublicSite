import React from "react";
import pattern from "../assets/ripples.png";

export default function Temp(props) {
  const date = new Date("December 1, 2021 07:00:00");
  const now = new Date();

  const [timeRemaining, setTimeRemaining] = React.useState(date - now);
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

  return (
    <div className="pt-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row bg-black">
        <img
          className=" h-40 md:h-auto md:w-80 object-cover opacity-40"
          src="https://res.cloudinary.com/trainamerican/image/upload/v1631107071/image_7_xjmsjo.png"
          alt="Peopl the gym working hard"
        />
        <div className="w-full bg-white">
          <h1
            className="w-full text-center font-heading text-2xl md:text-6xl p-2 md:py-16 text-black md:rounded-tr-xl"
            style={{
              backgroundImage: `url(${pattern})`,
            }}
          >
            BLACK FRIDAAAAAAY SALE!
          </h1>

          <body className="p-2 w-full text-center font-heading tracking-widest text-lg md:text-3xl md:p-6 bg-taBlue text-white  ">
            First Month of The Patriot Membership (Unlimited) at $49.99!!!
          </body>
          <body className="p-2 w-full text-center font-body text-md md:text-xl md:p-3 bg-taRed text-white md:rounded-br-xl">
            {sec2str(timeRemaining) + " Seconds Remaining!"}
          </body>
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
    // </div>
  );
}

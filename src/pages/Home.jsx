import React from "react";
import Typing from "react-typing-animation";
import YouTube from "../assets/youtube.svg";
import { Transition } from "@headlessui/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import CTA from "../components/CTA";
// import { Location } from "../components/Location";
import Promotion from "../components/Promotion";
import Banner from "../components/Banner";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import PatriotChallenge from "../components/PatriotChallenge";

export default function Home(props) {
  const [showAboutVideo, setShowAboutVideo] = React.useState(false);
  const [startedScrolling, setStartedScrolling] = React.useState(false);
  const promoEnd = new Date("December 1, 2021 07:00:00");
  const now = new Date();
  // const now = new Date("December 2, 2021 07:00:00");
  const [promoOpen, setPromoOpen] = React.useState(now < promoEnd);
  const [showBanner, setShowBanner] = React.useState(
    now < promoEnd ? !promoOpen : false
  );

  const closePromo = () => {
    setShowBanner(true);
    setPromoOpen(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  const scrollListener = () => {
    if (!startedScrolling) {
      setStartedScrolling(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div>
      <div className="w-full h-full">
        <div className="antialiased bg-body text-body font-body w-full">
          <div>
            <section className="pb-8 bg-black relative flex items-center justify-center overflow-hidden h-screen max-h-full">
              <video
                className="absolute bottom-0 left-0 w-auto min-w-full min-h-full max-w-none opacity-40"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://res.cloudinary.com/trainamerican/video/upload/q_auto/v1640631044/Hero_Video_c8zvof.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="container px-4 relative bg-opacity-50">
                <div className="py-48 lg:py-32">
                  <div className="max-w-lg mb-8 ">
                    <Typing>
                      <h1 className="text-3xl md:text-4xl mb-4 text-white font-bold font-heading flex flex-col">
                        <span>Train Safely. </span>
                        <Typing.Delay ms={800} />
                        <span>Train Intelligently. </span>
                        <Typing.Delay ms={800} />
                        <span className="text-taLightBlue">
                          Train American.
                        </span>
                      </h1>
                    </Typing>

                    <p className="text-blueGray-100 leading-relaxed">
                      The best workout in America, crafted by Veterans
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <a
                      aria-label="contact button"
                      href="/locations"
                      className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-taRed hover:bg-taLightRed rounded transition duration-500 ease-in-out hover:scale-120"
                    >
                      Start your FREE trial
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <PatriotChallenge />
            </section> */}

            <div className="container mx-auto max-w-6xl">
              <section className="py-2">
                <div className="container px-4 mx-auto">
                  <div className="px-8 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className=" flex flex-col justify-center">
                        <Fade left big>
                          <img
                            className="lg:px-32 px-10 max-w-md object-contain"
                            src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1634735144/large%20dark%20logo.webp"
                            alt="10.40.10 Fitness"
                          />
                        </Fade>
                      </div>
                      <Fade right big>
                        <div className=" flex flex-col justify-center p-5">
                          <h2 className="text-2xl lg:text-4xl font-bold text-black font-heading">
                            MORE THAN A GYM
                          </h2>
                          <p className="mt-2 mb-6 lg:text-xl text-blueGray-900 leading-loose">
                            Our mission is to bring back what it means to be an
                            American through safe and intelligent fitness.
                          </p>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {startedScrolling ? (
              <div>
                <div className="w-full bg-black">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="md:m-auto ">
                      <Zoom>
                        <h2 className="text-white py-20 font-heading font-semibold text-xl text-center lg:text-4xl">
                          What is 10.40.10 Fitness?
                        </h2>
                      </Zoom>
                    </div>
                    <div
                      onClick={() => {
                        setShowAboutVideo(true);
                      }}
                      className=" relative flex items-center justify-center overflow-hidden hover:opacity-90 transition ease-in-out duration-500"
                    >
                      <img
                        className="absolute w-full object-cover object-center opacity-40"
                        src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631063202/image_8_esdv2h.webp"
                        alt="What is 10.40.10 Fitness Video"
                      />
                      <div className="container py-32">
                        <img
                          className="mx-auto my-5 relative"
                          src={YouTube}
                          alt="youtube play"
                          width="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Transition
                  show={showAboutVideo}
                  enter="transition-opacity duration-1000"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div
                    onClick={() => {
                      setShowAboutVideo(false);
                    }}
                    className="flex fixed z-50 inset-0 h-screen w-screen overflow-y-auto bg-black"
                  >
                    <div className="my-auto w-full">
                      <h2 className="text-4xl p-8 lg:px-32 text-white text-center leading-tight font-bold font-heading mx-auto">
                        What is 10.40.10 Fitness?
                      </h2>
                      <div className="px-4 lg:px-12 w-full">
                        <div className="aspect-w-16 aspect-h-9 max-h-screen">
                          <iframe
                            className="absolute w-full h-full transition duration-1000"
                            id="aboutiframe"
                            src="https://www.youtube-nocookie.com/embed/c3YY_8gK2sE?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer"
                            title="What is 10.40.10?"
                            frameBorder="0"
                            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; enablejsapi"
                            allowFullScreen="allowFullScreen"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>

                {/* <!--The 104010 Workout--> */}
                <section className="py-20 z-50">
                  <div className="container px-4 mx-auto">
                    <Fade>
                      <h2 className="text-3xl md:text-4xl font-bold font-heading">
                        STRENGTH AND STAMINA IS OUR{" "}
                        <span className="text-taBlue underline">CORE</span>{" "}
                        FOCUS
                      </h2>
                      <h3 className="mb-12 lg:mb-20 text-lg md:text-xl font-body">
                        We focus on making you functionally fit and looking good
                      </h3>
                    </Fade>

                    <Fade>
                      <div className="flex flex-wrap -mx-4 mb-20">
                        <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                          <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-100 rounded-full text-taBlue">
                            Mind and Muscle activation
                          </span>
                          <h3 className="my-4 text-2xl md:text-4xl font-bold font-heading text-taBlue">
                            10 MINUTES
                          </h3>
                          <ul className="list-disc mb-4 text-sm md:text-base leading-loose px-5 ">
                            <li>
                              Warm up the muscles we are about to put to work
                            </li>
                            <li>Mentally prep for one hell of a workout</li>
                            <li>
                              Gets the muscles strong, flexible, and most
                              importantly{" "}
                              <span className="font-bold text-taBlue">
                                decreases your risk of injury
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                          <div className="aspect-h-9 aspect-w-16">
                            <video
                              className="absolute w-full h-full"
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source
                                src="https://res.cloudinary.com/trainamerican/video/upload/dpr_auto,f_auto,q_auto/v1634238728/10_warm_up_cnexp4.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade>
                      <div className="flex flex-wrap -mx-4 mb-20">
                        <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                          <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                            FUNCTIONAL FITNESS
                          </span>
                          <h3 className="my-4 text-2xl md:text-4xl font-bold text-taRed font-heading">
                            40 MINUTES
                          </h3>
                          <ul className="list-disc mb-4 text-sm md:text-base leading-loose px-5 ">
                            <li>
                              Our proprietary fitness style is crafted by
                              Veterans who demand intelligent and safe workouts
                            </li>
                            <li>
                              With thousands of workouts, you will
                              <span className="font-bold text-taBlue">
                                {" "}
                                never see the same workout twice
                              </span>
                            </li>
                            <li>
                              Safest gym in America.{" "}
                              <span className="font-bold text-taBlue">
                                Cleanest gym in America.{" "}
                              </span>
                              Period.
                            </li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                          <div className="aspect-h-9 aspect-w-16">
                            <video
                              className="absolute w-full h-full"
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source
                                src="https://res.cloudinary.com/trainamerican/video/upload/dpr_auto,f_auto,q_auto/v1634238788/40_Work_rmx02v.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade>
                      <div className="flex flex-wrap -mx-4 mb-20">
                        <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                          <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-100 rounded-full text-taBlue">
                            MIND AND MUSCLE DECOMPRESSION
                          </span>
                          <h3 className="my-4 text-2xl md:text-4xl font-bold font-heading text-taBlue">
                            10 MINUTES
                          </h3>
                          <ul className="list-disc mb-4 text-sm md:text-base leading-loose px-5 ">
                            <li>
                              Stretch the muscles you trained and decompress by
                              way of breathing.
                            </li>
                            <li>Start the recovery process immediately</li>
                            <li>
                              Recovery focused cool down increases strength,
                              growth, and resilience of the muscles while{" "}
                              <span className="font-bold text-taBlue">
                                decreasing the risk of injury.
                              </span>{" "}
                            </li>
                            <li>Train hard. Recover harder.</li>
                          </ul>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                          <div className="aspect-h-9 aspect-w-16">
                            <video
                              className="absolute w-full h-full"
                              autoPlay
                              muted
                              loop
                              playsInline
                            >
                              <source
                                src="https://res.cloudinary.com/trainamerican/video/upload/dpr_auto,f_auto,q_auto/v1634238748/10_Recovery_qi809x.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </section>

                {/* <Location /> */}
                <CTA setShowForm={props.setShowForm} />
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      <Promotion
        title="BLACK FRIDAY SALE- The Best Deal in America!"
        subtitle="First Month of The Patriot Membership (Unlimited) at $49.99!!!"
        countdownDate={promoEnd}
        imageURL="https://res.cloudinary.com/trainamerican/image/upload/v1634734948/Dark_Logo_us2kim.png"
        buttonTitle="Book Your First Class"
        open={promoOpen}
        setOpen={closePromo}
      />
      <Banner
        icon={<ShoppingBagIcon />}
        shortText="BLACK FRIDAY SALE!"
        longText="BLACK FRIDAY SALE: The Best Deal in America!"
        buttonText="Book Your First Class"
        closeBanner={closeBanner}
        showClose={true}
        open={showBanner}
        link="/blackfriday"
      />
    </div>
  );
}

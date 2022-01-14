import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClipboardListIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import React from "react";
import {
  FitnessCenterOutlined,
  HealthAndSafetyOutlined,
} from "@mui/icons-material";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function WorkoutPage(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [descriptionIndex, setDescriptionIndex] = React.useState(0);

  const [selectedCoach, setSelectedCoach] = React.useState(0);

  const coaches = [
    {
      name: "Alex",
      title: "CEO / Chief of Fitness",
      description:
        "Known as the 'Acorn Smuggler' around the office, Alex is known exclusively for his micropenis and his inability to last more the 12-seconds in bed.",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640632404/Alex_Witt_Head_Shot_xd4jwx.jpg",
      imageAlt: "Alex",
    },
    {
      name: "Jaime",
      title: "Deer Park Manager",
      description: "adfadfadsfadfadfadfd",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640632404/Jamie_Khol_Head_Shot_lnkxo8.jpg",
      imageAlt: "Jaime",
    },
    {
      name: "Ethan",
      title: "Glenview Manager",
      description: "adfadfadsfadfadfadfd",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640632403/Ethan_Huber_Head_SHot_ynimrx.jpg",
      imageAlt: "Ethan",
    },
    {
      name: "Lindsay",
      title: "Coach",
      description: "adfadfadsfadfadfadfd",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640632402/Lindsay_Senne_Head_Shot_halbu2.jpg",
      imageAlt: "Lindsay",
    },
  ];

  const scrollPages = [
    {
      smallTitle: "Our Style",
      largeTitle: "Functional strength that looks as good as it feels",
      body: "Our unique blend of HIIT (High-Intensity Interval Training) and Hypertrophy delivers truly functional fitness. Feel the results you gain here every day... picking up your children, playing a pickup basketball game after 10 years of not playing, or even chasing that pesky neighborhood dog off your lawn.",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640118297/3_hvtrcj.jpg",
      imageAlt: "Gym",
    },

    {
      smallTitle: "Variety",
      largeTitle: "Keeping muscles confused",
      body: "A wide variety of weight and resistance equipment to produce unique muscle stimuli (sandbag, KB, DB, slam ball, wall ball, jump rope, pull-up bar, resistance bans, etc.",
      imageURL:
        "https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1642198258/_O8A9939_f0sqot.jpg",
      imageAlt: "Mid workout",
    },
  ];

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const maxHeight = 800;
      setWidth(window.innerWidth);
      setHeight(
        window.innerHeight <= maxHeight ? window.innerHeight : maxHeight
      );
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <div className="font-body space-y-24">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${width} ${height}`}
          className="absolute"
        >
          <rect fill="#000000" width={width} height={height} />
          <g fillOpacity="1">
            <polygon
              fill="#070a15"
              points={`${width / 2} ${height * 0.125} 0 ${
                height * 0.25
              } 0 ${height} ${width} ${height} ${width} ${height * 0.25}`}
            />
            <polygon
              fill="#0e1529"
              points={`${width / 2} ${height * 0.25} 0 ${
                height * 0.5
              } 0 ${height} ${width} ${height} ${width} ${height * 0.5}`}
            />
            <polygon
              fill="#151f3e"
              points={`${width / 2} ${height * 0.375} 0 ${
                height * 0.75
              } 0 ${height} ${width} ${height} ${width} ${height * 0.75}`}
            />
            <polygon
              fill="#1b2952"
              points={`${width} ${height} ${width * 0.5} ${
                height / 2
              } 0 ${height}`}
            />
            <polygon
              fill="#223367"
              points={`${width * 0.8} ${height} ${width * 0.5} ${
                height * 0.625
              } ${width * 0.2} ${height}`}
            />
            <polygon
              fill="#293e7b"
              points={`${width * 0.3333} ${height} ${
                width * 0.6666
              } ${height} ${width * 0.5} ${height * 0.75}`}
            />
            <polygon
              fill="#304890"
              points={`${width * 0.4275} ${height} ${
                width * 0.5714
              } ${height} ${width / 2} ${height * 0.875}`}
            />
          </g>
        </svg>

        <div className="pt-48 flex flex-col relative">
          <div className=" mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
              <h2 className="text-4xl lg:text-6xl  font-heading text-white">
                YOUR Workout
              </h2>
              <h2 className="font-body text-lg lg:text-2xl text-white mb-10">
                No-nonsense + Hard work = Great results
              </h2>
              <div>
                <a
                  className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 bg-taRed hover:bg-opacity-80 text-white font-semibold leading-loose transition duration-200 rounded-xl"
                  href="/locations"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto px-4">
            <video
              className="rounded-3xl md:rounded-6xl "
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
          </div>
        </div>
      </div>

      {/* <div>
        <div className="py-10 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4 text-taBlue">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-taBlue font-bold">BLUF</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                The Bottom Line
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div className="py-12 px-6 bg-white rounded shadow text-center ">
                  <span className="w-16 h-16 mb-6 inline-block p-2 rounded-lg bg-blue-100">
                    <FitnessCenterOutlined
                      color="#304890"
                      sx={{ fontSize: 50 }}
                    />
                  </span>
                  <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                    Functional Fitness
                  </h3>
                  <p className="text-gray-500">
                    Our full-body design translates to real-life functional
                    fitness.
                  </p>
                </div>
              </div>
              <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
                <div className="py-12 px-6 bg-white rounded shadow text-center">
                  <span className="w-16 h-16 text-taBlue mb-6 inline-block p-2 rounded-lg bg-blue-100">
                    <ClipboardListIcon className="h-full w-full" />
                  </span>
                  <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                    Structured and Specific
                  </h3>
                  <p className="text-gray-500">
                    The 10.40.10 format has is proven to get you to your goals.{" "}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="py-12 px-6 bg-white rounded shadow text-center">
                  <span className="mb-6 inline-block p-2 rounded bg-blue-100 h-16 w-16">
                    <HealthAndSafetyOutlined
                      color="#304890"
                      sx={{ fontSize: 50 }}
                    />
                  </span>
                  <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                    Safety
                  </h3>
                  <p className="text-gray-500">
                    Safety is always first: from our certified coaches to our
                    equipment selected specifically for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-20 max-w-md text-center mx-auto">
              <span className="text-taBlue font-bold">Format</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Structure: 10.40.10
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="mb-16 lg:mb-0 relative w-full md:w-1/2 lg:w-1/3 px-4">
                <h1 className="text-8xl opacity-10 absolute top-0 left-0 -mt-10 ml-4 text-taBlue">
                  10
                </h1>

                <h3 className="text-2xl font-bold">10: Muscle Activation</h3>
                <p className="text-gray-500 leading-loose">
                  10 minutes of warm-up exercises that prime the muscles
                  targeted by the workout
                </p>
              </div>
              <div className="mb-16 lg:mb-0 relative w-full md:w-1/2 lg:w-1/3 px-4">
                <h1 className="text-8xl opacity-10 absolute top-0 left-0 -mt-10 ml-4 text-taBlue">
                  40
                </h1>
                <h3 className="text-2xl font-bold">40: Hard Work</h3>
                <p className="text-gray-500 leading-loose">
                  40 minutes of our proprietary fitness style proven to increase
                  strength and stamina
                </p>
              </div>
              <div className="relative w-full md:w-1/2 lg:w-1/3 px-4">
                <h1 className="text-8xl opacity-10 absolute top-0 left-0 -mt-10 ml-4 text-taBlue">
                  10
                </h1>
                <h3 className="text-2xl font-bold">10: Decompression</h3>
                <p className="text-gray-500 leading-loose">
                  10 minutes of mindful cool down to normalize your heart rate
                  and begin recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            {scrollPages.map((page, index) => {
              return descriptionIndex === index ? (
                <Fade>
                  <div className="relative flex">
                    <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center">
                      <button
                        className="p-4 bg-taBlue hover:bg-opacity-80 rounded-l-xl rounded-t-xl text-white z-10"
                        onClick={() => {
                          if (descriptionIndex > 0) {
                            setDescriptionIndex(descriptionIndex - 1);
                          } else {
                            setDescriptionIndex(scrollPages.length - 1);
                          }
                        }}
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="w-full xl:w-4/5 xl:ml-auto">
                      <img
                        className="md:max-w-xl xl:max-w-4xl mx-auto relative object-cover rounded"
                        style={{ maxHeight: "100vh" }}
                        src={page.imageURL}
                        alt={page.imageAlt}
                      />
                      <div className="xl:hidden mt-12 text-center space-x-4">
                        <button
                          className="p-4 bg-taBlue hover:bg-opacity-80 rounded-l-xl rounded-t-xl text-white z-10 transition duration-200"
                          onClick={() => {
                            if (descriptionIndex > 0) {
                              setDescriptionIndex(descriptionIndex - 1);
                            } else {
                              setDescriptionIndex(scrollPages.length - 1);
                            }
                          }}
                        >
                          <ArrowLeftIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="p-4 bg-taBlue hover:bg-opacity-80 rounded-r-xl rounded-t-xl text-white transition duration-200"
                          onClick={() => {
                            if (descriptionIndex < scrollPages.length - 1) {
                              setDescriptionIndex(descriptionIndex + 1);
                            } else {
                              setDescriptionIndex(0);
                            }
                          }}
                        >
                          <ArrowRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="xl:absolute top-0 left-0 mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 xl:py-16 rounded bg-white border-gray-50 shadow text-center">
                        <span className="font-bold text-taBlue">
                          {page.smallTitle}
                        </span>
                        <h2 className="text-5xl font-bold font-heading">
                          {page.largeTitle}
                        </h2>
                        <p className="mx-auto text-gray-500 leading-loose">
                          {page.body}
                        </p>
                      </div>
                    </div>
                    <div className="hidden xl:absolute inset-y-0 right-0 -mr-8 xl:flex items-center">
                      <button
                        className="p-4 bg-taBlue hover:bg-opacity-80 rounded-r-xl rounded-t-xl text-white"
                        onClick={() => {
                          if (descriptionIndex < scrollPages.length - 1) {
                            setDescriptionIndex(descriptionIndex + 1);
                          } else {
                            setDescriptionIndex(0);
                          }
                        }}
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Fade>
              ) : (
                <div />
              );
            })}
          </div>
        </div>
      </div>

      <div class="container px-4 mx-auto">
        <div class="max-w-xl lg:max-w-2xl mx-auto mb-16 text-center">
          <span class="text-xs font-semibold text-indigo-500 uppercase">
            Technology
          </span>
          <h2 class="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            We employ technology to maximize your results
          </h2>
          <p class="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            We believe in making our customer experience incredible. As such, we
            employ technology to aid members in maximizing the time spent in
            each workout.
          </p>
        </div>
        <div class="flex flex-wrap -mx-4 mb-12">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="relative h-40 mb-6">
                <span class="absolute top-0 right-0 mt-4 mr-4 inline-block text-xs px-2 py-1 bg-indigo-50 rounded uppercase text-indigo-500 font-semibold">
                  Workout Aid
                </span>
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src="https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1642198001/_O8A0249_r4wgdj.jpg"
                  alt=""
                />
              </div>
              <span class="inline-block text-xs font-bold text-indigo-500">
                Movement Screens
              </span>
              <h2 class="mb-2 text-2xl font-bold font-heading">
                Fully custom movement screens
              </h2>
              <p class="mb-4 text-lg text-gray-500 leading-loose">
                Our bespoke workout screens show each exercise in an
                easy-to-digest way. Videos of proper movement form ensure
                members are fully armed to accomplish each workout mission.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="relative h-40 mb-6">
                <span class="absolute top-0 right-0 mt-4 mr-4 inline-block text-xs px-2 py-1 bg-indigo-50 rounded uppercase text-indigo-500 font-semibold">
                  Fitness Tracking
                </span>
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src="https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1642199721/IMG_2666_yecqhx.jpg"
                  alt=""
                />
              </div>
              <span class="inline-block text-xs font-bold text-indigo-500">
                Body Measurement
              </span>
              <h2 class="mb-2 text-2xl font-bold font-heading">
                In-Body Scanning
              </h2>
              <p class="mb-4 text-lg text-gray-500 leading-loose">
                We believe weight alone is not the best metric to establish
                goals or track progress. By using the InBody scanner you’ll
                receive an extensive blueprint of your body composition in the
                matter of minutes. An easy-to-understand, accurate and objective
                measurements of your muscle mass, fat mass, body fat percentage,
                and how it is disturbed throughout your body. Leaving you with
                all the data you need to make personalized and measurable goals
                for your ideal body.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="relative h-40 mb-6">
                <span class="absolute top-0 right-0 mt-4 mr-4 inline-block text-xs px-2 py-1 bg-indigo-50 rounded uppercase text-indigo-500 font-semibold">
                  Heart Rate
                </span>
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src=""
                  alt=""
                />
              </div>
              <span class="inline-block text-xs font-bold text-indigo-500">
                Heart Rate Monitor
              </span>
              <h2 class="mb-2 text-2xl font-bold font-heading">
                Heart Rate Tracking
              </h2>
              <p class="mb-4 text-lg text-gray-500 leading-loose">
                Our proprietary Track American heart rate monitor equips you
                with personalized data, displayed in real time during your
                workout. This tool maximizes your workout experience by giving
                you instant feedback so you can train smarter and more
                efficiently. An added asset for you, as well as your coach, to
                determine when you could push a little bit harder or dial it
                back for some needed recovery. A full summary after each workout
                gives you the gratification you deserve after you Train
                American. Using the data stored in your app after each workout
                to see workouts conquered, calories burned, and points achieved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
                <div className="max-w-md">
                  <span className="text-taBlue font-bold">Variety</span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    Never do the same workout twice
                  </h2>
                  <ul>
                    <li className="flex mb-4">
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          Mon, Wed, Fri - Strength
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          Resistance exercises designed in a functional
                          hypertrophy muscle-building style
                        </p>
                      </div>
                    </li>
                    <li className="flex mb-4">
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          Tues, Thurs, Sat - Stamina
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          High-intensity cardio training using the equipment YOU
                          get to choose
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="max-w-xs">
                        <h3 className="font-bold font-heading">
                          Sunday - Cardio &amp; Core
                        </h3>
                        <p className="text-gray-500 leading-loose">
                          Sunday Funday's at 10.40.10 are challenging workouts
                          that focus on your core, which will be at the
                          forefront of your mind every time you laugh for the
                          next week.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
                <div className="mb-6 w-full lg:w-1/2 px-3">
                  <img
                    className="mb-6 w-full h-64 object-cover rounded-lg"
                    src="https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1642198465/_O8A9827_a7fedh.jpg"
                    alt=""
                  />
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src="https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1640631906/_O8A9967_wybdcl.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-1/2 px-3">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src="https://res.cloudinary.com/trainamerican/image/upload/f_auto,q_auto/v1637970061/MicrosoftTeams-image_6_qhzcps.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                <ul className="flex flex-wrap flex-row lg:flex-col justify-center lg:justify-start space-x-6 lg:space-x-0">
                  {coaches.map((coach, index) => {
                    return (
                      <li>
                        <button
                          onClick={() => {
                            setSelectedCoach(index);
                          }}
                          className={
                            index === selectedCoach
                              ? "text-2xl lg:text-4xl mb-4 text-gray-900 font-bold"
                              : "text-2xl lg:text-4xl mb-4 text-gray-300 hover:text-gray-400 font-bold"
                          }
                        >
                          {coach.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full lg:w-2/3 px-3">
                {coaches.map((coach, index) => {
                  return index === selectedCoach ? (
                    <Zoom>
                      <div className="flex p-6 flex-wrap bg-white rounded-lg shadow">
                        <div className="w-full lg:w-1/2 lg:pr-3">
                          <img
                            className="h-80 lg:h-auto w-full lg:w-auto object-cover rounded-lg"
                            src={coach.imageURL}
                            alt={coach.imageAlt}
                          />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-3 lg:mt-6 order-first lg:order-last">
                          <h4 className="text-2xl font-bold font-heading">
                            {coach.name}
                          </h4>
                          <p className="mb-6 text-gray-500">{coach.title}</p>
                          <p className="mb-6 text-gray-500 leading-loose">
                            {coach.description}
                          </p>
                          {/* <p className="mb-6 text-gray-500 leading-loose">
                            Quisque id sagittis turpis. Nulla sollicitudin
                            rutrum eros eu dictum. Integer sit amet erat sit
                            amet lectus lacinia mattis. Donec est tortor,
                            fermentum at urna a, accumsan suscipit sem.
                          </p> */}
                        </div>
                      </div>
                    </Zoom>
                  ) : (
                    <div />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

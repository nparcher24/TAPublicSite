import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CTA from "../components/CTA";
import Fade from "react-reveal/Fade";

const coaches = [
  {
    name: "Alex",
    title: "Founder / CEO",
    description:
      "Alex is an Iraq war Veteran and fitness enthusiast. He is also the CEO of a BattleBars, LLC, a growing Protein bar company that promotes great taste without sacrificing quality ingredients. \n\n “I believe health and fitness is the foundation to sustain a purposeful life. \n\n Working towards a long term goal with Veterans and first responders moves me like no other. Introducing the civilian community to the world of those who serve us was a no brainer!  \n\n Whether you are in the best shape of your life or just starting your fitness journey, we have something for you at 10⬝40⬝10. What better way to honor your body and those who serve us than to invest in yourself.",
    image:
      "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1634667864/alex-witt-1_plpiv8.webp",
  },
  {
    name: "Brock",
    title: "Chief Inspirational Officer",
    description:
      "Husband, Father, Fighter. I’m a 9/11 patriot. Joined the Navy days after. Thoroughly enjoyed my time in the military. It brought structure, pride and a sense of family my life was missing at that point.  Unfortunately, due to a car accident that left me with a T-12 spinal cord injury, my time in the service was cut short. \n\nIt would have been easy to quit at that point but the military made a warrior out of me….and warriors don’t quit.  A couple of years later I started coaching football which gave me both an opportunity to be a part of a family again and a chance to inspire young men to push through when things weren’t going their way. \n\nIn 2016 I was diagnosed with Parkinson’s. Another blow. But once again not a knockout blow. With support from my family and friends, we figured out a regimen to allow me to keep living an active life. Cut to the present. \n\nI just got out of the VA after a 6-month stay. I’m 130lbs, physically weak. I’ve got a hard road ahead but it’s a road ahead indeed. \n\nI love working with 10⬝40⬝10 and hope my story and my continued journey will inspire others.",
    image:
      "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1634668088/brock-shiffer-1_q61wxu.webp",
  },
  {
    name: "Kim",
    title: "Coach",
    description: `At 29 years old, Kim is a native to the area. Born and raised into an athletic family, Kim has attended, participated in, and watched sports her entire life.

      Kim graduated from the University of Illinois in Urbana-Champaign (GO ILLINI) with a Bachelor’s of Science in Kinesiology in 2013. Immediately after college, Kim became a Certified Personal Trainer (CPT) through the National Academy of Sports Medicine (NASM). She worked as a personal trainer and in rehabilitation for a few years afterwards.
      
  She then made the decision to re-enroll in school. In 2017, she became a Nationally Registered and State Licensed Paramedic. That same year, she graduated NIPSTA Fire Academy with title of Firefighter. She became a Certified Emergency Telecommunicator through the International Academies of Emergency Dispatch in 2020.
          
      As the first and only full-time female firefighter/paramedic at her department, Kim is a firm believer in functional fitness, respect, and a driven mentality. She does not believe in easy shortcuts. She wants to help the 10-40-10 community understand their existing potential and how much fitness can impact life.`,
    image:
      "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631651887/image_11_ld6a92.webp",
  },
  {
    name: "Ethan",
    title: "Coach",
    description: `Ethan is an aspiring entrepreneur, driven by his love for fitness and helping others succeed alongside him. He has been involved in sports and fitness throughout his life but lost himself after the end of his high school years. Since starting at 104010 in January of 2020, Ethan has gained 20 lbs of muscle and an insurmountable amount of knowledge to help others.

    “Not only have I seen insurmountable progress in myself, physically and mentally… but in others on an even greater level. 10.40.10 has given me an absolute purpose. Seeing people light up daily lets me know I am in the right place and part of something truly special.”`,
    image:
      "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1634668671/ethan-huber-1_jwevba.webp",
  },
];

export default function AboutUs(props) {
  return (
    <div>
      <div className="container mx-auto pt-24">
        <Fade>
          <div className="max-w-6xl mx-auto">
            <div className="about-heading text-center">
              <h1 className="text-2xl  md:text-4xl lg:text-4xl leading-tight  font-heading  text-black  mt-20 mb-20 norwester fitness-head">
                WHAT MAKES <span className="text-taLightRed">10.40.10</span>{" "}
                DIFFERENT?
              </h1>
            </div>
          </div>
        </Fade>
        <section className="">
          <div className="max-w-6xl px-4 lg:px-0 mx-auto">
            <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
              <Fade left>
                <div className="lg:w-1/2">
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631651887/image_7_cvnwib.webp"
                    alt="Our Culture"
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="lg:w-1/2 px-2 lg:pl-12 mt-10 lg:mt-0">
                  <h2 className="text-4xl px-4 mb-12 leading-tight  font-heading mt-2 norwester text-blue-800">
                    Culture & Environment
                  </h2>
                  <div className="text-black text-center lg:text-left text-base w-full lg:w-8/12 mont help-para">
                    <p>
                      Help the person next to you improve and you will find
                      improvement in yourself.” You’ll never workout alone at
                      104010 Fitness. We believe that group exercise naturally
                      motivates us more, provides accountability, provides
                      faster results, and without question, builds unbreakable
                      bonds!
                    </p>
                    <p className="pt-4 pb-6 lg:pb-2">
                      When you walk through our doors, we know your name. We
                      celebrate victories together and support each other
                      through life’s inevitable challenges. We are a community
                      of passionate individuals who demand more of our minds and
                      bodies.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="flex flex-wrap  items-center text-center lg:text-left -mx-2">
              <Fade left>
                <div className="lg:w-1/2 lg:pl-8  mt-10 lg:mt-0">
                  <h2 className="text-4xl md:text-4xl px-4 mb-12 leading-tight  font-heading text-taBlue mt-2 norwester">
                    Strength and Stamina is our{" "}
                    <span className="text-taRed">CORE</span> focus.
                  </h2>
                  <div className="mb-4 text-black text-base text-center lg:text-left w-full lg:w-8/12  px-4 mont">
                    <p className="">
                      <span className="font-bold">
                        Monday, Wednesday, Friday:
                      </span>{" "}
                      <br />
                      80% Strength / 20% stamina
                      <div className="h-6" />
                      <span className="font-bold">
                        Tuesday, Thursday, Saturday:
                      </span>
                      <br /> 80% Stamina / 20% Strength
                      <div className="h-6" />
                      <span className="font-bold"> Sunday:</span> Cardio and
                      Core
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="lg:w-1/2">
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631651879/image_8_bbkbzm.webp"
                    alt="Workout with us"
                  />
                </div>
              </Fade>
            </div>
            <div className="flex flex-wrap -mx-2">
              <Fade left>
                <div className="lg:w-1/2  mb-6 lg:mb-0">
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631651885/image_9_gg6vtf.webp"
                    alt="Second workout in gym"
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="lg:w-1/2 px-2">
                  <h2 className="text-4xl px-4 lg:px-8  leading-tight  font-heading text-taRed  pt-12 norwester">
                    Chow American
                  </h2>
                  <div className="flex flex-wrap  pl-4 lg:pl-8 lg:pr-16">
                    <h3 className="text-lg md:text-xl pb-6 font-bold">
                      Simplified nutrition guidance and{" "}
                      <span className="font-bold text-taBlue">EPIC</span> cheat
                      days
                    </h3>
                    <p className="text-md md:text-lg">
                      Our goal is simple: to make nutrition easy and
                      common-sense. No counting calories. No complex nutrition
                      macros. Just a simple whole-food philosophy with
                      accountability.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="flex flex-wrap  -mx-2">
              <Fade left>
                <div className="lg:w-1/2 px-2 pl-4 lg:pl-9">
                  <h2 className="text-4xl  mb-6 leading-tight  font-heading text-red-600 pt-12  norwester">
                    Fitness meets science
                  </h2>
                  <div className="flex flex-wrap -mx-6 ">
                    <div className="lg:w-1/2 px-6 mb-6 lg:mb-0">
                      <h2 className="text-2xl leading-tight font-semibold font-heading">
                        Track American
                      </h2>
                      <p>
                        Coming soon: Our own proprietary fitness tracking app
                        made by Veterans to create the ultimate American.
                      </p>
                    </div>
                    <div className="lg:w-1/2 px-6">
                      <h2 className="text-2xl leading-tight font-semibold font-heading">
                        InBody Scan
                      </h2>
                      <p>
                        Scales only list your weight while missing important
                        factors. The machine arms us with the data we need to
                        reach our ideal fitness goals. We invested in this to
                        make you the ultimate American and scanning regularly
                        will help you become a smarter athlete!
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="lg:w-1/2   mb-6 lg:mb-0">
                  <img
                    className="w-full"
                    src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,q_auto/v1631651886/image_10_y6zt8u.webp"
                    alt="Accountability"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="px-4 pb-20">
          <div className="max-w-screen-2xl  mx-auto"></div>
        </section>
      </div>
      <section className="bg-white">
        <div className="bg-white max-w-7xl mx-auto pt-0 lg:pt-10 lg:py-24  relative">
          <div className="pb-16  lg:pb-0  lg:relative">
            <Fade>
              <h1 className="text-5xl pb-32 py-8 text-center font-heading pl-0 md:pl-96 w-full norwester meet-heading">
                MEET OUR TEAM
              </h1>
            </Fade>
            <Fade>
              <div className="slideshow-container max-w-5xl mx-auto">
                <Carousel
                  // autoPlay={true}
                  showArrows={true}
                  infiniteLoop={true}
                  showStatus={false}
                >
                  {coaches.map((coach, i) => {
                    return (
                      <div className="" id={`${i} index`}>
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 px-2 md:px-10 pb-10">
                          <div className="aspect-w-3 aspect-h-4 sm:aspect-w-3 sm:aspect-h-4">
                            <img
                              className="object-cover shadow-lg rounded-lg object-top border-2"
                              src={coach.image}
                              alt={`Coach ${i}`}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <div className="space-y-4">
                              <div className="text-lg leading-6 font-medium space-y-1">
                                <h3 className="text-4xl font-bold p-4">
                                  {coach.name}
                                </h3>
                                <p className="text-indigo-600">{coach.title}</p>
                              </div>
                              <div className="text-lg px-2 md:px-10">
                                <p className="text-gray-500 whitespace-pre-line text-left text-sm">
                                  {coach.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

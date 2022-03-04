import React from "react";
import { format, compareAsc } from "date-fns";

let heroes = [
  {
    name: "Kyle Carpenter",
    branch: "U.S. Marine Corps",
    link: "https://mohmuseum.org/medal_of_honor/carpenter-william-kyle/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/carpenter-william-kyle.jpg",
    awardDate: new Date(2010, 10, 21),
    location: "Helmand Province, Afghanistan",
  },
  {
    name: "Thomas Payne",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/payne-thomas-p/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg",
    awardDate: new Date(2015, 9, 22),
    location: "Near Hawijah, Iraq",
  },
  {
    name: "Michael Monsoor",
    branch: "U.S. Navy",
    link: "https://mohmuseum.org/medal_of_honor/monsoor-michael-a/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/Michael-Monsoor_2.jpg",
    awardDate: new Date(2006, 8, 29),
    location: "Ar Ramadi, Iraq",
  },
  {
    name: "Jason Dunham",
    branch: "U.S. Marine Corps",
    link: "https://mohmuseum.org/medal_of_honor/dunham-jason-l/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/JasonDunham.jpg",
    awardDate: new Date(2004, 3, 14),
    location: "Karabilah, Iraq",
  },
  {
    name: "Alwyn Cashe",
    branch: "U.S. Army",
    link: "https://www.army.mil/medalofhonor/cashe/?from=features",
    imageURL:
      "https://www.army.mil/e2/images/rv7/medalofhonor/cashe/graphics/cashe_bio.jpg",
    awardDate: new Date(2005, 9, 17),
    location: "Near Samarra, Iraq",
  },
  {
    name: "Christopher Celiz",
    branch: "U.S. Army",
    link: "https://www.army.mil/medalofhonor/celiz/",
    imageURL:
      "https://www.army.mil/e2/images/rv7/medalofhonor/celiz/graphics/celiz_bio.jpg",
    awardDate: new Date(2018, 6, 12),
    location: "Paktia Province, Afghanistan",
  },

  {
    name: "Paul Smith",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/smith-paul-r/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/Paul_Ray_Smith.jpg",
    awardDate: new Date(2003, 3, 4),
    location: "Baghdad, Iraq",
  },
  {
    name: "Michael Murphy",
    branch: "U.S. Navy",
    link: "https://mohmuseum.org/medal_of_honor/murphy-michael-p/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/800px-Michael_P._Murphy_portrait-728x1024.jpg",
    awardDate: new Date(2005, 5, 28),
    location: "Near Asadabad, Afghanistan",
  },
  {
    name: "Britt Slabinski",
    branch: "U.S. Navy",
    link: "https://mohmuseum.org/medal_of_honor/slabinski-britt-k/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/06/Slabinski_01.jpg",
    awardDate: new Date(1969, 11, 1),
    location: "Takur Ghar, Afghanistan",
  },
  {
    name: "Dakota Meyer",
    branch: "U.S. Marine Corps",
    link: "https://mohmuseum.org/medal_of_honor/meyer-dakota/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/meyer-dakota.jpg",
    awardDate: new Date(2009, 8, 7),
    location: "Kunar Province, Afghanistan",
  },
  {
    name: "David Bellavia",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/bellavia-david-g/",
    imageURL: "https://mohmuseum.org/wp-content/uploads/2019/10/Bellavia.jpg",
    awardDate: new Date(2004, 9, 10),
    location: "Fallujah, Iraq",
  },
  {
    name: "Ross McGinnis",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/mcginnis-ross-a/",
    imageURL:
      "http://localhost/mohmuseum/wp-content/uploads/2018/01/ross-McGinnis-.jpg",
    awardDate: new Date(2006, 11, 4),
    location: "Adhamiyah, Iraq",
  },
  {
    name: "Kyle White",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/white-kyle-j/",
    imageURL: "https://mohmuseum.org/wp-content/uploads/2018/01/Kyle_White.jpg",
    awardDate: new Date(2007, 10, 9),
    location: "Aranas, Afghanistan",
  },
  {
    name: "Ryan Pitts",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/pitts-ryan-m/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/Ryan_M_Pitts.jpg",
    awardDate: new Date(2008, 6, 13),
    location: "Wanat Village, Kunar Province, Afghanistan",
  },
  {
    name: "Jared Monti",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/monti-jared-c/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/Jared_C._Monti_crop.jpg",
    awardDate: new Date(2006, 5, 21),
    location: "Nuristan Province, Afghanistan",
  },
  {
    name: "John Chapman",
    branch: "U.S. Air Force",
    link: "https://mohmuseum.org/medal_of_honor/john-a-chapman/",
    imageURL: "https://mohmuseum.org/wp-content/uploads/2018/08/Chapman.jpg",
    awardDate: new Date(2002, 2, 4),
    location: "Takur Ghar, Afghanistan",
  },
  {
    name: "Leroy Petry",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/petry-leroy-a/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/petry-leroy-a.jpg",
    awardDate: new Date(2008, 4, 26),
    location: "Paktya Province, Afghanistan",
  },
  {
    name: "Robert Miller",
    branch: "U.S. Army",
    link: "https://mohmuseum.org/medal_of_honor/miller-robert-j/",
    imageURL:
      "https://mohmuseum.org/wp-content/uploads/2018/01/robert-james-miller.jpg",
    awardDate: new Date(2008, 0, 25),
    location: "Konar Province, Afghanistan",
  },
];

export default function Heroes() {
  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-body text-indigo-600 tracking-wide uppercase">
              Our Heroes
            </h2>
            <p className="mt-1 text-4xl font-heading font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Honoring Incredible Americans
            </p>
            <p className="max-w-xl font-body mt-5 mx-auto text-xl text-gray-500">
              {" "}
              Instead of using numbers or letters to organize our stations, we
              chose to live the Train American ethos by honoring Medal of Honor
              recipients.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="bg-white shadow overflow-hidden sm:rounded-md sm:mx-4 lg:max-w-4xl lg:mx-auto">
          <ul className="divide-y divide-gray-200">
            {heroes.map((hero, index) => {
              return (
                <li key={index}>
                  <a href={hero.link} className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={hero.imageURL}
                            alt={`${hero.name} headshot`}
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-md font-semibold font-heading text-taBlue truncate">
                              {hero.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <span className="truncate">{hero.branch}</span>
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                {`Date of action: ${format(
                                  hero.awardDate,
                                  "MMM d, yyyy"
                                )}`}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                {hero.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}

            {/* <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/carpenter-william-kyle/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/01/carpenter-william-kyle.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Kyle Carpenter
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Marine Corps</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2010-11-21">Nov 21, 2010</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Helmand Province, Afghanistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/monsoor-michael-a/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/01/Michael-Monsoor_2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Monsoor, Michael
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Navy</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2006-9-29">Sep 29, 2006</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Ar Ramadi, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/dunham-jason-l/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/01/JasonDunham.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Jason Dunham
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Marine Corps</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2004-04-14">April 15, 2004</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Karabilah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.army.mil/medalofhonor/cashe/?from=features"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://www.army.mil/e2/images/rv7/medalofhonor/cashe/graphics/bio_right.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Alwyn Cashe
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2005-10-17">Oct 17, 2005</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Samarra, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.army.mil/medalofhonor/celiz/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://www.army.mil/e2/images/rv7/medalofhonor/celiz/graphics/celiz_bio.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Christopher Celiz
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2018-07-12">July 12, 2018</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Paktia Province, Afghanistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/smith-paul-r/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/01/Paul_Ray_Smith.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Paul Smith
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2003-4-4">Apr 4, 2003</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Baghdad, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/murphy-michael-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/01/800px-Michael_P._Murphy_portrait-728x1024.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Michael Murphy
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Navy</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2005-06-28">Jun 28, 2005</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Near Asadabad, Afghanistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/slabinski-britt-k/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2018/06/Slabinski_01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Britt Slabinski
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Navy</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2002-3-4">Mar 4, 2002</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Takur Ghar, Afghanistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://mohmuseum.org/medal_of_honor/payne-thomas-p/"
                className="block hover:bg-gray-50"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://mohmuseum.org/wp-content/uploads/2020/09/Unknown-345x440.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-blue-700 truncate">
                          Thomas Payne
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">U.S. Army</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Date of action:
                            <time datetime="2015-10-22">Oct 22, 2015</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            Hawijah, Iraq
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

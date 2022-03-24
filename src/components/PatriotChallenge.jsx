import React from "react";

export default function PatriotChallenge() {
  return (
    <div>
      <div class="relative py-16 bg-white">
        <div
          class="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
          aria-hidden="true"
        ></div>
        <div class="max-w-7xl mx-auto bg-gray-800 pt-12 lg:bg-transparent lg:px-8">
          <div class="lg:grid lg:grid-cols-12">
            <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                aria-hidden="true"
              ></div>
              <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div class="aspect-w-10 aspect-h-6 sm:aspect-w-5 sm:aspect-h-4 lg:aspect-w-5">
                  <img
                    class="object-cover object-center rounded-3xl shadow-2xl bg-gray-300"
                    src="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1648152398/HERO_MISSION_CROWTHER_nv50et.jpg"
                    alt="Patriot Challenge Motivation"
                  />
                </div>
              </div>
            </div>

            <div class="relative bg-gray-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              ></div>
              <div class="relative max-w-md mx-auto py-6 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  class="text-3xl font-extrabold text-white font-heading"
                  id="join-heading"
                >
                  THE TRAIN AMERICAN CHALLENGE IS BACK!!!
                </h2>
                <p class="text-lg text-white font-body">May 21, 2022</p>
                <p class="text-lg text-white font-body mt-8">
                  Our next mission is just as challenging as it is
                  inspirational. The story of this hero will have your
                  adrenaline pumping, emotions flowing, and humbling sense of
                  pride in our countrymen.
                </p>
                <a
                  class="transition duration-500  block font-heading font-bold w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base text-taLightRed hover:bg-gray-200 sm:inline-block sm:w-auto"
                  href="https://trainamericanchallenge.com/patriotchallenge"
                >
                  FIND OUT MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

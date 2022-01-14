import React from "react";

export default function ErrorPage(props) {
  return (
    <div
      className="h-screen w-screen bg-cover bg-top text-body bg-black"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/trainamerican/image/upload/b_rgb:000000,dpr_auto,f_auto,o_46,q_auto/v1641589917/christian_stupid_face_ewsdjc.jpg')",
      }}
    >
      <div class="max-w-7xl mx-auto px-4 py-32 text-center sm:px-6 sm:py-40 lg:px-8 lg:py-48">
        <p class="text-sm font-body text-blue-100 text-opacity-50 uppercase tracking-wide">
          404 error: Page not found
        </p>
        <h1 class="mt-2 text-4xl font-heading tracking-wide text-white sm:text-5xl">
          Uh oh! I think you’re lost.
        </h1>
        <p class="mt-2 text-xl font-body text-white text-opacity-50">
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div class="mt-6">
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white  bg-black bg-opacity-25 sm:bg-opacity-25 sm:hover:bg-opacity-50 transition duration-300"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

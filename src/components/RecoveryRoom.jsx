/* This example requires Tailwind CSS v2.0+ */

export default function RecoveryRoom() {
  return (
    <div className="bg-white py-16">
      <section>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover bg-black opacity-50"
                    src="https://assets.cdn.msgsndr.com/1IdY7EXHnxzR0aBQIoQ2/media/62585d7aa474c5e0c7bc21d7.jpeg"
                    alt="The amazing new recovery room at 104010 fitness"
                  />
                  <div
                    className="absolute inset-0 bg-taLightBlue"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold font-heading tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Train Hard.</span>
                    <span className="block text-indigo-200">Recover Hard.</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                    The Deer Park recovery room is now officially open.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto ">
                      <a
                        href="https://locations.104010fitness.com/deer-park-recovery"
                        className="transition-all duration-300 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

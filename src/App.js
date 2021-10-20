import React from "react";
import { Suspense } from "react";

// import Navigation from "./control/Navigation";
// import Footer from "./control/Footer";

import { Switch, Route, useLocation } from "react-router-dom";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Bounce from "react-reveal/Bounce";
import { XIcon } from "@heroicons/react/outline";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Navigation = React.lazy(() => import("./control/Navigation"));
const Footer = React.lazy(() => import("./control/Footer"));

// const firebaseConfig = {
//   apiKey: "AIzaSyCNU2yWyR0ctFUqxHJ2ZT5DcpPdh6vk97I",
//   authDomain: "leaderboard-d5992.firebaseapp.com",
//   projectId: "leaderboard-d5992",
//   storageBucket: "leaderboard-d5992.appspot.com",
//   messagingSenderId: "76465362834",
//   appId: "1:76465362834:web:26e5f0df159e712ce2534b",
//   measurementId: "G-6RJVS4GD1D",
// };

function App() {
  const location = useLocation();
  // initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div>
      <Switch>
        <Route exact={true} path="/privacy">
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
        </Route>
        <Route exact={true} path="/terms">
          <Suspense fallback={<div>Loading...</div>}>
            <Terms />
          </Suspense>
        </Route>
        <Route exact={true} path="/about">
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs setShowForm={setShowForm} />
          </Suspense>{" "}
        </Route>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Home setShowForm={setShowForm} />
          </Suspense>
        </Route>
      </Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation pathName={location.pathname} setShowForm={setShowForm} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>

      {showForm ? (
        <div className="fixed pin inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div
            className="w-full h-full bg-transparent fixed overflow-auto"
            onClick={() => {
              setShowForm(false);
            }}
          />
          <Bounce top>
            <iframe
              src="https://msgsndr.com/widget/form/e24tWmK0yNqTlZ04NK78"
              title="Contact Us Form"
              className="relative flex-col flex border-none w-full max-w-lg mx-auto h-full"
              scrolling="yes"
              id="e24tWmK0yNqTlZ04NK78"
            />
            <button
              onClick={() => {
                setShowForm(false);
              }}
              className="absolute top-0 right-0 m-8 items-center justify-center p-2 rounded-md text-black md:text-white hover:text-gray-500 hover:bg-gray-100 hover:bg-opacity-30 transition duration-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </Bounce>

          <script src="https://msgsndr.com/js/form_embed.js"></script>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;

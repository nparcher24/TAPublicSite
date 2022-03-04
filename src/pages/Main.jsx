import React from "react";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Temp from "../components/Temp";
import Locator from "./Locator";
import FAQ from "./FAQ";
import WorkoutPage from "./WorkoutPage";
import ErrorPage from "./404";
import Store from "./Store";
import Heroes from "./Heroes";

const Home = React.lazy(() => import("./Home"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));
const Terms = React.lazy(() => import("./Terms"));
const Navigation = React.lazy(() => import("../control/Navigation"));
const Footer = React.lazy(() => import("../control/Footer"));

function Main() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route
          exact={true}
          path="/heroes"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Heroes />
            </Suspense>
          }
        />
        <Route
          exact={true}
          path="/store"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Store />
            </Suspense>
          }
        />
        <Route
          exact={true}
          path="/workout"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <WorkoutPage />
            </Suspense>
          }
        />
        <Route
          exact={true}
          path="/faq"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          exact={true}
          path="/blackfriday"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Temp />
            </Suspense>
          }
        />

        <Route
          exact={true}
          path="/locations"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Locator />
            </Suspense>
          }
        />

        <Route
          exact={true}
          path="/privacy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route
          exact={true}
          path="/terms"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Terms />
            </Suspense>
          }
        />

        {/* <Route
          exact={true}
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          }
        /> */}
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          exact={true}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>

      <Suspense fallback={<div>Loading...</div>}>
        <Navigation pathName={location.pathname} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Main;

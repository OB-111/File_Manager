import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoaderSpinnerCircle from "./shared/components/loaderSpinnerCircle";

const AppRoutes = () => {
  const HomeView = React.lazy(() => import("./views/homeView"));
  const LoginView = React.lazy(() => import("./views/loginView"));

  return (
    <Suspense
      fallback={
        <div className="w-100 h-screen flex items-center justify-center">
          <LoaderSpinnerCircle />
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;

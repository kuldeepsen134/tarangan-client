import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoutes from "./routes/private";
import PrivateLayout from "./layouts/privateLayout";
import PublicLayout from "./layouts/publicLayout";
import PublicRoutes from "./routes/public";

import './style.scss';
import './App.css'
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import HomePage from "./pages/Home";

function App() {
  const { isUserLoggedIn } = useSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/app" element={isUserLoggedIn ? <PrivateLayout /> : <Navigate to='/login' />} >
            <Route index element={<Navigate to={`/app/admindashboard`} />} />
            {PrivateRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="/app/*" element={<Navigate to={`/login`} />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            {PublicRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="/*" element={<Navigate to={`/`} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;

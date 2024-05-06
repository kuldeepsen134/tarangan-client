import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader, Footer, Header } from '../components'

const PublicLayout = () => {
  const location = useLocation();

  // Define a function to determine which header to render based on the current location
  const renderHeader = () => {
    // Extract the pathname from the location object
    const { pathname } = location;
    console.log('pathname??????????', pathname);
    // Depending on the pathname, return the appropriate header component
    switch (pathname) {
      case "/shop":
        return <AppHeader />;
      default:
        return <Header />; // Default header if no matching route is found
    }
  };
  return (
    <Suspense>
       {renderHeader()} {/* Render the appropriate header */}
      <Outlet />
      <Footer />

    </Suspense>
  )
}
export default PublicLayout
import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader, Footer, Header } from '../components'

const PublicLayout = () => {
  const location = useLocation();

  const renderHeader = () => {
    const { pathname } = location;

    switch (pathname) {
      case "/shop":
        return <AppHeader />;
      case "/login":
        return <AppHeader />;
      case "/signUp":
        return <AppHeader />;
      case "/app/cart":
        return <AppHeader />;
      case "/app/MyAccount":
        return <AppHeader />;
      default:
        return <Header />;
    }
  };
  return (
    <Suspense>
      {renderHeader()}
      <Outlet />
      <Footer />

    </Suspense>
  )
}
export default PublicLayout
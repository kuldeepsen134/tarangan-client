import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const PublicLayout = () => {
  return (
    <Suspense>
      <Header />
      <Outlet />
      <Footer />

    </Suspense>
  )
}
export default PublicLayout
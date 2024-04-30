import HomePage from "../pages/Home"
import AboutPage from "../pages/about/About"
import { Forgot, SignUp, UpdatePassword } from "../pages/auth"
import LoginPage from "../pages/auth/Login"

const PublicRoutes = [
  { path: '/signUp', exact: true, name: 'SignUp', component: SignUp },
  { path: '/login', exact: true, name: 'Login', component: LoginPage },
  { path: '/forgotPassword', exact: true, name: 'Forgot', component: Forgot },
  { path: '/updatePassword', exact: true, name: 'UpdatePassword', component: UpdatePassword },

  { path: '/home', exact: true, name: 'home', component: HomePage },
  

  { path: '/aboutUS', name: 'About', exact: true, component: AboutPage },
]

export default PublicRoutes
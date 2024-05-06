import HomePage from "../pages/Home"
import AboutPage from "../pages/about/About"
import ContactUs from "../pages/about/ContactUs"
import { Forgot, SignUp, UpdatePassword } from "../pages/auth"
import LoginPage from "../pages/auth/Login"
import ResourceLForgot from "../pages/auth/resource/Forgot"
import ResourceLoginPage from "../pages/auth/resource/Login"
import ResourceLSignUp from "../pages/auth/resource/SignUp"
import ResourceLUpdatePassword from "../pages/auth/resource/UpdatePassword"
import Product from "../pages/product/Product"
import ProductSingle from "../pages/product/ProductSingle"

const PublicRoutes = [
  { path: '/', exact: true, name: 'HomePage', component: HomePage },

  { path: '/signUp', exact: true, name: 'SignUp', component: SignUp },
  { path: '/login', exact: true, name: 'Login', component: LoginPage },
  { path: '/forgotPassword', exact: true, name: 'Forgot', component: Forgot },
  { path: '/updatePassword', exact: true, name: 'UpdatePassword', component: UpdatePassword },

  // For Resources
  { path: '/resourceSignUp', exact: true, name: 'ResourceSignUp', component: ResourceLSignUp },
  { path: '/resourceLogin', exact: true, name: 'ResourceLogin', component: ResourceLoginPage },
  { path: '/resourceForgotPassword', exact: true, name: 'ResourceForgot', component: ResourceLForgot },
  { path: '/resourceUpdatePassword', exact: true, name: 'ResourceUpdatePassword', component: ResourceLUpdatePassword },



  { path: '/shop', exact: true, name: 'Products', component: Product },
  { path: '/products/:id', exact: true, name: 'ProductSingle', component: ProductSingle },
  { path: '/contactus', exact: true, name: 'ContactUs', component: ContactUs },





  

  { path: '/aboutus', name: 'About', exact: true, component: AboutPage },
]

export default PublicRoutes
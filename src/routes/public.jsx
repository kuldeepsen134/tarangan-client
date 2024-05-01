import HomePage from "../pages/Home"
import AboutPage from "../pages/about/About"
import ContactUs from "../pages/about/ContactUs"
import { Forgot, SignUp, UpdatePassword } from "../pages/auth"
import LoginPage from "../pages/auth/Login"
import Product from "../pages/product/Product"
import ProductSingle from "../pages/product/ProductSingle"

const PublicRoutes = [
  { path: '/', exact: true, name: 'HomePage', component: HomePage },

  { path: '/signUp', exact: true, name: 'SignUp', component: SignUp },
  { path: '/login', exact: true, name: 'Login', component: LoginPage },
  { path: '/forgotPassword', exact: true, name: 'Forgot', component: Forgot },
  { path: '/updatePassword', exact: true, name: 'UpdatePassword', component: UpdatePassword },
  { path: '/products', exact: true, name: 'Products', component: Product },
  { path: '/products/:id', exact: true, name: 'ProductSingle', component: ProductSingle },
  { path: '/contactus', exact: true, name: 'ContactUs', component: ContactUs },





  

  { path: '/aboutus', name: 'About', exact: true, component: AboutPage },
]

export default PublicRoutes
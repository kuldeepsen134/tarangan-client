
import AddToCart from "../pages/cart/AddToCart"
import Checkout from "../pages/cart/Checkout"
import VenderProfilePage from "../pages/vender/Profile"


const PrivateRoutes = [

  { path: '/app/profile',  name: 'VenderProfilePage', component: VenderProfilePage },
  { path: '/app/cart',  name: 'AddToCart', component: AddToCart },
  { path: '/app/checkout',  name: 'Checkout', component: Checkout },



]

export default PrivateRoutes
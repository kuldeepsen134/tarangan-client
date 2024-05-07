import { CustomerProfile } from "../pages/auth";
import VenderProfilePage from "../pages/vender/Profile";

const PrivateRoutesResource = [
  {
    path: "/app/profile",
    name: "VenderProfilePage",
    component: VenderProfilePage,
  },
  {
    path: "/app/user/profile",
    name: "CustomerProfile",
    component: CustomerProfile,
  },
];

export default PrivateRoutesResource;

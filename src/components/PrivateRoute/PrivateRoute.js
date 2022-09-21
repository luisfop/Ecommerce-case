import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Auth from "../Auth";

const PrivateRoutes = () => {
  let auth = useAuth();
  return auth.token ? <Outlet /> : <Auth />;
};

export default PrivateRoutes;

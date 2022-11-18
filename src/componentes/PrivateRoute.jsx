import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({auth, redirectTo = "/iniciosesion"}) => {
    if (!auth){
        return <Navigate to= {redirectTo}/>
    }
  return <Outlet/>;
};


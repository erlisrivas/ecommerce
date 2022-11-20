import { Navigate } from "react-router-dom";

export const PrivateRoute = ({auth, children, redirecTo = "/iniciosesion"}) => {
    if (!auth){
        return <Navigate to= {redirecTo}/>
    }
  return children;
};


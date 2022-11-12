import {Route} from "react-router";
import {Navigate} from "react-router-dom";

let auth;
auth = true;
auth= null; 

const PrivateRoute = ({props}) => {

return(
    <Route path={props.path} element={props.element}>{auth? {} : <Navigate to="/"/>}</Route>
);

}
export default PrivateRoute;
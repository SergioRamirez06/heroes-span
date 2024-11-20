import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {

    const { Logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);
    
    
     return ( Logged ) 
     ? <Navigate to="/login" />
     :  children  
}

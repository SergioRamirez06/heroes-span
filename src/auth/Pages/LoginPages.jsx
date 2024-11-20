import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context";



export const LoginPages = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'
    
    login( 'Sergio Ramirez' );

    navigate(lastPath, {
      replace: true
    })
  };

  return (
    <>
        <div className="container m-5">
          <h1>LoginPages</h1>
          <hr />

          <button 
            className="btn btn-pramary btn-dark"
            onClick={ onLogin }>
              Login
          </button>
        </div>
        
    </>
  )
};

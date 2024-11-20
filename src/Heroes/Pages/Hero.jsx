import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../Helpers";
import { useMemo } from "react";

export const Hero = () => {

  const{ id } = useParams();
  const heroe = useMemo( () => getHeroeById( id ), [ id]) ;
  const inicio = useNavigate();

  const onReturn = () => {
    inicio(-1) 
  };


  if( !heroe ){
    return <Navigate to="/dc" />
  };
  const imgHeroes = `../../assets/heroes/${ id }.jpg`

  return (
    <>
        <div className="container">
          <div className="row m-5">
            <div className="col-6 animate__animated animate__fadeInLeft">
              <img src={ imgHeroes } alt={ heroe.id } />
            </div>
            <div className="col-6 animate__animated animate__fadeInRight">
              <h3><em><strong>{ heroe.superhero }</strong></em></h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter Ego: </b><em>{ heroe.alter_ego }</em></li>
                <li className="list-group-item"><b>publisher: </b><em>{ heroe.publisher }</em></li>
                <li className="list-group-item"><b>Alter Ego: </b><em>{ heroe.first_appearance }</em></li>
              </ul>
              <h5 className="mt-3"><b><em>Characters</em></b></h5>
              <p><em>{ heroe.characters }</em></p>

              <button 
                type="button" 
                className="btn btn-outline-dark"
                onClick={ onReturn }>Regresar</button>
            </div>
          </div>
      </div>

    </>
  )
}

import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
    if( alter_ego === characters ) return ( <></> )
        return <p>{ characters }</p> 
    // if( alter_ego === characters ) 
    // ? <></> 
    // :<p>{ characters }</p>;
};

export const HeroCard = ( { id, 
    superhero, 
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {

        const heroesImg = `../../assets/heroes/${ id }.jpg`

        // const caracteres = ( <p>{ characters }</p> );
  return (

    <>
       <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroesImg } className="img-fluid rounded-start" alt={ superhero }/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-title"><strong>{ superhero }</strong></p>
                            <p className="card-text"><em>{ alter_ego }</em></p>
                            {/* {
                            ( alter_ego !== characters ) && caracteres
                            } */}
                            <CharactersByHero alter_ego={ alter_ego } characters={ characters }/>
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                mas...
                            </Link>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </>
  )
  
}



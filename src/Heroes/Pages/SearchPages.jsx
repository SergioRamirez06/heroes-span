import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../auth"
import queryString from "query-string";
import { getHeroesByName } from "../Helpers";
import { HeroCard } from "../Components";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const {formState, onInputChange, onResetForm } =useForm({
    search: q
  });

  const { search } = formState;

  const onSubmitSerch = (e) => {
    e.preventDefault();
    // if( search.trim().length <= 1 ) return;

    navigate(`?q=${ search }`)
  };
  
  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Resultado</h4>
            <hr />
            <form onSubmit={ onSubmitSerch }>
              <input 
                type="text"
                placeholder="Search Heroes" 
                className="form-control"
                name='search'
                value={ search }
                onChange={ onInputChange }
                autoComplete="off"/>

              <button 
                type="button" 
                className="btn btn-dark mt-2">Search</button>
            </form>
          </div>

          <div className="col-7">
            <h4>results</h4>
            <hr />

            <div 
              className="alert alert-primary animate__animated animate__fadeIn" 
              style={{ display: showSearch ? '' : 'none' }}>buscar Heroes</div> 
            <div 
              className="alert alert-danger animate__animated animate__fadeIn" 
              style={{ display: showError ? '' : 'none'}}> Heroe No Encontrado <b>{ q }</b></div>


            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } { ...hero }/>
              ))
            }
          </div>
        </div>

        
    </>
  )
}

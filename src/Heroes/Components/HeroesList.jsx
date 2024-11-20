import { getHeroesByPublisher } from "../Helpers";
import { HeroCard } from '../Components'
import { useMemo } from "react";
export const HeroesList = ({ publisher  }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

  return (
    <>
        <div className="row rows-cols-1 row-cols-md-3 g-3 p-3" >
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero } />
                ))
            }
        </div>
        
    </>
  )
}



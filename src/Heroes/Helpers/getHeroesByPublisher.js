

import { heroes } from '../Data/heroes'

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

    if( !validPublisher.includes( publisher ) ) {
        throw new Error(`${ publisher } No se encuentra`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
 
}
